import Layout from "../layouts/Main";
import PageIntro from "../components/page-intro";
import ProductsFeatured from "../components/products-featured";
import Footer from "../components/footer";
import Subscribe from "../components/subscribe";

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />

      <section className="featured">
        <div className="container">
          <article
            style={{ backgroundImage: "url(/images/tiki-tiki.jpg)" }}
            className="featured-item featured-item-large"
          >
            <div className="featured-item__content">
              <h3>Nuestros nuevos productos</h3>
              <a href="#" className="btn btn--rounded">
                Ver productos
              </a>
            </div>
          </article>

          <article
            style={{ backgroundImage: "url(/images/tiki-tiki.jpg)" }}
            className="featured-item featured-item-small-first"
          >
            <div className="featured-item__content">
              <h3>Cubresuelos</h3>
              <a href="#" className="btn btn--rounded">
                Ver productos
              </a>
            </div>
          </article>

          <article
            style={{ backgroundImage: "url(/images/tiki-tiki.jpg)" }}
            className="featured-item featured-item-small"
          >
            <div className="featured-item__content">
              <h3>Plantitas</h3>
              <a href="#" className="btn btn--rounded">
                Ver Productos
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>¿Por qué elegirnos?</h4>
          </header>

          <ul className="shop-data-items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Envios rapidos</h4>
                <p>
                  Envios desde 5.000 a tantas comunas bla bla
                </p>
              </div>
            </li>

            <li>
              <i className="icon-payment"></i>
              <div className="data-item__content">
                <h4>Pago fácil</h4>
                <p>
                  Contamos con todos los medios de pago
                </p>
              </div>
            </li>

            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Garantia en productos</h4>
                <p>
                  Contamos con garantía en todos nuestros productos.
                </p>
              </div>
            </li>

            <li>
              <i className="icon-materials"></i>
              <div className="data-item__content">
                <h4>Fineza de cubresuelos</h4>
                <p>
                  Nos esforzamos por entregarles un producto de calidad.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <ProductsFeatured />
      <Subscribe />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
