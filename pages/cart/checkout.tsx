import React, { useRef } from "react"; 
import Layout from "../../layouts/Main";
import { useSelector } from "react-redux";
import CheckoutStatus from "../../components/checkout-status";
import CheckoutItems from "../../components/checkout/items";
import { RootState } from "store";
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";
import MercadoPagoButton from '../../components/mercadopago-button/index'

// import { useRouter } from "next/router";

const CheckoutPage = () => {
  const [datosEnvio, setDatosEnvio] = React.useState(false);
  // const { cartItems } = useSelector((state: any) => state.cart);
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID_EMAILJS;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID_ENVIO_EMAILJS;
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY_EMAILJS;
  // const router = useRouter();
  const form = useRef<HTMLFormElement | null>(null);

  const {
    handleSubmit,
} = useForm();

  const handleOnSubmit = React.useCallback(() => {
    // e.preventDefault();
    if(serviceId && templateId && publicKey){
        
        emailjs.sendForm(serviceId, templateId, form.current as any, {
            publicKey: publicKey,
            }).then(
                () => {
                    console.log('SUCCESS!');
                },
                (error: any) => {
                    console.log('FAILED...', error.text);
                },
          );
    }
    setDatosEnvio(true);
}, [])

  const priceTotal = useSelector((state: RootState) => {
    const cartItems = state.cart.cartItems;
    let totalPrice = 0;
    if (cartItems.length > 0) {
      cartItems.map((item) => (totalPrice += item.price * item.count));
    }

    return totalPrice + 3000;
  });

  const cart = useSelector((state:RootState) => state.cart.cartItems)

  let items = cart.map((item) => {
    return {
      N: item.name,
      C: item.count,
      PU: `$ ${item.price}` 
    }
  });

  return (
    <Layout>
      <section className="cart">
        <div className="container">
          <div className="cart__intro">
            <h3 className="cart__title">Envio y pago</h3>
            <CheckoutStatus step="checkout" />
          </div>

          <div className="checkout-content">
            <div className="checkout__col-6">
              {/* <div className="checkout__btns">
                <button
                  className="btn btn--rounded btn--yellow"
                  onClick={() => router.push("/login")}
                >
                  Log in
                </button>
                <button
                  className="btn btn--rounded btn--border"
                  onClick={() => router.push("/register")}
                >
                  Sign up
                </button>
              </div> */}

              <div className="block">
                <h3 className="block__title">Información de envio</h3>
                <form ref={form} className="form"  onSubmit={handleSubmit(handleOnSubmit as any)}>
                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input
                        className="form__input form__input--sm"
                        type="text"
                        placeholder="Email"
                        name="email"
                      />
                    </div>

                    <div className="form__col">
                      <input
                        className="form__input form__input--sm"
                        type="text"
                        placeholder="Direccion"
                        name="direccion"
                      />
                    </div>
                  </div>

                  <div className="form__input-row form__input-row--two">

                    <div className="form__col">
                      <input
                        className="form__input form__input--sm"
                        type="text"
                        placeholder="Nombre"
                        name="nombre"
                      />
                    </div>

                    <div className="form__col">
                      <input
                        className="form__input form__input--sm"
                        type="text"
                        // placeholder="Region"
                        value="Metropolitana"
                        name="region"
                      />
                    </div>
                  </div>

                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input
                        className="form__input form__input--sm"
                        type="text"
                        placeholder="Numero de celular"
                        name="numero"
                      />
                    </div>

                    <div className="form__col">
                      <select
                        className="form__input form__input--sm"
                        placeholder="Comuna"
                        name="comuna"
                      >
                        <option value="Cerrillos">Cerrillos</option>
                        <option value="Cerro Navia">Cerro Navia</option>
                        <option value="Conchalí">Conchalí</option>
                        <option value="El Bosque">El Bosque</option>
                        <option value="Estación Central">Estación Central</option>
                        <option value="Huechuraba">Huechuraba</option>
                        <option value="Independencia">Independencia</option>
                        <option value="La Cisterna">La Cisterna</option>
                        <option value="La Florida">La Florida</option>
                        <option value="La Granja">La Granja</option>
                        <option value="La Pintana">La Pintana</option>
                        <option value="La Reina">La Reina</option>
                        <option value="Las Condes">Las Condes</option>
                        <option value="Lo Barnechea">Lo Barnechea</option>
                        <option value="Lo Espejo">Lo Espejo</option>
                        <option value="Lo Prado">Lo Prado</option>
                        <option value="Macul">Macul</option>
                        <option value="Maipú">Maipú</option>
                        <option value="Ñuñoa">Ñuñoa</option>
                        <option value="Pedro Aguirre Cerda">Pedro Aguirre Cerda</option>
                        <option value="Peñalolén">Peñalolén</option>
                        <option value="Providencia">Providencia</option>
                        <option value="Pudahuel">Pudahuel</option>
                        <option value="Quilicura">Quilicura</option>
                        <option value="Quinta Normal">Quinta Normal</option>
                        <option value="Recoleta">Recoleta</option>
                        <option value="Renca">Renca</option>
                        <option value="San Joaquín">San Joaquín</option>
                        <option value="San Miguel">San Miguel</option>
                        <option value="San Ramón">San Ramón</option>
                        <option value="Santiago">Santiago</option>
                        <option value="Vitacura">Vitacura</option>
                        <option value="Puente Alto">Puente Alto</option>
                        <option value="SSan José de Maipo">San José de Maipo</option>
                        <option value="Pirque">Pirque</option>
                        <option value="Isla de Maipo">Isla de Maipo</option>
                        <option value="El Monte">El Monte</option>
                        <option value="Padre Hurtado">Padre Hurtado</option>
                        <option value="Peñaflor">Peñaflor</option>
                        <option value="Talagante">Talagante</option>
                        <option value="San Bernardo">San Bernardo</option>
                        <option value="Calera de Tango">Calera de Tango</option>
                        <option value="Buin">Buin</option>
                        <option value="Paine">Paine</option>
                        <option value="Colina">Colina</option>
                        <option value="Lampa">Lampa</option>
                        <option value="Til-Til">Til-Til</option>
                        <option value="Alhué">Alhué</option>
                        <option value="Curacaví">Curacaví</option>
                        <option value="María Pinto">María Pinto</option>
                        <option value="Melipilla">Melipilla</option>
                        <option value="San Pedro">San Pedro</option>
                      </select>
                    </div>
                    <div style={{visibility: "hidden"}} >
                      <input
                        className="form__input form__input--sm"
                        type="text"
                        placeholder="Items"
                        name="items"
                        value={JSON.stringify(items)}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn--rounded btn--yellow btn-submit"
                    onClick={handleSubmit(handleOnSubmit as any)}
                  >
                    Agregar datos de envio
                  </button>
                </form>
              </div>
            </div>

            <div className="checkout__col-2">
              <div className="block">
                <h3 className="block__title">Tu Carrito</h3>
                <CheckoutItems />

                <div className="checkout-total">
                  <p>Total cost</p>
                  <h3>${priceTotal}</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="cart-actions cart-actions--checkout">
            <a href="/cart" className="cart__btn-back">
              <i className="icon-left"></i> Volver
            </a>
            <div className="cart-actions__items-wrapper">
              <button type="button" className="btn btn--rounded btn--border">
                Seguir comprando
              </button>
              <MercadoPagoButton products={cart} datosEnvio={datosEnvio} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CheckoutPage;