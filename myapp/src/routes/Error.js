import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <h1>Error!</h1>
      <p>Oops, something went wrong!</p>
      <Link to="/">Back to Home</Link>
    </>
  );
};
export default Error;
