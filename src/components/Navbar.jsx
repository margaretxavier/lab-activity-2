/* Navbar */
function Navbar() {
    return (
      <nav className="navbar">
        <div className="nav-left">
          <i className="bi bi-globe"></i> 
          <i className="bi bi-question-circle-fill"></i> 
          <i className="bi bi-search"></i> 
        </div>
  
        <div className="logo-container">
          <img src="images/logo.png" alt="YESSTYLE" className="logo" />
        </div>
  
        <div className="nav-right">
          <i className="bi bi-person-fill"></i> 
          <i className="bi bi-suit-heart-fill"></i> 
          <i className="bi bi-bag-fill"></i> 
        </div>
  
        <ul className="nav-links">
          {["BEAUTY", "WOMEN", "MEN", "LIFESTYLE", "HEALTH", "SALE", "BLOG"].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </nav>
    );
  }

  export default Navbar;