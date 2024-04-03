import { NextApiRequest, NextApiResponse } from "next";
import { MercadoPagoConfig, Preference } from "mercadopago";

const accessToken = process.env.NEXT_PUBLIC_TOKEN_MP;
const URL = process.env.NEXT_PUBLIC_SITE_URL;

if(!accessToken) throw new Error;

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        console.log("🚀 ~ req.body:", req.body)
        const client = new MercadoPagoConfig({ accessToken });
        const preference = new Preference(client);
        const { body } = req;
        let totalItems = body.map((product: any) => {
            return {
                title: product.name,
                quantity: product.count,
                unit_price: product.price,
                id: product.id
            }
        });
        totalItems.push({
            title: 'envio',
            quantity: 1,
            unit_price: 3000,
            id: '0'
        })
        const newPreference = {
            body: {
                items: totalItems,
                auto_return: "approved",
                back_urls: {
                    success: `${URL}/cart/success`,
                    failure: `${URL}/cart/error`
                },
                notification_url: `${URL}/api/notify`
            },
        }
    
        const response = await preference.create(newPreference);
        res.status(200).json(response);
    } catch(err) {
        console.log(err);
        res.status(400).json(err)
    }
}