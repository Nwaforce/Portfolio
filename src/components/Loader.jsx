import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900">
      <div className="flex flex-col items-center">
        {/* Animated SVG Loader with Gradient Stroke */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 150"
          className="w-32 h-16"
        >
          <defs>
            <linearGradient id="loaderGradient" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="#f9a8d4" /> {/* pink-300 */}
              <stop offset="50%" stopColor="#64748b" /> {/* slate-500 */}
              <stop offset="100%" stopColor="#1e293b" /> {/* slate-900 */}
            </linearGradient>
          </defs>
          <path
            fill="none"
            stroke="url(#loaderGradient)"
            strokeWidth="15"
            strokeLinecap="round"
            strokeDasharray="300 385"
            strokeDashoffset="0"
            d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
          >
            <animate
              attributeName="stroke-dashoffset"
              calcMode="spline"
              dur="2s"
              values="685;-685"
              keySplines="0 0 1 1"
              repeatCount="indefinite"
            />
          </path>
        </svg>
        {/* Slang Text */}
        <div className="mt-4 text-lg font-semibold text-white">Hold Up Wait a Minute... 😎</div>
      </div>
    </div>
  );
};

export default Loader;
