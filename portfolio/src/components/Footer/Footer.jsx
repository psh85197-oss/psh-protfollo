import { profile } from "../../data/profile";
import "./Footer.scss";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="site-footer__name">{profile.name}</p>
          <p className="site-footer__note">{profile.contactNote}</p>
        </div>
        <p className="site-footer__copy">
          © {year} {profile.nameEn}. Publisher Portfolio.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
