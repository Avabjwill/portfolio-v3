import React from 'react';

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
      <p>
        Download my <a href="file:///C:/Users/avabj/Downloads/Avante%20Williams%20Resume%20(6).pdf">resume</a>
        </p>
        <h3>Avante Williams</h3>
        <div>Full Stack Developer experienced in MERN.  Ava has a focus on Project Management where 
          the focus relies mainly on the time of the product construct and focus on the client needs. </div>

        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
        <h3>Back-end Proficiencies/Capabilities</h3>
        <ul className="skills">
          <li>Node</li>
          <li>MeanStack</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
