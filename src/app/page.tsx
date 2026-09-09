const projects = [
  {
    number: "01",
    type: "Web Application",
    title: "International Students Dashboard",
    description:
      "A responsive platform that gives international students one place to access onboarding checklists, academic resources, and task tracking.",
    technologies: ["Next.js", "React", "REST APIs", "AWS"],
    details: [
      "Created reusable React components for desktop, tablet, and mobile.",
      "Added API-driven resource access and progress tracking.",
      "Deployed the application on AWS.",
    ],
  },
  {
    number: "02",
    type: "Full-Stack Application",
    title: "Fit Flow",
    description:
      "A gym management system that simplifies member onboarding, authentication, and membership-history management.",
    technologies: ["React", "Java", "Spring Boot", "REST APIs"],
    details: [
      "Connected a React interface with Spring Boot REST APIs.",
      "Implemented secure login and member onboarding.",
      "Developed real-time member-history tracking.",
    ],
  },
  {
    number: "03",
    type: "Android Application",
    title: "Campus Resource Finder",
    description:
      "An Android application that helps students discover campus facilities and services using search and location-based tools.",
    technologies: ["Java", "XML", "SQLite", "Google Maps API"],
    details: [
      "Integrated Google Maps for location-based resource discovery.",
      "Added advanced search filters and pagination.",
      "Implemented multilingual support and SQLite storage.",
    ],
  },
];

const skillGroups = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Java", "Python", "C++", "C", "PHP"],
  },
  {
    title: "Web & Frameworks",
    skills: [
      "React",
      "Next.js",
      "Spring Boot",
      "Node.js",
      "REST APIs",
      ".NET",
      "Django",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Databases & Cloud",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Oracle",
      "MongoDB",
      "Firebase",
      "AWS",
      "Oracle Cloud",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "Docker",
      "GitHub Actions",
      "Linux",
      "Pytest",
      "Postman",
      "Jira",
    ],
  },
];

const certificates = [
  "Meta Front End Developer",
  "IBM Full Stack Software Developer",
  "Penetration Testing & Digital Forensics",
  "Prompt Engineering — Vanderbilt University",
  "Data Engineering for AI and ML Pipelines",
];

