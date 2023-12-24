type ProductDescriptionType = {
  show: boolean;
}

const Description = ({ show }: ProductDescriptionType) => {
  const style = {
    display: show ? 'flex' : 'none',
  }

  return (
    <section style={style} className="product-single__description">
      <div className="product-description-block">
        <h4>Descripcion del producto</h4>
        <p>Producto hermoso precioso</p>
      </div>
    </section>
  );
};
  
export default Description;
    