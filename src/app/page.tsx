"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-20">
          <div className="w-48 h-48 relative rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
            <Image
              src="/daniel-mcgrane.jpg"
              alt="Daniel McGrane"
              width={192}
              height={192}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Daniel McGrane
            </h1>
            <h2 className="text-lg md:text-xl text-gray-600 mb-4">
              Mobile Product Engineer
            </h2>
            <p className="text-sm md:text-base text-gray-700 mb-8 leading-relaxed">
              Experienced React Native Product Engineer focused on building
              Bitcoin, Web3 and Fintech apps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:danmcgrane@proton.me"
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors text-center font-medium"
              >
                Contact Me
              </a>
              <a
                href="https://github.com/danarchos"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-black text-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-colors text-center font-medium"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/danielmcgrane"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-black text-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-colors text-center font-medium"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* App Portfolio Section */}
        <section className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            App Portfolio
          </h3>

          {/* ZBD Project */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 mb-16">
            <div className="relative flex-shrink-0">
              {/* Phone Frame */}
              <div className="bg-black rounded-[2.5rem] p-2 shadow-2xl">
                <div className="bg-black rounded-[2rem] p-1">
                  <div
                    className="relative bg-white rounded-[1.75rem] overflow-hidden"
                    style={{ width: "240px", height: "520px" }}
                  >
                    {/* Loading Skeleton */}
                    {mounted && !videoLoaded && (
                      <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
                          <div className="w-24 h-4 bg-gray-300 rounded mx-auto mb-2"></div>
                          <div className="w-16 h-3 bg-gray-300 rounded mx-auto"></div>
                        </div>
                      </div>
                    )}

                    <video
                      className={`w-full h-full object-cover transition-opacity duration-300 ${
                        videoLoaded ? "opacity-100" : "opacity-0"
                      }`}
                      autoPlay
                      loop
                      muted
                      playsInline
                      onLoadedData={() => setVideoLoaded(true)}
                    >
                      <source
                        src="https://x3z4n4wdmnyoq1dn.public.blob.vercel-storage.com/ScreenRecording_10-02-2025%2016-21-47_1%281%29%282%29.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>

            {/* ZBD Details */}
            <div className="flex-1 text-center lg:text-left lg:pl-8">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">
                ZBD | The Bitcoin Rewards App
              </h4>

              <p className="text-gray-600 mb-6 leading-relaxed">
                ZBD is a Series B fintech startup building Bitcoin payments and
                rewards products.
              </p>

              {/* Key Metrics */}
              <div className="mb-6">
                <ul className="space-y-2 text-gray-600 text-left">
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Scaled to $10M Revenue from Bitcoin rewards platform
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    50K Daily Active Users with high engagement
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    1M+ Total Users across iOS and Android
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">•</span>
                    Increased rating from 3.4★ to 4.6★
                  </li>
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h5 className="text-lg font-semibold text-gray-700 mb-4">
                  Built With
                </h5>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <span className="bg-black text-white text-sm px-3 py-2 rounded-full font-medium">
                    React Native
                  </span>
                  <span className="bg-black text-white text-sm px-3 py-2 rounded-full font-medium">
                    TypeScript
                  </span>
                  <span className="bg-black text-white text-sm px-3 py-2 rounded-full font-medium">
                    React/Next.js
                  </span>
                  <span className="bg-black text-white text-sm px-3 py-2 rounded-full font-medium">
                    Supabase
                  </span>
                  <span className="bg-black text-white text-sm px-3 py-2 rounded-full font-medium">
                    Redux
                  </span>
                  <span className="bg-black text-white text-sm px-3 py-2 rounded-full font-medium">
                    React Query
                  </span>
                </div>
              </div>

              {/* Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://apps.apple.com/us/app/zbd-earn-bitcoin-rewards/id1484394401"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors font-medium text-lg"
                >
                  <svg
                    className="w-6 h-6 mr-3"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.13997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                  </svg>
                  Apple Store
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=io.zebedee.wallet&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center border border-black text-black px-8 py-4 rounded-xl hover:bg-black hover:text-white transition-colors font-medium text-lg"
                >
                  <svg
                    className="w-6 h-6 mr-3"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  Google Play
                </a>
              </div>
            </div>
          </div>

          {/* AAVE Project */}
          <div className="border-t border-gray-200 pt-16">
            <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-16">
              <div className="relative flex-shrink-0">
                {/* Monitor Frame */}
                <div className="bg-gray-800 rounded-2xl p-3 shadow-2xl">
                  <div className="bg-gray-700 rounded-xl p-2">
                    {/* Monitor Stand */}
                    <div className="relative">
                      <div
                        className="relative bg-white rounded-lg overflow-hidden"
                        style={{ width: "400px", height: "250px" }}
                      >
                        <Image
                          src="/aave-interface.jpg"
                          alt="AAVE DeFi Protocol Interface"
                          width={400}
                          height={250}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Monitor Stand Base */}
                      <div className="mt-2 flex justify-center">
                        <div className="w-24 h-2 bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 text-center lg:text-left lg:pr-8">
                <h4 className="text-2xl font-bold text-gray-800 mb-4">
                  AAVE | DeFi dApp
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Decentralized finance protocol and dApp, enabling users to
                  lend, borrow, and earn interest on cryptocurrency assets.
                </p>

                {/* Key Metrics */}
                <div className="mb-6">
                  <ul className="space-y-2 text-gray-600 text-left">
                    <li className="flex items-start">
                      <span className="text-black mr-2">•</span>
                      400K+ Monthly active wallets on platform
                    </li>
                    <li className="flex items-start">
                      <span className="text-black mr-2">•</span>
                      99.9% Frontend uptime and reliability
                    </li>
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h5 className="text-lg font-semibold text-gray-700 mb-4">
                    Built With
                  </h5>
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    <span className="bg-black text-white text-sm px-3 py-2 rounded-full font-medium">
                      React
                    </span>
                    <span className="bg-black text-white text-sm px-3 py-2 rounded-full font-medium">
                      JavaScript
                    </span>
                    <span className="bg-black text-white text-sm px-3 py-2 rounded-full font-medium">
                      HTML/CSS
                    </span>
                    <span className="bg-black text-white text-sm px-3 py-2 rounded-full font-medium">
                      Web3.js
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section - Commented out until posts are available
        <section id="blog" className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Recent Blog Posts
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <article className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">React Native</span>
                <span className="text-gray-500 text-sm">Dec 15, 2024</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                Building Performance-First React Native Apps
              </h4>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Learn the key strategies I use to optimize React Native apps for 60fps performance, including navigation optimization, image handling, and memory management techniques...
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Read More →
              </a>
            </article>

            <article className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Development</span>
                <span className="text-gray-500 text-sm">Dec 8, 2024</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                From Figma to App Store: A Complete Workflow
              </h4>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                My proven process for taking mobile app designs from initial wireframes in Figma all the way to a successful App Store launch, including QA and deployment strategies...
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Read More →
              </a>
            </article>

            <article className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">TypeScript</span>
                <span className="text-gray-500 text-sm">Nov 28, 2024</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                TypeScript Best Practices for Large Teams
              </h4>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Essential TypeScript patterns and conventions that have helped our team scale codebases effectively while maintaining type safety and developer productivity...
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Read More →
              </a>
            </article>

            <article className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Career</span>
                <span className="text-gray-500 text-sm">Nov 20, 2024</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                5 Years of Remote Development: Lessons Learned
              </h4>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Insights from building products remotely across different time zones, including communication strategies, tool recommendations, and maintaining work-life balance...
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Read More →
              </a>
            </article>
          </div>

          <div className="text-center mt-8">
            <a
              href="#"
              className="inline-block border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium"
            >
              View All Posts
            </a>
          </div>
        </section>
        */}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Get In Touch
              </h4>
              <div className="space-y-2">
                <a
                  href="mailto:danmcgrane@proton.me"
                  className="block text-gray-600 hover:text-black transition-colors"
                >
                  danmcgrane@proton.me
                </a>
                <p className="text-gray-600">Bournemouth, UK</p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Connect
              </h4>
              <div className="space-y-2">
                <a
                  href="https://github.com/danarchos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-black transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/daniel-mcgrane"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-black transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Quick Links
              </h4>
              <div className="space-y-2">
                <a
                  href="#projects"
                  className="block text-gray-600 hover:text-black transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#blog"
                  className="block text-gray-600 hover:text-black transition-colors"
                >
                  Blog
                </a>
                <a
                  href="#experience"
                  className="block text-gray-600 hover:text-black transition-colors"
                >
                  Experience
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-200">
            <p className="text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} Daniel McGrane. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
