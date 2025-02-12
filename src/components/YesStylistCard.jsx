function YesStylistCard({ image, title, description, bgColor }) {
    return (
      <div className="yesstylist-card">
        <img src={image} alt={title} className="yesstylist-img" />
        <div className="yesstylist-content" style={{ backgroundColor: bgColor }}>
          <h4>{title}</h4>
          <p>{description}</p>
          <a href="#">...Read More</a>
        </div>
      </div>
    );
  }

  export default YesStylistCard;