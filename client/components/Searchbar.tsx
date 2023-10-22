import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="relative mx-auto w-64">
      <input
        className="w-full h-10 pl-10 pr-4 py-2 border border-black rounded-lg
          focus:outline-none focus:ring focus:border-blue-400"
        type="text"
        placeholder="What are you looking for?"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <svg
          className="w-6 h-6 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 17a7 7 0 100-14 7 7 0 000 14z"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
