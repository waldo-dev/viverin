import { useRouter } from "next/navigation";
import React from "react";
import axios from "axios";

const MercadoPagoButton = ( props: any ) => {
  const router = useRouter();

  console.log(props.products)
  const generateLink = async () => {
    if (props.products.length > 0) {
      const result = await axios.post('http://localhost:3000/api/mercadopago', props.products);
      router.push(result.data.sandbox_init_point!);
    }
  };

  return (
    <div>
      {!props.datosEnvio || !props.products.length ? (
        <button disabled type="button" className="btn btn--rounded btn--yellow">
          por favor ingresa tus datos de envio
        </button>
      ) : (
        <button
          onClick={generateLink}
          type="button"
          className="btn btn--rounded btn--yellow"
        >
          Pagar con mercado pago
        </button>
      )}
    </div>
  );
};

export default MercadoPagoButton;