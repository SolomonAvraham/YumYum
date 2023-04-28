import React from "react";

function PageNotFound() {
  return (
    <div className="flex items-center justify-center bg-gray-100 min-h-screen">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
        <p className="text-lg text-gray-500 mb-8">
          The page you are looking for could not be found.
        </p>
        <a
          href="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Home
        </a>
      </div>
    </div>
  );
}

export default PageNotFound;
