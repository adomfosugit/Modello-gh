
import { servicesData } from "@/Constants";
import Image from "next/image";
import Link from "next/link";

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    return <div className="p-10 text-center text-red-500">Service not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
  {/* Hero Section */}
  <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white">  
    <div className="relative max-w-7xl mx-auto px-6 py-5 lg:py-18">
      <div className="text-center mb-2">
      
        <h1 className="text-5xl lg:text-6xl font-bold mb-8">{service.TagContent}</h1>
      </div>
      
      
    </div>
  </div>

  {/* Main Content */}
  <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
    {/* Basic Info */}
    <section className="mb-20">
      <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Basic Info</h2>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed">{service.basicInfo}</p>
      </div>
    </section>

    {/* Mode of Operation */}
  {/*  <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Mode of Operation</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our step-by-step process to deliver excellence
        </p>
      </div>

      <div className="space-y-6">
        {service.modeOfOperation.map((step, i) => (
          <div
            key={i}
            className="group relative bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                  {i + 1}
                </div>
              </div>
              <div className="flex-1">
                <p className="text-lg text-gray-700 leading-relaxed">{step}</p>
              </div>
              <svg className="w-6 h-6 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            {i < service.modeOfOperation.length - 1 && (
              <div className="absolute left-12 top-full w-0.5 h-6 bg-gradient-to-b from-blue-300 to-transparent"></div>
            )}
          </div>
        ))}
      </div>
    </section>  */}

    {/* Gallery */}
    <section>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our portfolio of successful projects
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {service.gallery.map((img, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 aspect-video"
          >
            <Image
              src={img}
              alt={`${service.TagContent} ${i + 1}`}
              width={400}
              height={250}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="font-semibold">View Project</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA Section */}
    <section className="mt-24">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 lg:p-16 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's bring your vision to life with our expert services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href= {'/Contact'} className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Contact Us
            </Link>
           
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
  );
}
