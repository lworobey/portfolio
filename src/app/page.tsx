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
          I am a Software Engineer with a passion in backend engineering.
          I enjoy learning to code and exporing new ventures related to coding to improve my overall experience.
          While I&apos;m not coding I enjoy playing video games and watching TV, so I&apos;m never away from technology.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-center">
        <h2 className="text-3xl font-bold">
          Skills
        </h2>
        <div className="mt-10 max-w-4xl mx-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center items-center">
          {/* Python */}
          <div className="relative p-[1px] rounded-lg bg-gradient-to-b from-blue-500 to-green-500">
            <div className="bg-gray-900 rounded-lg p-4 h-full">
              <div className="flex flex-col items-center">
                <Image src="/icons/Python.png"
                  alt="Python"
                  width={64}
                  height={64}
                  className="mb-2"
                />
                <span className="text-white">PYTHON</span>
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
      </section>
    </div>
  );
}
