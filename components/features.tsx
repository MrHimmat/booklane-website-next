import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";

export default function Features() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,#2196F3,#43E97B)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Book Categories
              </span>
            </div>
            <h2 className="bg-[linear-gradient(to_right,#2196F3_0%,#43E97B_100%)] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Explore Our Collections
            </h2>
            <p className="text-lg text-indigo-200/65">
              Find essential educational materials, rare editions, academic resources, and vintage collections in one place.
            </p>
          </div>
          <div className="relative flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            <Image
              className="max-w-none rounded-xl"
              src={FeaturesImage}
              width={1104}
              height={384}
              alt="Features"
            />
            <div className="absolute inset-0 rounded-xl pointer-events-none"
                 style={{
                   background: 'linear-gradient(90deg, #2196F3 0%, #43E97B 100%)',
                   opacity: 0.25, // Adjust for desired effect
                   mixBlendMode: 'multiply'
                 }}
            />
          </div>
          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <article>
              <svg
                className="mb-3"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <defs>
                  <linearGradient id="mainLogoGradient1" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#2196F3" />
                    <stop offset="100%" stopColor="#43E97B" />
                  </linearGradient>
                </defs>
                <path fill="url(#mainLogoGradient1)" fillOpacity="1" d="M0 0h14v17H0V0Zm2 2v13h10V2H2Z" />
                <path fill="url(#mainLogoGradient1)" fillOpacity="0.48" d="m16.295 5.393 7.528 2.034-4.436 16.412L5.87 20.185l.522-1.93 11.585 3.132 3.392-12.55-5.597-1.514.522-1.93Z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Textbooks
              </h3>
              <p className="text-indigo-200/65">
                Find essential educational materials for all levels
              </p>
            </article>
            <article>
              <svg
                className="mb-3"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <defs>
                  <linearGradient id="mainLogoGradient2" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#2196F3" />
                    <stop offset="100%" stopColor="#43E97B" />
                  </linearGradient>
                </defs>
                <path fill="url(#mainLogoGradient2)" fillOpacity="0.48" d="M7 8V0H5v8h2Zm12 16v-4h-2v4h2Z" />
                <path fill="url(#mainLogoGradient2)" fillOpacity="1" d="M19 6H0v2h17v8H7v-6H5v8h19v-2h-5V6Z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Rare Editions
              </h3>
              <p className="text-indigo-200/65">
                Discover hard-to-find and collectible books
              </p>
            </article>
            <article>
              <svg
                className="mb-3"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <defs>
                  <linearGradient id="mainLogoGradient3" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#2196F3" />
                    <stop offset="100%" stopColor="#43E97B" />
                  </linearGradient>
                </defs>
                <path fill="url(#mainLogoGradient3)" d="M23.414 6 18 .586 16.586 2l3 3H7a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4h12.586l-3 3L18 11.414 23.414 6Z" />
                <path fill="url(#mainLogoGradient3)" fillOpacity=".48" d="M13.01 12.508a2.5 2.5 0 0 0-3.502.482L1.797 23.16.203 21.952l7.71-10.17a4.5 4.5 0 1 1 7.172 5.437l-4.84 6.386-1.594-1.209 4.841-6.385a2.5 2.5 0 0 0-.482-3.503Z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Academic Resources
              </h3>
              <p className="text-indigo-200/65">
                Access valuable study materials and references
              </p>
            </article>
            <article>
              <svg
                className="mb-3"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <defs>
                  <linearGradient id="mainLogoGradient4" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#2196F3" />
                    <stop offset="100%" stopColor="#43E97B" />
                  </linearGradient>
                </defs>
                <path fill="url(#mainLogoGradient4)" fillOpacity=".48" d="m3.031 9.05-.593-.805 1.609-1.187.594.804a6.966 6.966 0 0 1 0 8.276l-.594.805-1.61-1.188.594-.805a4.966 4.966 0 0 0 0-5.9Z" />
                <path fill="url(#mainLogoGradient4)" d="m7.456 6.676-.535-.845 1.69-1.07.534.844a11.944 11.944 0 0 1 0 12.789l-.535.845-1.69-1.071.536-.845a9.944 9.944 0 0 0 0-10.647Z" />
                <path fill="url(#mainLogoGradient4)" opacity=".48" d="m11.888 4.35-.514-.858 1.717-1.027.513.858a16.9 16.9 0 0 1 2.4 8.677 16.9 16.9 0 0 1-2.4 8.676l-.513.859-1.717-1.028.514-.858A14.9 14.9 0 0 0 14.003 12a14.9 14.9 0 0 0-2.115-7.65Z" />
                <path fill="url(#mainLogoGradient4)" d="m16.321 2-.5-.866 1.733-1 .5.866A22 22 0 0 1 21 12c0 3.852-1.017 7.636-2.948 10.97l-.502.865-1.73-1.003.501-.865A19.878 19.878 0 0 0 19 12a20 20 0 0 0-2.679-10Z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Vintage Collection
              </h3>
              <p className="text-indigo-200/65">
                Explore our curated selection of old and antique books
              </p>
            </article>
            <article>
              <svg className="mb-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="mainLogoGradient5" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#2196F3" />
                    <stop offset="100%" stopColor="#43E97B" />
                  </linearGradient>
                </defs>
                <path fill="url(#mainLogoGradient5)" d="M3 6.5V19a1 1 0 0 0 1.447.894L12 17.118l7.553 2.776A1 1 0 0 0 21 19V6.5a2.5 2.5 0 0 0-2.5-2.5h-13A2.5 2.5 0 0 0 3 6.5Z"/>
                <path fill="url(#mainLogoGradient5)" fillOpacity=".5" d="M8 8l4 4 4-4"/>
                <circle fill="url(#mainLogoGradient5)" cx="18" cy="4" r="1"/>
                <circle fill="url(#mainLogoGradient5)" cx="20" cy="7" r="0.5"/>
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">Fiction</h3>
              <p className="text-indigo-200/65">Dive into imaginative worlds and captivating stories.</p>
            </article>
            <article>
              <svg className="mb-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="mainLogoGradient6" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#2196F3" />
                    <stop offset="100%" stopColor="#43E97B" />
                  </linearGradient>
                </defs>
                <rect x="3" y="4" width="14" height="4" rx="1" fill="url(#mainLogoGradient6)" />
                <rect x="3" y="10" width="14" height="4" rx="1" fill="url(#mainLogoGradient6)" fillOpacity=".7"/>
                <rect x="3" y="16" width="14" height="4" rx="1" fill="url(#mainLogoGradient6)" fillOpacity=".4"/>
                <path d="M19 7l2 2-2 2" stroke="url(#mainLogoGradient6)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">Non-Fiction</h3>
              <p className="text-indigo-200/65">Explore real-life knowledge, facts, and learning resources.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
