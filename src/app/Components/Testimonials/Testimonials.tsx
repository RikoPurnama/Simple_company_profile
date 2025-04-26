export default function Testimonials() {
    return (
      <section className="py-24 text-center bg-gray-50">
        <h2 className="text-4xl font-semibold mb-12">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              name: "Michael Smith",
              company: "RealEstatePro",
              feedback: "Professional team with outstanding results. They brought our vision to life!",
            },
            {
              name: "Jessica Lee",
              company: "HomeFinder",
              feedback: "Highly recommend for any real estate and digital project needs.",
            },
          ].map((testi, idx) => (
            <div key={idx} className="max-w-sm bg-white p-6 rounded-xl shadow">
              <p className="text-gray-700 italic mb-4">"{testi.feedback}"</p>
              <div className="font-semibold">{testi.name}</div>
              <div className="text-sm text-gray-500">{testi.company}</div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  