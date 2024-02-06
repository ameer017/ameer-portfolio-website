import React from "react";
import "./Experience.scss";

const Experience = () => {
  return (
    <section className="container" id="experience">
      <div>
        <small>
          <mark>Work Experience.</mark>
        </small>

        <p>
          <b>2</b> years of Experience.
        </p>
      </div>

      <div className="card">

        <ol>
            <li>Software Developer (intern) at <a href="https://www.dltafrica.io">DLT Africa</a></li>
        </ol>

      </div>
    </section>
  );
};

export default Experience;
