import Mpesa from '../../../lib/mpesa';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { amount, phone, accountReference } = req.body;

    // Validate inputs
    if (!amount || !phone) {
        return res.status(400).json({ message: 'Amount and phone are required' });
    }

    // Format phone to 254XXXXXXXXX
    let formattedPhone = phone.replace(/\+/g, '');
    if (formattedPhone.startsWith('0')) {
        formattedPhone = '254' + formattedPhone.slice(1);
    } else if (formattedPhone.startsWith('7') || formattedPhone.startsWith('1')) {
        formattedPhone = '254' + formattedPhone;
    }

    const mpesa = new Mpesa(
        process.env.MPESA_CONSUMER_KEY,
        process.env.MPESA_CONSUMER_SECRET,
        process.env.MPESA_SHORTCODE,
        process.env.MPESA_PASSKEY
    );

    try {
        const callbackUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/mpesa/callback`;
        const response = await mpesa.stkPush(
            amount,
            formattedPhone,
            callbackUrl,
            accountReference || 'CassiopeiaOrder',
            'Flower Store Purchase'
        );

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
