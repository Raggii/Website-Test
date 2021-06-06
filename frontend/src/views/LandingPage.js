import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <h1>Landing Page :D</h1>
        </div>
        <div className="row mt-3">
          <p>
            Eu Lorem ex do et occaecat id. Nulla aliquip irure consectetur sint irure excepteur
            proident dolor. Ad amet commodo fugiat reprehenderit officia adipisicing ea incididunt
            consectetur nulla. Laboris et mollit sint id ipsum veniam minim amet sunt minim culpa
            tempor. Elit consectetur laborum eu laboris consectetur. Aliqua nostrud ipsum et
            consectetur. Deserunt labore exercitation culpa nisi irure Lorem Lorem ad. Officia
            commodo non et enim cillum ad incididunt dolor non esse ea reprehenderit nisi. Proident
            culpa ex velit anim deserunt exercitation exercitation officia enim adipisicing ex eu
            excepteur. Incididunt excepteur velit.
          </p>
        </div>

        <div className="row">
          <div className="col text-center">
            <Link className="btn btn-outline-primary" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
