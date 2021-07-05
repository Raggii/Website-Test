import React from "react";

export default function ReminderHolder({ color, fill, className }) {
  return (
    <div className={className}>
      <svg
        width="57"
        height="59"
        viewBox="0 0 57 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ maxWidth: "40px" }}
      >
        <rect
          y="-2.17754"
          width="43.0915"
          height="43.0915"
          rx="13.5"
          transform="matrix(0.687856 0.725848 -0.687856 0.725848 27.0022 -0.0795225)"
          fill={fill}
          stroke={color}
          strokeWidth="3"
        />
        <mask
          id="mask0"
          masktype="alpha"
          maskUnits="userSpaceOnUse"
          x="2"
          y="2"
          width="53"
          height="55"
        >
          <rect
            y="-2.17754"
            width="43.0915"
            height="43.0915"
            rx="13.5"
            transform="matrix(0.687856 0.725848 -0.687856 0.725848 27.0022 -0.0795225)"
            fill="fff"
            stroke="ffffff"
            strokeWidth="3"
          />
        </mask>
        <g mask="url(#mask0)"></g>
      </svg>
    </div>
  );
}
