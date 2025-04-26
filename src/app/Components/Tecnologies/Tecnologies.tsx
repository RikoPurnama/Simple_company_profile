export default function Technologies() {
    return (
      <section className="py-24 text-center">
        <h2 className="text-4xl font-semibold mb-6">Technologies We Use</h2>
        <p className="text-gray-600 max-w-xl mx-auto text-lg mb-12">
          We combine innovation with the latest tech stacks to deliver excellence.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            "React js",
            "Next js",
            "TypeScript",
            "TailwindCSS",
            "Astro js",
            "express js",
            "Firebase",
            "mongoDB",
          ].map((tech, idx) => (
            <span key={idx} className="px-4 py-2 border rounded-full text-sm bg-white shadow-sm">
              {tech}
            </span>
          ))}
        </div>
      </section>
    );
  }
  