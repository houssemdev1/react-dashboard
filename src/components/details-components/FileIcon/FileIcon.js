import React, { useState } from "react";
import "./FileIcon.scss";
const FileIcon = props => {
  const { type } = props;
  const typeContent = {
    pdf: { color: "#FE4849", textIcon: "PDF", x: "10" },
    mov: { color: "#424BBE", textIcon: "MOV", x: "10" },
    zip: { color: "#FCB433", textIcon: "ZIP", x: "11.5" },
    png: { color: "#6FCF97", textIcon: "PNG", x: "10" }
  };
  const [icon, setIcon] = useState(
    <svg width="27" height="11.92" x="3.9" y="28">
      <rect width="100%" height="100%" fill={typeContent[type].color}></rect>
      <text
        x="50%"
        y="8"
        textAnchor="middle"
        font-size="7"
        font-weight="800"
        fill="white"
      >
        {typeContent[type].textIcon}
      </text>
    </svg>
  );
  return (
    <svg
      width="35"
      height="43"
      viewBox="0 0 35 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d)">
        <path
          d="M19.7027 31.1622L17.4723 6H4V28.9741L19.7027 31.1622Z"
          fill="white"
        />
        <path
          d="M30.8648 28.9741V13.658L25.416 11.47L23.2364 6H17.4324L17.4672 31.1622L30.8648 28.9741Z"
          fill="white"
        />
        <path d="M23.2974 13.7568V6L30.8649 13.7568H23.2974Z" fill="#E8E6E6" />
        {icon}
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0"
          width="34.8649"
          height="43"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="-2" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
export default FileIcon;
