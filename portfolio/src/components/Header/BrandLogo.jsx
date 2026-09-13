import { profile } from "../../data/profile";
import { handleNavClick } from "../../utils/smoothScroll";
import "./BrandLogo.scss";

function BrandLogo() {
  return (
    <a
      className="brand-logo"
      href="#top"
      onClick={handleNavClick}
      aria-label={`${profile.name} 홈으로 이동`}
    >
      <span className="brand-logo__mark" aria-hidden="true">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect
            x="1.5"
            y="1.5"
            width="37"
            height="37"
            rx="8"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M12 28V12h9.2c3.55 0 5.8 2.05 5.8 5.05 0 2.95-2.1 4.85-5.05 5.05L28 28h-3.35l-5.7-5.55H15.2V28H12Zm3.2-8.85h5.7c1.95 0 3.15-1.05 3.15-2.7s-1.2-2.7-3.2-2.7h-5.65v5.4Z"
            fill="currentColor"
          />
          <circle cx="30.5" cy="11" r="2.2" fill="var(--color-accent)" />
        </svg>
      </span>

      <span className="brand-logo__text">
        <span className="brand-logo__name">{profile.name}</span>
        <span className="brand-logo__meta">
          <span className="brand-logo__en">PSH</span>
          <span className="brand-logo__dot" aria-hidden="true" />
          <span className="brand-logo__role">Publisher</span>
        </span>
      </span>
    </a>
  );
}

export default BrandLogo;
