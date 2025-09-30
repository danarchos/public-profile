import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
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
              Senior React Native Engineer
            </h2>
            <p className="text-sm md:text-base text-gray-700 mb-8 leading-relaxed">
              React Native Product Engineer taking apps from Figma wireframes to
              highly-rated App Store releases.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:danmcgrane@proton.me"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
              >
                Contact Me
              </a>
              <a
                href="https://github.com/danarchos"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors text-center font-medium"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Featured Projects Section */}
        <section id="projects" className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <iframe
                src="https://zbd.gg/"
                className="w-full h-64"
                title="ZBD"
                loading="lazy"
              ></iframe>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  ZBD Gaming Platform
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Bitcoin rewards platform for gamers. Full-stack development from React Native mobile app to Next.js web platform, handling $10M+ in transactions.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">React Native</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Next.js</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">TypeScript</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Bitcoin</span>
                </div>
                <a
                  href="https://zbd.gg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Visit ZBD →
                </a>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <iframe
                src="https://www.themorrow.digital/ownable"
                className="w-full h-64"
                title="Morrow Ownable"
                loading="lazy"
              ></iframe>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Ownable Digital Fashion
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Revolutionary digital fashion platform enabling users to own, trade, and showcase digital clothing. Built with React and modern web technologies.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">React</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">TypeScript</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">E-commerce</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">3D/AR</span>
                </div>
                <a
                  href="https://www.themorrow.digital/ownable"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Visit Ownable →
                </a>
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

        {/* Experience Section */}
        <section id="experience" className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Experience</h3>

          {/* ZBD */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h4 className="text-xl font-semibold text-gray-800">ZBD</h4>
              <span className="text-gray-600 font-medium">2021 - Present</span>
            </div>

            <div className="mb-6">
              <h5 className="text-lg font-medium text-gray-700 mb-3">
                Senior React Native Engineer
              </h5>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Owned end-to-end delivery of a full-stack rewards platform
                  from zero to $10M+ with React and Next.js
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Architected the React Native app with a focus on UX,
                  performance and scalability
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Collaborated with product, design and compliance in Figma to
                  shape requirements and scope features
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Streamlined QA and CI/CD pipelines to accelerate releases
                  while maintaining a high standard
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="text-lg font-medium text-gray-700 mb-3">
                React Engineer
              </h5>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Built full-stack apps using TypeScript, React / React Native,
                  Next.js, Redux, Node.js, Express, Hono Supabase, AWS, Vercel,
                  EAS and Cloudflare
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Managed frontend state with Redux, MobX, and Context API
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Built and managed a component library with Storybook
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Integrated third-party APIs for payments and KYC/compliance
                  workflows
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Built CI/CD pipelines running API and E2E tests using Jest,
                  Detox and Prowler
                </li>
              </ul>
            </div>
          </div>

          {/* Morrow */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h4 className="text-xl font-semibold text-gray-800">Morrow</h4>
              <span className="text-gray-600 font-medium">2019 - 2021</span>
            </div>

            <div className="mb-6">
              <h5 className="text-lg font-medium text-gray-700 mb-3">
                React Engineer
              </h5>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Built greenfield, brownfield and legacy B2B apps using
                  Typescript, React / React Native across diverse projects from
                  ag-tech to fashion ecommerce
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  State management with Mobx and Redux
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Styled UIs and built component libraries with CSS, Styled
                  Components and Storybook
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Wrote unit tests with Jest and React Testing Library
                </li>
              </ul>
            </div>
          </div>

          {/* AAVE */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h4 className="text-xl font-semibold text-gray-800">AAVE</h4>
              <span className="text-gray-600 font-medium">2018 - 2019</span>
            </div>

            <div className="mb-6">
              <h5 className="text-lg font-medium text-gray-700 mb-3">
                Frontend Developer
              </h5>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Built a responsive app with HTML, CSS, JavaScript, and React
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Version control with Git and Github
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Get In Touch</h4>
              <div className="space-y-2">
                <a
                  href="mailto:danmcgrane@proton.me"
                  className="block text-gray-600 hover:text-blue-600 transition-colors"
                >
                  danmcgrane@proton.me
                </a>
                <p className="text-gray-600">Bournemouth, UK</p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Connect</h4>
              <div className="space-y-2">
                <a
                  href="https://github.com/danarchos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-blue-600 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/daniel-mcgrane"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-blue-600 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a
                  href="#projects"
                  className="block text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#blog"
                  className="block text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Blog
                </a>
                <a
                  href="#experience"
                  className="block text-gray-600 hover:text-blue-600 transition-colors"
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
