import React from 'react';

const Section = ({ title, children }) => (
  <div className="mb-4">
    <h2 className="text-3xl text-underline font-semibold tracking-tight">{title}</h2>
    {children}
  </div>
);

const Education = ({ university, degree, concentration}) => (
  <div className="mb-2">
    <h3 className="text-lg">{university}</h3>
    <p>{degree}</p>
    <p className="italic text-neutral-400">{concentration}</p>
  </div>
);

const Project = ({ title, technologies, period, description }) => (
  <div className="mb-4">
    <h3 className="text-lg">{title} |<span className="text-base italic text-neutral-400"> {technologies}</span></h3>
    <p className="text-sm text-neutral-300">{period}</p>
    <ul className="text-base list-disc list-inside leading-tight">
      {description.map((item, index) => (
        <li className="mb-1" key={index} style={{ textIndent: '-1.4em', paddingLeft: '1.4em' }}>{item}</li>
      ))}
    </ul>
  </div>
);

const Experience = ({ title, company, location, period, responsibilities }) => (
  <div className="mb-4">
    <h3 className="text-lg">{title} | <span className="text-base text-neutral-400">{location}</span> </h3>
    <p className="italic">{company}</p>
    <p className="text-sm text-neutral-400">{period}</p>
    <ul className="list-disc list-inside leading-tight">
      {responsibilities.map((item, index) => (
        <li className="mb-1" key={index} style={{ textIndent: '-1.4em', paddingLeft: '1.4em' }}>{item}</li>
      ))}
    </ul>
  </div>
);

const Resume = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <Section title="EDUCATION">
        <Education
          university="University of British Columbia"
          degree="Bachelor of Science"
          concentration="Concentration in Computer Science, Mathematics and Data Science"
        />
      </Section>

      <Section title="PROJECTS">
        <Project
          title="Product Price Tracking Website"
          technologies="JavaScript, HTML, PHP, Bootstrap"
          period="April 2024"
          description={[
            "Fullstack team development of website using HTML and the Bootstrap framework on the front end and PHP and JavaScript on the back end.",
            "Met all deadlines and collaborated effectively as a team."
          ]}
        />
        <Project
          title="Convolutional Neural Network Training and Design"
          technologies="MATLab"
          period="March 2024"
          description={[
            "Planned and created my own network structure for image recognition as well as retrained an existing network (Alexnet) for specific image recognition tasks."
          ]}
        />
        <Project
          title="Community Wildfire Response Application"
          technologies="Java, HTML, Android Studio"
          period="Dec 2023"
          description={[
            "Group development of android application for community wildfire response using Java.",
            "Effectively collaborated in the design and implementation of our application."
          ]}
        />
      </Section>

      <Section title="WORK EXPERIENCE">
        <Experience
          title="Lead Lab Technician"
          company="LensCrafters | Luxottica"
          location="Kelowna, Canada"
          period="Feb 2022 - Present"
          responsibilities={[
            "Responsible for lab maintenance, lab order processing, lens surfacing, lens finishing and inspecting completed spectacles. As lead, provide technical consultation for retail associates as well as lab team.",
            "Top selling sales associate for 9 consecutive months while also fulfilling lab responsibilities"
          ]}
        />
        <Experience
          title="Testing Team Intern"
          company="Inmarsat Aviation | Viasat"
          location="Nyon, Switzerland"
          period="May 2021 - Aug 2021"
          responsibilities={[
            "Using Jira/Xray created and executed multiple test campaigns for the Aegean Airlines onboard WiFi portal and the Inmarsat Maritime Crew and Ferry portals",
            "Wrote post-test reports for these campaigns and presented the reports for our customers"
          ]}
        />
        <Experience
          title="Testing Team Intern"
          company="Inmarsat Aviation | Viasat"
          location="Nyon, Switzerland"
          period="May 2019 - Aug 2019"
          responsibilities={[
            "Hardware testing on aircraft bound servers using the Linux terminal",
            "Installed AISM (Advanced Integrated Services Manager) Simulators and virtual machines, as well as implementing Open Virtual Switching through the Linux terminal and created my own documentation",
            "Analysed Apple's CNA device capture using tcpdump and wireshark to improve inflight customer service"
          ]}
        />
        <Experience
          title="GIS Technician"
          company="Celtic Engineering Ltd."
          location="Williams Lake, Canada"
          period="Apr 2017 - Sept 2018"
          responsibilities={[
            "Independently learned and implemented 'ArcGIS' (Geographic Information System)",
            "Creating maps from field data and presenting it in accordance with government standards."
          ]}
        />
      </Section>

      <Section title="VOLUNTEER EXPERIENCE">
        <Experience
          title="Team Captain & Club Coordinator"
          company="UBCO Esports Club"
          location="Kelowna, Canada"
          period="Sept 2019 - April 2022"
          responsibilities={[
            "As captain of the UBCO Valorant team I motivated our team and led us to playoffs",
            "Hosted and coordinated online tournaments and events on campus"
          ]}
        />
      </Section>
    </div>
  );
};

export default Resume;