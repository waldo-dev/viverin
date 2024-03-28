import React from "react";
import Layout from "../layouts/Main";
import PageIntro from "../components/page-intro";
import ProductsFeatured from "../components/products-featured";
import Footer from "../components/footer";
import { useRouter } from "next/navigation";

const IndexPage = () => {
  const router = useRouter();

  const toCubresuelos = () => {
    router.push("/products");
  };

  const toArbustos = () => {
    router.push("/products");
  };

  return (
    <Layout>
      <PageIntro />
      <section className="featured">
        <div className="container">
          <article
            onClick={toCubresuelos}
            style={{
              backgroundImage: "url(/images/tiki-tiki.jpg)",
              cursor: "pointer",
            }}
            className="featured-item featured-item-large"
          >
            <div className="featured-item__content">
              <h3 style={{color: '#fff', fontWeight: 'bold'}}>Nuestros Cubresuelos</h3>
            </div>
          </article>

          <article
            onClick={toArbustos}
            style={{
              backgroundImage: "url(/images/tiki-tiki.jpg)",
              cursor: "pointer",
            }}
            className="featured-item featured-item-small-first"
          >
            <div className="featured-item__content">
              <h3 style={{color: '#fff', fontWeight: 'bold'}}>Nuestras plantas y arbustos</h3>
            </div>
          </article>

          <article
            onClick={toCubresuelos}
            style={{
              backgroundImage: "url(/images/tiki-tiki.jpg)",
              cursor: "pointer",
            }}
            className="featured-item featured-item-small"
          >
            <div className="featured-item__content">
              <h3 style={{color: '#fff', fontWeight: 'bold'}}>Instalaciones y jardines</h3>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>¿Quienes somos?</h4>
          </header>
          <h3 style={{ width: "70%", textAlign: "start", margin: "0 auto" }}>
            Somos un equipo dedicado a construir una empresa que priorice el
            cuidado por el medio ambiente, estamos conscientes de la escasez
            hídrica y nuestro desafío es entregar a todo público, inmobiliarias
            y empresas plantas y jardines de calidad con un bajo porcentaje de
            necesidad hídrica
          </h3>
        </div>
      </section>

      <ProductsFeatured />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
