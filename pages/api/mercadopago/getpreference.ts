import { NextApiRequest, NextApiResponse } from "next";
import { MercadoPagoConfig, Preference } from "mercadopago";

const accessToken = process.env.NEXT_PUBLIC_TOKEN_MP;

if(!accessToken) throw new Error;

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const preferenceId = req.body.preferenceId
        console.log(preferenceId)
        const client = new MercadoPagoConfig({ accessToken });
        const preference = new Preference(client);

        const response = await preference.get({ preferenceId })

        res.status(200).json(response);
    } catch(err) {
        console.log(err);
        res.status(400).json(err)
    }
}