import Logo from "../../assets/icons/logo";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6>
              <Logo /> Paisajes del Sol
            </h6>
            <p>
              La casa de los cubresuelos más hermosos
            </p>
            <ul className="site-footer__social-networks">
              <li>
                <a href="#">
                  <i className="icon-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-youtube-play"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Compra online</li>
              <li>
                <a href="#">Estado de tu orden</a>
              </li>
              <li>
                <a href="#">Garantía</a>
              </li>
              <li>
                <a href="#">Opciones de pago</a>
              </li>
              <li>
                <a href="#">Contactanos</a>
              </li>
            </ul>
            <ul>
              <li>Información</li>
              <li>
                <a href="#">Gift Cards</a>
              </li>
              <li>
                <a href="#">Encuentranos</a>
              </li>
              <li>
                <a href="#">Newsletter</a>
              </li>
              <li>
                <a href="#">Conviertete en revendedor</a>
              </li>
              <li>
                <a href="#">Dejanos tu opinion</a>
              </li>
            </ul>
            <ul>
              <li>Contacto</li>
              <li>
                <a href="#">viverin@gmail.com</a>
              </li>
              <li>
                <a href="#">Celular: +569 6666 6666</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>Vivero Paisajes Del Sol - © 2023.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
