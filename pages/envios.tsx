import Layout from "../layouts/Main";
import Link from "next/link";
import React from "react";
import ShippingTable from '../components/shippingTable/index';

const Envios = () => {
  return (
    <Layout>
      <section className="form-page">
        <div className="container">
          <div className="back-button-section">
            <Link href="/products">
              <i className="icon-left"></i>Volver a la tienda
            </Link>
          </div>

          <div style={{width: '80%'}} className="form-block">
            <h2 className="form-block__title">Envíos y política de despacho</h2>
            <p
              style={{ fontWeight: "bold" }}
              className="form-block__description"
            >
              Los envíos dentro de la RM se realizan entre 3 y 5 días hábiles
              Para envíos fuera de la RM comunícate directamente a wsp +569 6666
              6666
            </p>

            <p
              style={{ fontWeight: "bold", marginTop: '30px'  }}
              className="form-block__description"
            >
                Valores:
            </p>
            <ShippingTable />
            <p
              style={{ fontWeight: "bold", marginTop: '30px' }}
              className="form-block__description"
            >
              Recordatorio: Las plantas son seres vivos cambiantes según su
              estación, por lo que no esperes a que te llegue una planta 100%
              idéntica a la imagen REFERENCIAL pero no dudes en que te
              entregaremos una planta hermosa y acorde a la calidad que
              prometemos.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Envios;
