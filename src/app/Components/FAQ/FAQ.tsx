export default function FAQ() {
    return (
      <section className="py-24 px-4">
        <h2 className="text-4xl font-semibold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: "What services do you offer?",
              a: "We offer property development, website development, mobile apps, and digital solutions.",
            },
            {
              q: "Can you handle custom project needs?",
              a: "Absolutely. We tailor each project to your business goals and customer needs.",
            },
            {
              q: "Where are you based?",
              a: "We operate globally with a main office in Jakarta, Indonesia.",
            },
          ].map(({ q, a }, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-lg mb-1">{q}</h3>
              <p className="text-gray-600">{a}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  