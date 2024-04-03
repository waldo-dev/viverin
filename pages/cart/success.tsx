import React from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
// import emailjs from '@emailjs/browser';

// const URL = process.env.NEXT_PUBLIC_SITE_URL;
// const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID_MAXI;
// const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID_NOTIFY_PAYMENT_EMAILJS;
// const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY_MAXI;
// const templateIdToClient = process.env.NEXT_PUBLIC_TEMPLATE_ID_NOTIFY_CLIENT_EMAILJS;


if(!URL) throw new Error;

const Success = () => {
    const searchParams = useSearchParams();
    
    React.useEffect(() => {
        const preferenceId = searchParams.get('preference_id')
        const getPreference = async () => {
            if(preferenceId){
                const preference = await axios.post(
                    `https://paisajesdelsol.vercel.app/api/mercadopago/getpreference`,
                    {preferenceId: preferenceId}
                );

                let theItems: any[] = [];
                preference.data.items.forEach((item:any) => {
                    theItems = [...theItems, 
                        {
                            nombre: item.title, 
                            id: item.id, 
                            precio: item.unit_price, 
                            cantidad: item.quantity
                        }
                    ]
                })
                
                const emailBody = {
                    items: JSON.stringify(theItems),
                    paymentStatus: preference.data.auto_return,
                }

                // const emailBodyToClient = {
                //     reply_to: 
                // }

                // if(serviceId && templateId && publicKey && templateIdToClient){
                //     emailjs.send(serviceId, templateId, emailBody as any, {
                //         publicKey: publicKey,
                //         }).then(
                //             () => {
                //                 console.log('SUCCESS!');
                //             },
                //             (error: any) => {
                //                 console.log('FAILED...', error.text);
                //             },
                //       );
                //     //   emailjs.send(serviceId, templateIdToClient, emailBodyToClient as any, {
                //     //     publicKey: publicKey,
                //     //     }).then(
                //     //         () => {
                //     //             console.log('SUCCESS!');
                //     //         },
                //     //         (error: any) => {
                //     //             console.log('FAILED...', error.text);
                //     //         },
                //     //   );
                // }
            }
        }
        getPreference()
    }, [ searchParams])
    
    return (
        <>
            <section className="error-page">
            <div className="container">
                <h1>Felicidades tu pago se realizo con exito.</h1>
                <p>Puedes revisar en tu correo el detalle de tu compra</p>
                <a href="/" className="btn btn--rounded btn--blue">
                Volver
                </a>
            </div>
            </section>
        </>
    )
};

export default Success;