export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-42 text-center">
        <h2 className="text-4xl font-semibold mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "ApmcXdb Website",
              description: "A modern company website using Next.js and Tailwind CSS.",
              image: "/project-1.png"
            },
            {
              title: "School Profile Web App",
              description: "An interactive school profile platform with dynamic features.",
              image: "/project-2.png"
            },
            {
              title: "Social Media Platform (Demo)",
              description: "A demo social platform with authentication and posting features.",
              image: "/project-3.png"
            },
          ].map((project, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow hover:shadow-md transition">
              <img src={project.image} alt={project.title} className="rounded-md w-full h-48 object-cover mb-4" />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
