import Image from "next/image";

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto relative px-4 lg:px-42">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold">Our Services</h2>
          <p className="text-gray-600 mt-4 text-lg">
            We help companies build and integrate the future with:
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {/* Service Card 1 */}
          <div className="relative p-6 bg-white rounded-xl border border-slate-500/20 overflow-hidden">
            <Image
            width={100}
            height={100}
              src="/ai-service.svg"
              alt="AI Services"
              className="absolute -left-10 -top-5 w-52 mb-4 blur-2xl"
            />
            <div className="relative z-10">
              <Image
              width={100}
              height={100}
                src="/ai-service.svg"
                alt="AI Services"
                className="w-24 mx-auto mb-4"
              />
              <h3 className="text-xl text-center font-semibold mb-2">
                Artificial Intelligence
              </h3>
              <p className="text-gray-600 text-center">
                Custom AI solutions using cutting-edge models for automation,
                predictions, and intelligence.
              </p>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="relative p-6 bg-white rounded-xl border border-slate-500/20 overflow-hidden">
            <Image
            width={100}
            height={100}
              src="/web-dev.svg"
              alt="Web Development"
              className="absolute -left-10 -top-5 w-64 mb-4 blur-2xl"
            />
            <div className="relative z-10">
              <Image
              width={100}
              height={100}
                src="/web-dev.svg"
                alt="Web Development"
                className="w-30 mx-auto mb-8"
              />
              <h3 className="text-xl text-center font-semibold mb-2">
                Website Development
              </h3>
              <p className="text-gray-600 text-center">
                Fast, responsive, and scalable websites tailored to your brand
                and audience.
              </p>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="relative p-6 bg-white rounded-xl border border-slate-500/20 overflow-hidden">
            <Image
            width={100}
            height={100}
              src="/web-app.svg"
              alt="Web Application"
              className="absolute -left-10 -top-5 w-52 mb-4 blur-2xl"
            />
            <div className="relative z-10">
              <Image
              width={100}
              height={100}
                src="/web-app.svg"
                alt="Web Application"
                className="w-24 mx-auto mb-4"
              />
              <h3 className="text-xl text-center font-semibold mb-2">
                Web Applications
              </h3>
              <p className="text-gray-600 text-center">
                From dashboard to SaaS, we build dynamic applications that grow
                with your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
