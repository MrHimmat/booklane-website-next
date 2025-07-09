import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";
import AnimatedBook from "@/components/animated-book";

export default function HeroHome() {
  return (
    <section>
      <div className="min-h-screen flex flex-col justify-start items-center bg-transparent mt-24 md:mt-32">
        {/* Section header */}
        <div className="flex flex-col gap-6 text-center w-full max-w-4xl px-4">
          <h1
            className=" bg-[linear-gradient(to_right,#2196F3,#43E97B,#2196F3)] bg-[length:300%_auto] bg-clip-text text-transparent font-nacelle text-6xl md:text-9xl font-extrabold tracking-tight drop-shadow-xl animate-gradient"
            style={{animation: 'gradient 12s linear infinite'}}
            data-aos="fade-up"
          >
            BookLane
          </h1>
          <h2
            className="bg-[linear-gradient(to_right,#2196F3,#43E97B,#2196F3)] bg-[length:300%_auto] bg-clip-text text-transparent font-nacelle text-4xl md:text-5xl font-bold tracking-tight drop-shadow-lg animate-gradient mb-8"
            style={{animation: 'gradient 12s linear infinite'}}
            data-aos="fade-up"
          >
            Give Old Books a New Chapter !
          </h2>
          <div className="mx-auto max-w-4xl">
            <p
              className="mb-10  text-lg md:text-2xl text-indigo-200/65 font-medium"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Discover rare finds and essential educational materials in our mobile app
            </p>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <div data-aos="fade-up" data-aos-delay={400}>
                <a
                  className="btn group mb-4 w-full text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:brightness-105 sm:mb-0 sm:w-auto text-base md:text-lg mt-6"
                  href="https://play.google.com/store/apps/details?id=com.cloud_regex.book_lane&hl=en_IN&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative inline-flex items-center font-bold" style={{textShadow: '0 1px 4px rgba(0,0,0,0.18)'}}>
                    Get on Play Store
                    <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Banner image below hero content */}
          {/* <AnimatedBook /> */}
      </div>
    </section>
  );
}
