export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const callbackData = req.body;
    console.log('M-Pesa Callback Received:', JSON.stringify(callbackData, null, 2));

    const resultDesc = callbackData.Body.stkCallback.ResultDesc;
    const resultCode = callbackData.Body.stkCallback.ResultCode;

    if (resultCode === 0) {
        // Payment successful
        const metadata = callbackData.Body.stkCallback.CallbackMetadata.Item;
        const amount = metadata.find(item => item.Name === 'Amount').Value;
        const mpesaReceiptNumber = metadata.find(item => item.Name === 'MpesaReceiptNumber').Value;
        const phoneNumber = metadata.find(item => item.Name === 'PhoneNumber').Value;

        console.log(`Payment Successful: ${mpesaReceiptNumber} - Ksh ${amount} from ${phoneNumber}`);

        // TODO: Update your Firebase order status here
    } else {
        console.log(`Payment Failed: ${resultDesc}`);
    }

    res.status(200).json({ message: 'Callback received' });
}
