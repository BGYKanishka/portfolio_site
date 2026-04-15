import React from 'react';

export default function AboutSection() {
  return (
    <section className="px-6 flex items-center min-h-[calc(100vh-6rem)] pt-28 pb-16 md:pt-0 md:pb-0 transition-colors duration-300">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">

        {/* Left Column */}
        <div className="flex flex-col items-start text-left z-20 order-2 md:order-1">
          
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6 leading-[1.1]">
              My <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-blue-400 dark:to-emerald-400">
                Background.
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-zinc-600 dark:text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl">
            <p>
              I am a Software Engineering undergraduate at the <strong className="font-semibold text-zinc-900 dark:text-zinc-100">University of Kelaniya</strong>, driven by building systems that connect software with real-world interactions.
            </p>
            <p>
              Rather than focusing solely on traditional application development, I am passionate about creating solutions that integrate logic, data, and external environments to solve practical problems. While my foundation is firmly rooted in software engineering, I continuously explore beyond those boundaries—expanding into areas that challenge how systems are designed, built, and experienced.
            </p>
            <p>
              Ultimately, my focus is on writing clean, maintainable code and developing projects that deliver a tangible, real-world impact.
            </p>
          </div>

        </div>

      {/* Right Column */}
        <div className="relative w-full flex justify-center md:justify-end order-1 md:order-2 mb-6 md:mb-0">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 blur-[100px] w-[16rem] h-[16rem] md:w-[24rem] md:h-[24rem] lg:w-[30rem] lg:h-[30rem] opacity-20 dark:opacity-30 rounded-full animate-pulse z-0 pointer-events-none"></div>

          <div className="relative z-10 w-4/5 sm:w-full max-w-xs md:max-w-sm lg:max-w-md group flex justify-center">
            
            <img
              src="/about.png" 
              alt="Yehan Kanishka"
              className="w-full h-auto object-contain drop-shadow-2xl grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
            />
            
          </div>

        </div>

      </div>
    </section>
  );
}