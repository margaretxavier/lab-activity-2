import { products } from "../data";

function ProductGrid() {

  const getBadgeColor = (discount) => {
    switch (true) {
      case discount.includes("50% OFF"):
        return "#fe3954"; 
      case discount.includes("40% OFF"):
        return "#fea539";
      case discount.includes("35% OFF"):
        return "#9f39fe";
      case discount.includes("30% OFF"):
        return "#3981fe";
      default:
        return "green";
    }
  };

    return (
      <div className="product-grid-container">
        <div className="product-grid row-1-2">
          {products.slice(0, 8).map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}>

              <div className="discount-badge" style={{ backgroundColor: getBadgeColor(product.discount) }}>
                {product.discount}
              </div>

              {product.discount.includes("50% OFF") ? (<div className="hot-deal-badge">Hot Deal!</div>) : null}
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
              <div className="discount-badge" style={{ backgroundColor: getBadgeColor(product.discount) }}>
                {product.discount}
              </div>
              {product.discount.includes("50% OFF") ? (<div className="hot-deal-badge">Hot Deal!</div>) : null}
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