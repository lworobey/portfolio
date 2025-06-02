import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Home Section */}
      <section id="home" className="section-center justify-center">
        <h1 className="text-4xl font-bold">
          Hi! I&apos;m Luke Worobey and Welcome to my Portfolio!
        </h1>
      </section>

      {/* About Section */}
      <section id="about" className="section-center">
        <h2 className="text-3xl font-bold">
          About Me
        </h2>
        <p className="text-center mt-10 max-w-2xl mx-auto">
        I am a Software Engineer with a strong focus on backend engineering.
        I am passionate about building reliable, scalable systems and continuously expanding my knowledge of different technologies and architectures.
        Outside of work, I stay connected to the world of technology through my interest in video games and digital media.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-center">
        <h2 className="text-3xl font-bold">
          Skills
        </h2>
        <div className="skills-grid">
          {/* Python */}
          <div className="skill-card">
            <div className="skill-card-inner">
              <div className="skill-content">
                <img src="/icons/Python.png" className="skill-icon" />
                <span className="skill-name">PYTHON</span>
              </div>
            </div>
          </div>

          {/* Java */}
          <div className="skill-card">
            <div className="skill-card-inner">
              <div className="skill-content">
                <img src="/icons/java.jpg" className="skill-icon" />
                <span className="skill-name">JAVA</span>
              </div>
            </div>
          </div>

          {/* React */}
          <div className="skill-card">
            <div className="skill-card-inner">
              <div className="skill-content">
                <img src="/icons/react.png" className="skill-icon" />
                <span className="skill-name">REACT</span>
              </div>
            </div>
          </div>

          {/* Next.js */}
          <div className="skill-card">
            <div className="skill-card-inner">
              <div className="skill-content">
                <img src="/icons/nextjs.png" className="skill-icon" />
                <span className="skill-name">NEXT.JS</span>
              </div>
            </div>
          </div>

          {/* HTML */}
          <div className="skill-card">
            <div className="skill-card-inner">
              <div className="skill-content">
                <img src="/icons/html.png" className="skill-icon" />
                <span className="skill-name">HTML</span>
              </div>
            </div>
          </div>

          {/* CSS */}
          <div className="skill-card">
            <div className="skill-card-inner">
              <div className="skill-content">
                <img src="/icons/css.jpg" className="skill-icon" />
                <span className="skill-name">CSS</span>
              </div>
            </div>
          </div>

          {/* Node.js & Express */}
          <div className="skill-card">
            <div className="skill-card-inner">
              <div className="skill-content">
                <img src="/icons/nodeAndExpress.jpg" className="skill-icon" />
                <span className="skill-name">NODE.JS</span>
              </div>
            </div>
          </div>

          {/* MongoDB */}
          <div className="skill-card">
            <div className="skill-card-inner">
              <div className="skill-content">
                <img src="/icons/mongodb.png" className="skill-icon" />
                <span className="skill-name">MONGODB</span>
              </div>
            </div>
          </div>

          {/* Git */}
          <div className="skill-card">
            <div className="skill-card-inner">
              <div className="skill-content">
                <img src="/icons/git.png" className="skill-icon" />
                <span className="skill-name">GIT</span>
              </div>
            </div>
          </div>

          {/* Docker */}
          <div className="skill-card">
            <div className="skill-card-inner">
              <div className="skill-content">
                <img src="/icons/docker.png" className="skill-icon" />
                <span className="skill-name">DOCKER</span>
              </div>
            </div>
          </div>

          {/* AWS */}
          <div className="skill-card">
            <div className="skill-card-inner">
              <div className="skill-content">
                <img src="/icons/aws.png" className="skill-icon" />
                <span className="skill-name">AWS</span>
              </div>
            </div>
          </div>

          {/* Jest */}
          <div className="skill-card">
            <div className="skill-card-inner">
              <div className="skill-content">
                <img src="/icons/jest.jpg" className="skill-icon" />
                <span className="skill-name">JEST</span>
              </div>
            </div>
          </div>

          {/* Postman */}
          <div className="skill-card">
            <div className="skill-card-inner">
              <div className="skill-content">
                <img src="/icons/postman.png" className="skill-icon" />
                <span className="skill-name">POSTMAN</span>
              </div>
            </div>
          </div>

          {/* Assembly */}
          <div className="skill-card">
            <div className="skill-card-inner">
              <div className="skill-content">
                <img src="/icons/asm.png" className="skill-icon" />
                <span className="skill-name">ASSEMBLY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-center">
        <h2 className="text-3xl font-bold">
          Projects
        </h2>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-center">
        <h2 className="text-3xl font-bold">
          Contact
        </h2>
        {/*Will be worked on using https://react.dev/reference/react-dom/components/form*/}
      </section>
    </div>
  );
}
