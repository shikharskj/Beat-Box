import React from "react";

const Error = () => {
  return (
    <div className="text-white w-full flex justify-center items-center md:text-2xl text-xl mt-2">
      <h1 className="text-3xl">😮</h1>
      <h2>Oops! Page Not Be Found</h2>
      <p>Sorry but the page you are looking for does not exist.</p>
      <a href="#">Back to homepage</a>
    </div>
  );
};

export default Error;
