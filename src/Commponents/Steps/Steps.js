import React from "react";

const Steps = () => {
  return (
    <section id="HowIwork" class="text-gray-600 body-font bg-[#1F1F1F]">
      <div class="container w-10/12 py-24 mx-auto flex flex-wrap ">
        <div class="flex flex-wrap w-full">
          <img
            class="hidden md:block lg:w-2/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
            src="https://dummyimage.com/600x250"
            alt="step"
          />
          <div class="lg:w-3/5 md:w-1/2 md:pl-10 md:py-6 text-white">
            <h1 className="mb-16 text-white text-4xl">How I Work?</h1>
            <div class="flex relative pb-12">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-gray-900 relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div class="flex-grow pl-4">
                <h2 class="font-medium title-font text-sm text-yellow-500 mb-1 tracking-wider">
                  STEP 1
                </h2>
                <p class="leading-relaxed">
                  VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                  bespoke try-hard cliche palo santo offal.
                </p>
              </div>
            </div>
            <div class="flex relative pb-12">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-gray-900 relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div class="flex-grow pl-4">
                <h2 class="font-medium title-font text-sm text-yellow-500 mb-1 tracking-wider">
                  STEP 2
                </h2>
                <p class="leading-relaxed">
                  Vice migas literally kitsch +1 pok pok. Truffaut hot chicken
                  slow-carb health goth, vape typewriter.
                </p>
              </div>
            </div>
            <div class="flex relative pb-12">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-gray-900 relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="5" r="3"></circle>
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                </svg>
              </div>
              <div class="flex-grow pl-4">
                <h2 class="font-medium title-font text-sm text-yellow-500 mb-1 tracking-wider">
                  STEP 3
                </h2>
                <p class="leading-relaxed">
                  Coloring book nar whal glossier master cleanse umami. Salvia
                  +1 master cleanse blog taiyaki.
                </p>
              </div>
            </div>

            <div class="flex relative">
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-gray-900 relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div class="flex-grow pl-4">
                <h2 class="font-medium title-font text-sm text-yellow-500 mb-1 tracking-wider">
                  FINISH
                </h2>
                <p class="leading-relaxed">
                  Pitchfork ugh tattooed scenester echo park gastropub whatever
                  cold-pressed retro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
