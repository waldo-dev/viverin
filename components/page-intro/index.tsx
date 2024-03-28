import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation } from "swiper";

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {
  return (
    <section className="page-intro">
      {/* <Swiper navigation effect="fade" className="swiper-wrapper"> */}
        <SwiperSlide>
          <div
            className="page-intro__slide"
            style={{ backgroundImage: "url('/images/slide-1.jpg')" }}
          >
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>PAISAJES DEL SOL</h2>
                <a href="/products" className="btn-shop">
                Venta e instalación de cubresuelos y arbustos de bajo consumo hídrico
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* <SwiperSlide>
          <div
            className="page-intro__slide"
            style={{ backgroundImage: "url('/images/slide-2.jpg')" }}
          >
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Diseñamos tu jardin</h2>
                <a href="/products" className="btn-shop">
                  <i className="icon-right"></i>Todos los productos
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      {/* </Swiper> */}

      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Envios en 2 días</h4>
                <p>Desde $5.000</p>
              </div>
            </li>

            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>99% de los clientes felices</h4>
                <p>Opiniones de clientes satisfechos</p>
              </div>
            </li>

            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Garantía</h4>
                <p>Contamos con garantía</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PageIntro;
