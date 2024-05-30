import React from "react";

const HomeLeft: React.FC<any> = (props) => {
  return (
    <div>
      <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight">
        Start your professional journey with a great{" "}
        <span className="text-blue-600">Resume</span>
      </h1>
      <p className="mt-3 text-lg text-gray-800">
        Hand-picked professional and expertly crafted resumes, designed to shine
        your skills.
      </p>

      <div className="mt-7 grid gap-3 w-full sm:inline-flex">
        <a
          className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          href="#"
        >
          Get started
          <svg
            className="flex-shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default HomeLeft;
