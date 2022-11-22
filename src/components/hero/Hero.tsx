import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      {/* <!-- Hero --> */}
      <section className="hero relative py-20 md:pt-32">
        <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
          <img src="/images/gradient.jpg" alt="gradient" />
        </picture>
        <picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
          <img src="/images/gradient-dark.jpg" alt="gradient dark" />
        </picture>

        <div className="container">
          <div className="mx-auto max-w-2xl pt-24 text-center">
            <h1 className="mb-10 font-display text-5xl text-jacarta-700 dark:text-white lg:text-6xl xl:text-7xl">
              Discover, Collect & Sell
              <span className="animate-gradient"> Creative NFTs</span>
            </h1>
          </div>
        </div>
      </section>
      {/* <!-- end hero --> */}
    </>
  );
};

export default Hero;
