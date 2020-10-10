import React from "react";
import { Heart } from "phosphor-react";

const Footer: React.FC<{}> = () => {
  return (
    <footer className="footer">
      <span>More ways to use</span>
      {/* <Heart weight="duotone" size={18} color="crimson" style={{ marginLeft: 4, marginRight: 4 }} /> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 128 128"
      >
        <g fill="none" fillRule="evenodd" transform="translate(38 25.5)">
          <path
            fill="#FF6E60"
            d="M29.2987,57.8533 L0.4687,57.8533 C0.4687,73.7763 13.3767,86.6833 29.2987,86.6833 L29.2987,57.8533 Z"
          />
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4.7"
            d="M29.2987,57.8533 L0.4687,57.8533 C0.4687,73.7763 13.3767,86.6833 29.2987,86.6833 L29.2987,57.8533 Z"
          />
          <polygon
            fill="#FFD171"
            points="29.299 57.853 29.299 .194 .469 57.853"
          />
          <polygon
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4.7"
            points="29.299 57.853 29.299 .194 .469 57.853"
          />
          <polygon fill="#1FA647" points=".469 .194 .469 57.853 29.299 .194" />
          <polygon
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4.7"
            points=".469 .194 .469 57.853 29.299 .194"
          />
          <path
            fill="#CE93FE"
            d="M29.2987,0.1942 L32.9027,0.1942 C48.8237,0.1942 61.7327,13.1012 61.7327,29.0242 C61.7327,44.9462 48.8237,57.8532 32.9027,57.8532 L29.2987,57.8532 L29.2987,0.1942 Z"
          />
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4.7"
            d="M29.2987,0.1942 L32.9027,0.1942 C48.8237,0.1942 61.7327,13.1012 61.7327,29.0242 C61.7327,44.9462 48.8237,57.8532 32.9027,57.8532 L29.2987,57.8532 L29.2987,0.1942 Z"
          />
        </g>
      </svg>
      <span>at</span>
      <a href="https://phosphoricons.com" target="_blank" rel="noopener">
        phosphoricons.com
      </a>
    </footer>
  );
};

export default Footer;
