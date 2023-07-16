import React from 'react';

const About = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>
        I am an aspiring software developer with a special interest in cyber security and AI. I am proficient in HTML, CSS, JavaScript as well as troubleshooting AWS cloud services, including the management of Account Security and Billing. In my last role at AWS, I held positions of leadership and exceeded the quality bar, displaying that I not only bring a strong work ethic to a team but also strong leadership skills. I have always been a forward thinker and a quick learner, which gives me an edge for problem-solving. As such, I was recognized as a role model by my colleagues. I am currently enrolled in a Software Development course to broaden my skillset, where upon completion, I will be an entry-level FullStack Web Developer.
      </p>
      <h3>Skills</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>AWS Cloud Services</li>
        <li>React</li>
        <li>Git</li>
        <li>Windows, MacOS</li>
        <li>Linux (Beginner)</li>
        <li>Leadership</li>
        <li>Problem-solving</li>
      </ul>
      <h3>Most Recent Work Experience</h3>
      <p>
        Company: Amazon Development Centre (SA) (PTY) LTD - 2018-2022 (AWS) <br />
        Role: Account Access Management <br />
        Duration: 2018-2022 <br />
        <div className='desc'><p>Duties: </p><ul>
          <li>Provided technical support for Amazon devices and software.
          </li>
          <li>Analyzed AWS account service usage to optimize billing and adjust invoicing when necessary.</li>
          <li>Collaborated with AWS clients to setup and maintain Account Access Management involving Identity and Access Management (IAM), Securing Compromised accounts and systems within a 1 horu SLA
          </li>
          <li>Basic cloud troubleshooting while educating clients on how to fix their own issues where possible.</li>
          <li>Mentored a team of 5 for Quality Assurance</li>
        </ul></div>
      </p>

      <h3>Hobbies</h3>
      <ul>
        <li>Coding and broadening my skillset</li>
        <li>Hiking and most other outdoor activities</li>
        <li>Watching SciFi shows like Rick and Morty</li>
        <li>Chess</li>
      </ul><br/>
      <h3>More about my character in the workplace</h3>
      <p>If you'd like to know more about the kind of person I am n the workplace, you can read a series of anonymous reviews from my colleagues at AWS. These reviews highlight where my strong suits are as well as areas of improvement. You can read this document <a href='https://drive.google.com/file/d/1G4HCqDsqwmbcCc95eMUwBAGfIXO2S264/view' target='_blank'>here</a>.</p>
    </section>
  );
};

export default About;