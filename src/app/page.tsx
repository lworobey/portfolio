export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Home Section */}
      <section id="home" className="section-center justify-center">
        {/* h1 headings */}
        <div className="flex flex-col items-start relative">
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-blue-500"></div>
          <h1 className="text-5xl font-bold">5xl + Bold</h1>
          <h1 className="text-5xl font-semibold">5xl + Semibold</h1>
          <h1 className="text-5xl font-medium">5xl + Medium</h1>
          <h1 className="text-4xl font-bold">4xl + Bold</h1>
          <h1 className="text-4xl font-semibold">4xl + Semibold</h1>
          <h1 className="text-4xl font-medium">4xl + Medium</h1>
          <h1 className="text-3xl font-bold">3xl + Bold</h1>
          <h1 className="text-3xl font-semibold">3xl + Semibold</h1>
          <h1 className="text-3xl font-medium">3xl + Medium</h1>
          <h1 className="text-2xl font-bold">2xl + Bold</h1>
          <h1 className="text-2xl font-semibold">2xl + Semibold</h1>
          <h1 className="text-2xl font-medium">2xl + Medium</h1>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-center">
        <h2 className="text-5xl font-bold">
          
        </h2>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-center">
        <h2 className="text-5xl font-bold">
          Projects
        </h2>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-center">
        <h2 className="text-5xl font-bold">
          Contact
        </h2>
      </section>
    </div>
  );
}
