export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, message } = req.body;

        const klaviyoEndpoint = 'https://a.klaviyo.com/api/v2/list/YOUR_LIST_ID/members';
        const apiKey = 'YOUR_KLAVIYO_PRIVATE_API_KEY';

        try {
            const response = await fetch(klaviyoEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Klaviyo-API-Key ${apiKey}`,
                },
                body: JSON.stringify({
                    profiles: [
                        {
                            email,
                            properties: {
                                message,
                            },
                        },
                    ],
                }),
            });

            if (response.ok) {
                res.status(200).json({ success: true });
            } else {
                res.status(response.status).json({ error: 'Failed to send inquiry' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Server error' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