export default function Home() {
  return (
    <>
      <header className="header">
        <nav className="container navbar" aria-label="Main navigation">
          <a className="logo" href="#home">
            VL<span>.</span>
          </a>

          <div className="navLinks">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
            <a className="resumeNav" href="/Vyom-Limbachiya-Resume.pdf" download>
              Resume ↓
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="container hero">
          <div className="heroContent">
            <p className="eyebrow">SOFTWARE ENGINEER</p>

            <h1>
              Vyom
              <br />
              Limbachiya<span>.</span>
            </h1>

            <h2>
              Building thoughtful interfaces and the systems behind them.
            </h2>

            <p className="heroDescription">
              I develop responsive web applications using React, Next.js,
              Spring Boot, REST APIs, and cloud technologies.
            </p>

            <div className="heroButtons">
              <a className="primaryButton" href="#projects">
                Explore my projects →
              </a>

              <a
                className="secondaryButton"
                href="/Vyom-Limbachiya-Resume.pdf"
                download
              >
                Download resume ↓
              </a>
            </div>

            <div className="socialLinks">
              <a
                href="https://github.com/vyom2507"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/vyom-limbachiya-582a85277/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a href="mailto:vyomlimbachiya03@gmail.com">Email ↗</a>
            </div>
          </div>

          <aside className="focusCard">
            <p className="cardLabel">MY FOCUS</p>
            <h2>
              Full-stack
              <br />
              development.
            </h2>

            <div className="focusItem">
              <div>
                <span>01</span>
                <strong>Frontend</strong>
              </div>
              <p>React · Next.js · TypeScript</p>
            </div>

            <div className="focusItem">
              <div>
                <span>02</span>
                <strong>Backend</strong>
              </div>
              <p>Java · Spring Boot · REST APIs</p>
            </div>

            <div className="focusItem">
              <div>
                <span>03</span>
                <strong>Delivery</strong>
              </div>
              <p>AWS · Docker · GitHub Actions</p>
            </div>

            <div className="degree">
              <span>MS</span>
              <p>
                Illinois Institute of Technology
                <small>Information Technology & Management · 2026</small>
              </p>
            </div>
          </aside>
        </section>

        <section id="projects" className="section alternate">
          <div className="container">
            <div className="sectionHeader">
              <div>
                <p className="eyebrow blue">SELECTED WORK</p>
                <h2>Built to be useful.</h2>
              </div>

              <a
                className="textLink"
                href="https://github.com/vyom2507"
                target="_blank"
                rel="noreferrer"
              >
                Explore GitHub ↗
              </a>
            </div>

            <p className="sectionDescription">
              Web and mobile projects created to simplify everyday workflows.
            </p>

            <div className="projectList">
              {projects.map((project) => (
                <article className="projectCard" key={project.title}>
                  <div className="projectNumber">{project.number}</div>

                  <div className="projectContent">
                    <p className="projectType">{project.type}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="tags">
                      {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>

                    <details>
                      <summary>What I built</summary>
                      <ul>
                        {project.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    </details>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container aboutGrid">
            <div className="aboutContent">
              <p className="eyebrow blue">ABOUT ME</p>
              <h2>
                A foundation in technology.
                <br />A focus on building.
              </h2>

              <p>
                I completed my master’s degree in Information Technology and
                Management at Illinois Institute of Technology in May 2026,
                after earning a bachelor’s degree in Computer Application.
              </p>

              <p>
                My work covers responsive interfaces, backend services,
                relational databases, automated testing, and cloud deployment.
                I enjoy turning practical problems into applications that are
                clear, reliable, and easy to use.
              </p>

              <a
                className="textLink"
                href="https://www.linkedin.com/in/vyom-limbachiya-582a85277/"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn ↗
              </a>
            </div>

            <div className="skillsCard">
              <h3>Technical toolkit</h3>

              {skillGroups.map((group) => (
                <div className="skillGroup" key={group.title}>
                  <h4>{group.title}</h4>

                  <div className="skills">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section experienceSection">
          <div className="container experienceGrid">
            <div>
              <p className="eyebrow blue">EXPERIENCE</p>
              <h2>Where I’ve contributed.</h2>
              <p className="sectionDescription">
                Software development and applied data research.
              </p>
            </div>

            <div className="timeline">
              <article className="experience">
                <p className="date">OCT 2023 — JUL 2024</p>
                <h3>Software Engineer</h3>
                <h4>Jay Chemicals Industries Pvt Ltd</h4>
                <p className="location">Gujarat, India</p>

                <ul>
                  <li>
                    Built React interfaces and Spring Boot REST APIs for donor
                    management, beneficiary tracking, and operational records.
                  </li>
                  <li>
                    Integrated email and SMS notifications and improved
                    reporting using MySQL and Oracle SQL.
                  </li>
                  <li>
                    Contributed to AWS deployments, Docker workflows, automated
                    testing, and code reviews.
                  </li>
                </ul>
              </article>

              <article className="experience">
                <p className="date">JUN 2023 — SEP 2023</p>
                <h3>Research Assistant</h3>
                <h4>Jay Chemicals Industries Pvt Ltd</h4>
                <p className="location">Gujarat, India</p>

                <ul>
                  <li>
                    Prepared satellite-based oceanographic datasets using
                    normalization, temporal aggregation, and missing-value
                    handling.
                  </li>
                  <li>
                    Performed geospatial analysis and feature extraction for
                    marine environmental reporting.
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section alternate">
          <div className="container">
            <p className="eyebrow blue">EDUCATION & CERTIFICATES</p>
            <h2>The foundation.</h2>

            <div className="educationGrid">
              <div>
                <h3 className="columnTitle">Education</h3>

                <article className="education">
                  <p className="date">AUG 2024 — MAY 2026</p>
                  <h3>M.S. Information Technology & Management</h3>
                  <p>Illinois Institute of Technology</p>
                  <small>Chicago, Illinois</small>
                </article>

                <article className="education">
                  <p className="date">MAR 2020 — MAY 2023</p>
                  <h3>Bachelor of Computer Application</h3>
                  <p>Charutar Vidya Mandal University</p>
                  <small>Gujarat, India</small>
                </article>
              </div>

              <div>
                <h3 className="columnTitle">Certificates</h3>

                <div className="certificateList">
                  {certificates.map((certificate, index) => (
                    <div className="certificate" key={certificate}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <p>{certificate}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container contactGrid">
            <div>
              <p className="eyebrow">GET IN TOUCH</p>
              <h2>
                Let’s connect<span>.</span>
              </h2>
              <p>
                Have a role, project, or question in mind? Send me a message.
              </p>
            </div>

            <div className="contactActions">
              <a
                className="contactButton"
                href="mailto:vyomlimbachiya03@gmail.com"
              >
                Email me →
              </a>

              <a href="mailto:vyomlimbachiya03@gmail.com">
                vyomlimbachiya03@gmail.com
              </a>

              <div>
                <a
                  href="https://www.linkedin.com/in/vyom-limbachiya-582a85277/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>

                <a
                  href="https://github.com/vyom2507"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footerContent">
          <p>© 2026 Vyom Limbachiya</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}