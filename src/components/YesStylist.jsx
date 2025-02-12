import YesStylistCard from "./YesStylistCard";
import { articles } from "../data";

function YesStylist() {
    return (
      <div className="yesstylist-container">
        <h3>THE YESSTYLIST</h3>
        <div className="yesstylist-grid">
          {articles.map((article, index) => (
            <YesStylistCard key={index} {...article} />
          ))}
        </div>
      </div>
    );
  }

  export default YesStylist;