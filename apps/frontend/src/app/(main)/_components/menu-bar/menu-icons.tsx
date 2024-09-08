export const generateIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11 1V3M11 19V21M1 11H3M19 11H21M5 17L5.343 16.657M16.657 5.343L17 5M17 17L16.657 16.657M5.343 5.343L5 5M14.265 13.627C14.392 14.935 14.455 15.589 14.072 15.88C13.689 16.17 13.114 15.906 11.962 15.376L11.664 15.238C11.337 15.088 11.174 15.012 11 15.012C10.827 15.012 10.663 15.088 10.336 15.238L10.038 15.376C8.886 15.906 8.311 16.171 7.928 15.88C7.545 15.59 7.608 14.935 7.735 13.627L7.767 13.289C7.804 12.917 7.822 12.731 7.767 12.559C7.714 12.387 7.595 12.247 7.357 11.969L7.14 11.715C6.302 10.735 5.882 10.245 6.029 9.774C6.135 9.434 6.487 9.266 7.14 9.094M9.577 7.704C10.21 6.568 10.527 6 11 6C11.473 6 11.79 6.568 12.423 7.704L12.587 7.998C12.767 8.321 12.857 8.482 12.997 8.588C13.137 8.695 13.313 8.735 13.662 8.814L13.98 8.886C15.21 9.164 15.825 9.303 15.971 9.774C16.077 10.114 15.888 10.464 15.459 11"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};
