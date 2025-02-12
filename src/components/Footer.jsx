import { sections, languages } from "../data";

function Footer() {
    return (
      <footer className="footer">
        <div className="footer-top">
          <div className="socials">
            <span>Follow us</span>
            <a href="#"><i class="bi bi-facebook"></i></a>
            <a href="#"><i class="bi bi-youtube"></i></a>
            <a href="#"><i class="bi bi-instagram"></i></a>
            <a href="#"><i class="bi bi-tiktok"></i></a>
            <a href="#"><i class="bi bi-pinterest"></i></a>
          </div>
          <div className="app-download">
            <span>Download our app and earn 50 YS Points</span>
            <a href="#"><i class="bi bi-apple"></i></a>
            <a href="#"><i class="bi bi-google-play"></i></a>
          </div>
        </div>
  
        <div className="footer-columns">
          {sections.map((section) => (
            <div key={section.title} className="column">
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li key={link}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
  
        <div className="footer-bottom">
          <div>
            {languages.map((lang) => (
              <a key={lang} href="#">{lang}</a>
            ))}
            <span className="divider"></span>
            <a href="#">Terms of Use</a>  
            <a href="#">Privacy Policy</a>  
            <a href="#">Cookie Preferences</a>
          </div>
          <div className="copyright">
            Copyright &copy; 2006-2025 YESSTYLE.COM LTD. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }

  export default Footer;