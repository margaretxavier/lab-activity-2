import { products } from "../data";

function ProductGrid() {
    return (
      <div className="product-grid-container">
        <div className="product-grid row-1-2">
          {products.slice(0, 8).map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}>
                <div className="discount-badge">{product.discount}</div>
              </div>
              <div className="product-info">
                <h4>{product.title}</h4>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
  
        <div className="product-grid row-3-4">
          {products.slice(8).map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}>
                <div className="discount-badge">{product.discount}</div>
              </div>
              <div className="product-info">
                <h4>{product.title}</h4>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  export default ProductGrid;