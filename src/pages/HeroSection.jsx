import React from 'react';
import { ArrowRight, Download, Eye, Cpu, Network, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="px-6 flex items-end min-h-[calc(100vh-6rem)] pt-28 pb-16 md:pt-0 md:pb-0">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 h-full">

        {/* Left Column*/}
        <div className="flex flex-col items-center md:items-end justify-end self-end order-1 md:order-2 relative w-full h-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 blur-[100px] w-[20rem] h-[20rem] md:w-[28rem] md:h-[28rem] lg:w-[35rem] lg:h-[35rem] opacity-30 dark:opacity-40 rounded-full animate-pulse z-0 pointer-events-none"></div>
          <img
            src="/about.png"
            alt="Yehan Kanishka"
            className="w-[20rem] md:w-[28rem] lg:w-[36rem] h-auto object-contain object-bottom origin-bottom relative z-10 transition-transform duration-700 ease-in-out hover:scale-105"
          />
        </div>

        {/* Right Column*/}
        <div className="flex flex-col items-start text-left order-2 md:order-1 self-start md:pt-12 pb-6 z-20">
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6 leading-[1.1]">
            Hello, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-blue-400 dark:to-emerald-400">
              Yehan Kanishka.
            </span>
          </h1>

          <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-l max-w-lg mb-8 leading-relaxed">
            A Software Engineering undergraduate at the <strong className="font-semibold text-zinc-900 dark:text-zinc-100">University of Kelaniya</strong>. 
            I enjoy building systems where software meets the physical world and intelligence, solving practical problems using modern engineering principles.
          </p>

          {/* Core Focus Areas */}
          <div className="w-full mb-10">
            <h3 className="text-base font-bold tracking-widest uppercase text-zinc-900 dark:text-zinc-100 mb-6 flex items-center">
              <div className="w-10 h-[2px] bg-blue-500 mr-4 rounded-full"></div>
              Core Focus Areas
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
              
              <div className="flex items-start space-x-4">
                <div className="p-2.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg shrink-0">
                  <Eye size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-base">Computer Vision</h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed">AI detection & real-time processing.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg shrink-0">
                  <Cpu size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-base">IoT & Embedded</h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed">RFID, sensors & hardware integration.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2.5 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg shrink-0">
                  <Network size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-base">Distributed Systems</h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed">Scalable backends & microservices.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2.5 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-lg shrink-0">
                  <Code size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-base">Full Stack Web</h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed">React, Node.js & Spring Boot apps.</p>
                </div>
              </div>

            </div>
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <Link to="/projects" className="flex items-center justify-center space-x-2 bg-zinc-900 hover:bg-black dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 px-8 py-4 rounded-full text-base font-medium transition-all group">
              <span>View My Work</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a href="/Yehan_Kanishka_CV.pdf" download className="flex items-center justify-center space-x-2 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 px-8 py-4 rounded-full text-base font-medium transition-all group">
              <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
              <span>Download CV</span>
            </a>
          </div>
          
        </div>

      </div>
    </section>
  );
}