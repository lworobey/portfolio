export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Home Section */}
      <section id="home" className="section-center">
        <h1 className="text-4xl font-bold">
          Welcome to My Portfolio
        </h1>
      </section>

      {/* About Section */}
      <section id="about" className="section-center">
        <h2 className="text-3xl font-bold">
          About Me
        </h2>
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
      </section>
    </div>
  );
}
