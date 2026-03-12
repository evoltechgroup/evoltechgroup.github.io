const RoundChevronRight = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14.6666 12L18.6666 16L14.6666 20"
      stroke="#212121"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 16C4 17.5759 4.31039 19.1363 4.91345 20.5922C5.5165 22.0481 6.40042 23.371 7.51472 24.4853C8.62902 25.5996 9.95189 26.4835 11.4078 27.0866C12.8637 27.6896 14.4241 28 16 28C17.5759 28 19.1363 27.6896 20.5922 27.0866C22.0481 26.4835 23.371 25.5996 24.4853 24.4853C25.5996 23.371 26.4835 22.0481 27.0866 20.5922C27.6896 19.1363 28 17.5759 28 16C28 12.8174 26.7357 9.76516 24.4853 7.51472C22.2348 5.26428 19.1826 4 16 4C12.8174 4 9.76516 5.26428 7.51472 7.51472C5.26428 9.76516 4 12.8174 4 16Z"
      stroke="#212121"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ButtonEffect = (
  <svg
    width="180"
    height="80"
    viewBox="0 0 180 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="pointer-events-none">
    <g filter="url(#filter0_f)">
      <rect x="20" y="20" width="40" height="30" rx="15" fill="#D7944C" />
      <rect x="50" y="18" width="50" height="32" rx="16" fill="#FF9100" />
      <rect x="80" y="15" width="55" height="35" rx="18" fill="#FFE600" />
      <rect x="110" y="18" width="50" height="32" rx="16" fill="#FFBB8D" />
    </g>

    <defs>
      <filter
        id="filter0_f"
        x="0"
        y="0"
        width="180"
        height="80"
        filterUnits="userSpaceOnUse">
        <feGaussianBlur stdDeviation="18" />
      </filter>
    </defs>
  </svg>
);

export { RoundChevronRight, ButtonEffect };
