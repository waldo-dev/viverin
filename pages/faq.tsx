import Layout from "../layouts/Main";
import Link from "next/link";
import React from "react";

const Faq = () => {
  return (
    <Layout>
      <section className="form-page">
        <div className="container">
          <div className="back-button-section">
            <Link href="/products">
              <i className="icon-left"></i>Volver a la tienda
            </Link>
          </div>

          <div style={{ width: "60%" }} className="form-block">
            <h2 className="form-block__title">Preguntas Frecuentes</h2>

            <h3 style={{ margin: "20px 0px", textAlign: 'center' }}>¿Dónde están ubicados?</h3>

            <p
              style={{ fontWeight: "bold" }}
              className="form-block__description"
            >
              Actualmente solo estamos a través de ventas online , somos de la
              RM y estamos prontos a abrir sucursal en RM , cuarta y sexta
              región
            </p>

            <h3 style={{ margin: "20px 0px", textAlign: 'center' }}>¿Hacen envíos?</h3>
            <p
              style={{ fontWeight: "bold", marginTop: "30px" }}
              className="form-block__description"
            >
              Si, realizamos envíos dentro de toda la RM y todo chile.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Faq;
