import Link from "next/link";

import productsTypes from './../../utils/data/products-types';


const ProductsFilter = () => {

  return (
    <div className="products-filter">
      <div className={'products-filter__wrapper'}>
        <div className="products-filter__block">
          <button type="button" style={{color: "#000", fontSize: "1rem"}}>
            Categorias
          </button>
          <div className="products-filter__block__content">
            <ul>
              {productsTypes.map(type => (
                <li style={{padding: '1rem'}}>
                  {
                    type.name !== "Todos" ?
                    <Link
                      style={{color: "#000"}}
                      href={`/products-${type.name.toLowerCase()}`} 
                      key={type.id} 
                    >{type.name}</Link>
                    :
                    <Link
                      href={`/products`} 
                      key={type.id} 
                      style={{color: "#000"}}
                    >{type.name}</Link>
                  }
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
  
export default ProductsFilter
  
  