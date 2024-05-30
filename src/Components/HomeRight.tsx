import React from "react";
import template from "../assets/template.png";

const HomeRight: React.FC<any> = (props) => {
  return (
    <div className="relative ms-4">
      <img
        className="w-full rounded-md"
        src={template}
        alt="Image Description"
      />
      <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6"></div>
{/* 
      <div className="absolute bottom-0 start-0">
        <svg
          className="w-2/3 ms-auto h-auto text-white"
          width="630"
          height="451"
          viewBox="0 0 630 451"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="531" y="352" width="99" height="99" fill="currentColor" />
          <rect x="140" y="352" width="106" height="99" fill="currentColor" />
          <rect x="482" y="402" width="64" height="49" fill="currentColor" />
          <rect x="433" y="402" width="63" height="49" fill="currentColor" />
          <rect x="384" y="352" width="49" height="50" fill="currentColor" />
          <rect x="531" y="328" width="50" height="50" fill="currentColor" />
          <rect x="99" y="303" width="49" height="58" fill="currentColor" />
          <rect x="99" y="352" width="49" height="50" fill="currentColor" />
          <rect x="99" y="392" width="49" height="59" fill="currentColor" />
          <rect x="44" y="402" width="66" height="49" fill="currentColor" />
          <rect x="234" y="402" width="62" height="49" fill="currentColor" />
          <rect x="334" y="303" width="50" height="49" fill="currentColor" />
          <rect x="581" width="49" height="49" fill="currentColor" />
          <rect x="581" width="49" height="64" fill="currentColor" />
          <rect x="482" y="123" width="49" height="49" fill="currentColor" />
          <rect x="507" y="124" width="49" height="24" fill="currentColor" />
          <rect x="531" y="49" width="99" height="99" fill="currentColor" />
        </svg>
      </div> */}
    </div>
  );
};

export default HomeRight;
