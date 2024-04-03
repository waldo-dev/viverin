const Error = () => (
    <>
      <section className="error-page">
        <div className="container">
          <h1>Lo sentimos tu pago no se pudo realizar</h1>
          <p>Puedes volver a intentarlo en unos minutos</p>
          <a href="/" className="btn btn--rounded btn--blue">
            Volver
          </a>
        </div>
      </section>
    </>
  );
  
  export default Error;