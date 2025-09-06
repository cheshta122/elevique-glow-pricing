import React from "react";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-between px-12 py-20 bg-black text-white overflow-hidden">
      {/* Left Content */}
      <div className="max-w-lg z-10">
        <h1 className="text-5xl font-bold text-cyan-400">Elevique</h1>
        <p className="mt-4 text-lg text-gray-300">
          Transform Your Brand with AI-Powered Video Creation. <br />
          No shoots, no crew, no locations — just high-converting, viral AI content that saves you lakhs in production costs.
        </p>
        <div className="mt-6 flex gap-4">
          <a
            href="#pricing"
            className="px-6 py-3 bg-cyan-500 text-black rounded-xl font-semibold hover:bg-cyan-400 transition"
          >
            View Pricing
          </a>
          <a
            href="#get-started"
            className="px-6 py-3 border border-cyan-400 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black transition"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Right Image with Gradient Glow */}
      <div className="relative w-1/2 flex justify-center">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>
        <img src="/image.png" alt="AI Robot" className="relative z-10 max-h-[500px] drop-shadow-[0_0_25px_rgba(0,255,255,0.5)] animate-float" />

      </div>
    </section>
  );
};

export default Hero;
