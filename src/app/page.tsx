import Image from 'next/image';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  // Filter for featured projects
  const featuredProjects = projects.filter(project => project.featured);
  
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
                <Image src="/icons/Python.png" alt="Python logo" width={64} height={64} className="skill-icon" style={{ objectFit: 'contain' }} />
                <span className="skill-name">PYTHON</span>
              </div>
            </div>
          </div>

          {/* Java */}
          <div className="skill-card">
            <div className="skill-card-inner">
              <div className="skill-content">
                <Image src="/icons/java.jpg" alt="Java logo" width={64} height={64} className="skill-icon" style={{ objectFit: 'contain' }} />
                <span className="skill-name">JAVA</span>
              </div>
            </div>
          </div>

          {/* React */}
          <div className="skill-card">
            <div className="skill-card-inner">
              <div className="skill-content">
                <Image src="/icons/react.png" alt="React logo" width={64} height={64} className="skill-icon" style={{ objectFit: 'contain' }} />
                <span className="skill-name">REACT</span>
              </div>
            </div>
          </div>

          {/* Next.js */}
          <div className="skill-card">
            <div className="skill-card-inner">
              <div className="skill-content">
                <Image src="/icons/nextjs.png" alt="Next.js logo" width={64} height={64} className="skill-icon" style={{ objectFit: 'contain' }} />
                <span className="skill-name">NEXT.JS</span>
              </div>
            </div>
          </div>

          {/* HTML */}
          <div className="skill-card">
            <div className="skill-card-inner">
              <div className="skill-content">
                <Image src="/icons/html.png" alt="HTML logo" width={64} height={64} className="skill-icon" style={{ objectFit: 'contain' }} />
                <span className="skill-name">HTML</span>
              </div>
            </div>
          </div>

          {/* CSS */}
          <div className="skill-card">
            <div className="skill-card-inner">
              <div className="skill-content">
                <Image src="/icons/css.jpg" alt="CSS logo" width={64} height={64} className="skill-icon" style={{ objectFit: 'contain' }} />
                <span className="skill-name">CSS</span>
              </div>
            </div>
          </div>

          {/* Node.js & Express */}
          <div className="skill-card">
            <div className="skill-card-inner">
              <div className="skill-content">
                <Image src="/icons/nodeAndExpress.jpg" alt="Node.js and Express logo" width={64} height={64} className="skill-icon" style={{ objectFit: 'contain' }} />
                <span className="skill-name">NODE.JS</span>
              </div>
            </div>
          </div>

          {/* MongoDB */}
          <div className="skill-card">
            <div className="skill-card-inner">
              <div className="skill-content">
                <Image src="/icons/mongodb.png" alt="MongoDB logo" width={64} height={64} className="skill-icon" style={{ objectFit: 'contain' }} />
                <span className="skill-name">MONGODB</span>
              </div>
            </div>
          </div>

          {/* Git */}
          <div className="skill-card">
            <div className="skill-card-inner">
              <div className="skill-content">
                <Image src="/icons/git.png" alt="Git logo" width={64} height={64} className="skill-icon" style={{ objectFit: 'contain' }} />
                <span className="skill-name">GIT</span>
              </div>
            </div>
          </div>

          {/* Docker */}
          <div className="skill-card">
            <div className="skill-card-inner">
              <div className="skill-content">
                <Image src="/icons/docker.png" alt="Docker logo" width={64} height={64} className="skill-icon" style={{ objectFit: 'contain' }} />
                <span className="skill-name">DOCKER</span>
              </div>
            </div>
          </div>

          {/* AWS */}
          <div className="skill-card">
            <div className="skill-card-inner">
              <div className="skill-content">
                <Image src="/icons/aws.png" alt="AWS logo" width={64} height={64} className="skill-icon" style={{ objectFit: 'contain' }} />
                <span className="skill-name">AWS</span>
              </div>
            </div>
          </div>

          {/* Jest */}
          <div className="skill-card">
            <div className="skill-card-inner">
              <div className="skill-content">
                <Image src="/icons/jest.jpg" alt="Jest logo" width={64} height={64} className="skill-icon" style={{ objectFit: 'contain' }} />
                <span className="skill-name">JEST</span>
              </div>
            </div>
          </div>

          {/* Postman */}
          <div className="skill-card">
            <div className="skill-card-inner">
              <div className="skill-content">
                <Image src="/icons/postman.png" alt="Postman logo" width={64} height={64} className="skill-icon" style={{ objectFit: 'contain' }} />
                <span className="skill-name">POSTMAN</span>
              </div>
            </div>
          </div>

          {/* Assembly */}
          <div className="skill-card">
            <div className="skill-card-inner">
              <div className="skill-content">
                <Image src="/icons/asm.png" alt="Assembly logo" width={64} height={64} className="skill-icon" style={{ objectFit: 'contain' }} />
                <span className="skill-name">ASSEMBLY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-center">
        <h2 className="text-3xl font-bold mb-8">
          Projects
        </h2>
        
        <div>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-center">
        <h2 className="text-3xl font-bold">
          Contact Me
        </h2>
          <ContactForm />
      </section>
    </div>
  );
}
