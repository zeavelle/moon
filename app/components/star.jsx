import { forwardRef } from "react";

const Star = forwardRef(function Stars(props, ref) {
  const { className, stroke } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 187.85 187.85" className={`${className} absolute`} ref={ref}>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_3" data-name="Layer 3">
          <path
            d="M187.85,93.93C105,100,100,104.94,93.93,187.85,87.84,104.94,82.91,100,0,93.93c41.18-3,63.12-5.77,75.52-17.91C88.09,63.7,90.86,41.73,93.93,0,96.79,39,99.4,60.78,110,73.5,121.94,87.81,144,90.71,187.85,93.93Z"
            stroke={stroke}
            strokeWidth={4}
          />
        </g>
      </g>
    </svg>
  );
});

export default Star;
