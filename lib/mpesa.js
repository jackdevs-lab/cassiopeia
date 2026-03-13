const axios = require('axios');

class Mpesa {
    constructor(consumerKey, consumerSecret, shortcode, passkey) {
        this.consumerKey = consumerKey;
        this.consumerSecret = consumerSecret;
        this.shortcode = shortcode;
        this.passkey = passkey;
        this.authUrl = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
        this.stkPushUrl = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
    }

    async getAccessToken() {
        const auth = Buffer.from(`${this.consumerKey}:${this.consumerSecret}`).toString('base64');
        try {
            const response = await axios.get(this.authUrl, {
                headers: {
                    Authorization: `Basic ${auth}`,
                },
            });
            return response.data.access_token;
        } catch (error) {
            console.error('Mpesa Auth Error:', error.response ? error.response.data : error.message);
            throw new Error('Failed to get Mpesa access token');
        }
    }

    async stkPush(amount, phoneNumber, callbackUrl, accountRef, transactionDesc) {
        const token = await this.getAccessToken();
        const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, 14);
        const password = Buffer.from(`${this.shortcode}${this.passkey}${timestamp}`).toString('base64');

        const data = {
            BusinessShortCode: this.shortcode,
            Password: password,
            Timestamp: timestamp,
            TransactionType: 'CustomerPayBillOnline',
            Amount: Math.round(amount),
            PartyA: phoneNumber,
            PartyB: this.shortcode,
            PhoneNumber: phoneNumber,
            CallBackURL: callbackUrl,
            AccountReference: accountRef,
            TransactionDesc: transactionDesc,
        };

        try {
            const response = await axios.post(this.stkPushUrl, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            console.error('Mpesa STK Push Error:', error.response ? error.response.data : error.message);
            throw new Error('Failed to initiate STK Push');
        }
    }
}

module.exports = Mpesa;
