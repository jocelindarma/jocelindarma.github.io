"use client";

import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Github, ExternalLink, Mail, Linkedin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-5">
          <div className="lg:col-span-2">
            {/* Hero Section */}
            <section className="mb-16">
              <h2 className="text-5xl font-bold mb-4 whitespace-nowrap">
                Hi, I&apos;m Jocelin Darma
              </h2>
            </section>

            {/* About Section */}
            <section>
              <h2 className="text-2xl font-bold mb-4">About</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Results-oriented Full Stack Engineer with over 5 years of experience building robust and scalable applications. 
                Proficient in Python, Java, JavaScript, and a range of other technologies. Proven ability to deliver high-quality 
                code and collaborate effectively within cross-functional teams. Seeking to leverage my skills to contribute to 
                innovative solutions in the tech industry.
              </p>
              <p className="text-gray-700 leading-relaxed">
              </p>
            </section>
          </div>

          {/* Waving Girl Image */}
          <div className="lg:col-span-1 hidden lg:block">
            <Image
              alt="Waving Girl"
              src="/waving_overlay.png"
              width={400}
              height={500}
              unoptimized
            />
          </div>
        </div>

        {/* Work Experience Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
          <Accordion type="single" collapsible className="w-full">
            {/* Nawatech */}
            <AccordionItem value="item-1" className="border-b-0 mb-4">
              <div className="flex gap-4 items-start bg-white rounded-lg p-4 border border-gray-200">
                <div className="w-12 h-12 rounded overflow-hidden flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/nawatech_logo.jpeg"
                    alt="Nawatech"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <AccordionTrigger className="hover:no-underline py-0">
                    <div className="flex-1 text-left">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">Nawatech</h3>
                        <span className="text-sm text-gray-500 mr-4">Nov 2023 - Nov 2024, Feb 2025 - Present</span>
                      </div>
                      <p className="text-sm text-gray-600">Full Stack Developer</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="text-sm text-gray-700 mt-4 space-y-2 list-disc list-inside">
                      <li>Developed GPT-powered omnichannel chatbots using Azure Bot Framework, Qiscus, or custom-built solutions with JavaScript/TypeScript frontends and Python backends</li>
                      <li>Created a virtual assistant to report palm oil harvesting activities, increasing reporting efficiency by up to 95% and integrated with UIPath for natural language-based navigation within Power BI dashboards</li>
                      <li>Collaborated with diverse clients to understand their unique project requirements, delivering customized solutions that align with their business objectives</li>
                    </ul>
                  </AccordionContent>
                </div>
              </div>
            </AccordionItem>

            {/* Traveloka */}
            <AccordionItem value="item-2" className="border-b-0 mb-4">
              <div className="flex gap-4 items-start bg-white rounded-lg p-4 border border-gray-200">
                <div className="w-12 h-12 rounded overflow-hidden flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/traveloka_logo.png"
                    alt="Traveloka"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <AccordionTrigger className="hover:no-underline py-0">
                    <div className="flex-1 text-left">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">Traveloka</h3>
                        <span className="text-sm text-gray-500 mr-4">Nov 2024 - Feb 2025</span>
                      </div>
                      <p className="text-sm text-gray-600">Software Engineer II – Content Marketing Platform</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="text-sm text-gray-700 mt-4 space-y-2 list-disc list-inside">
                      <li>Developed and deployed an internal Digital Asset Management (DAM) tool and backend system using Java and Spring Boot, significantly enhancing organizational efficiency in searching and managing digital assets</li>
                      <li>Integrated cross-functional team assets, collaborating with Talent Acquisition (TA) and Local teams to centralize resources</li>
                      <li>Experimented with Google Vertex AI to introduce an automated keyword tagging feature, streamlining the metadata generation process during asset uploads and improving discoverability</li>
                      <li>Implemented unit testing using TestNG and Mockito, achieving 80%+ test coverage, ensuring system reliability and reducing bugs</li>
                    </ul>
                  </AccordionContent>
                </div>
              </div>
            </AccordionItem>

            {/* Starbucks - Service Observability */}
            <AccordionItem value="item-3" className="border-b-0 mb-4">
              <div className="flex gap-4 items-start bg-white rounded-lg p-4 border border-gray-200">
                <div className="w-12 h-12 rounded overflow-hidden flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/starbucks_logo.png"
                    alt="Starbucks"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <AccordionTrigger className="hover:no-underline py-0">
                    <div className="flex-1 text-left">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">Starbucks Corporation</h3>
                        <span className="text-sm text-gray-500 mr-4">Jul 2021 - Nov 2022</span>
                      </div>
                      <p className="text-sm text-gray-600">Application Developer I – Service Observability Engineering</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="text-sm text-gray-700 mt-4 space-y-2 list-disc list-inside">
                      <li>Developed an automated escalation workflow using a Slack Bot (Slack Bolt SDK), increasing Tier 1 → Tier 2 handoff speed and improving service desk visibility, productivity, and response times</li>
                      <li>Built internal operational dashboards to surface real-time health signals, enabling faster incident detection and reducing outage resolution time through improved cross-team observability</li>
                      <li>Automated build and deployment pipelines using Drone CI and Ansible, reducing manual deployment effort and standardizing release processes across services</li>
                    </ul>
                  </AccordionContent>
                </div>
              </div>
            </AccordionItem>

            {/* Microsoft */}
            <AccordionItem value="item-4" className="border-b-0 mb-4">
              <div className="flex gap-4 items-start bg-white rounded-lg p-4 border border-gray-200">
                <div className="w-12 h-12 rounded overflow-hidden flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/microsoft_logo.png"
                    alt="Microsoft"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <AccordionTrigger className="hover:no-underline py-0">
                    <div className="flex-1 text-left">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">Microsoft</h3>
                        <span className="text-sm text-gray-500 mr-4">Feb 2021 - Jul 2021</span>
                      </div>
                      <p className="text-sm text-gray-600">Software Data Operations Engineer — Power BI Team</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="text-sm text-gray-700 mt-4 space-y-2 list-disc list-inside">
                      <li>Contract position through MAQ Software</li>
                      <li>Engineered new feature modules and Custom Visuals for Power BI Desktop using TypeScript, D3.js, and the Power BI Visuals SDK, improving extensibility and rendering performance</li>
                      <li>Implemented comprehensive unit tests using Karma and Jasmine, achieving 100% passing test cases and maintaining 90%+ code coverage</li>
                      <li>Integrated Power BI with diverse data sources, performing data modeling, DAX optimization, and dataset performance tuning</li>
                      <li>Built highly interactive dashboards and analytical reports, implementing drill-through, cross-filtering, and advanced measures to support enterprise-level decision intelligence</li>
                    </ul>
                  </AccordionContent>
                </div>
              </div>
            </AccordionItem>

            {/* Starbucks - Intern */}
            <AccordionItem value="item-5" className="border-b-0 mb-4">
              <div className="flex gap-4 items-start bg-white rounded-lg p-4 border border-gray-200">
                <div className="w-12 h-12 rounded overflow-hidden flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/starbucks_logo.png"
                    alt="Starbucks"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <AccordionTrigger className="hover:no-underline py-0">
                    <div className="flex-1 text-left">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">Starbucks Corporation</h3>
                        <span className="text-sm text-gray-500 mr-4">Jun 2020 - Aug 2020</span>
                      </div>
                      <p className="text-sm text-gray-600">Application Developer I Intern — Operations Command Center</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-gray-700 mt-4">
                      Expanded capabilities for a critical internal React-based web application, which shows the health of all Starbucks Technology products and services. The site was intended to help the Major Incident Response (MIR) team quickly gather service health and owner information to improve the mean time to respond (MTTR) for outages.
                    </p>
                  </AccordionContent>
                </div>
              </div>
            </AccordionItem>

            {/* Vrbo */}
            <AccordionItem value="item-6" className="border-b-0 mb-4">
              <div className="flex gap-4 items-start bg-white rounded-lg p-4 border border-gray-200">
                <div className="w-12 h-12 rounded overflow-hidden flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/vrbo_logo.png"
                    alt="Vrbo"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <AccordionTrigger className="hover:no-underline py-0">
                    <div className="flex-1 text-left">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">Vrbo</h3>
                        <span className="text-sm text-gray-500 mr-4">Sep 2019 - Jun 2020</span>
                      </div>
                      <p className="text-sm text-gray-600">Student Software Developer — Senior Capstone Project</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-gray-700 mt-4">
                      Developed an Android mobile application in Java and Kotlin that allows speech-to-speech translation between 60 different languages; this will serve as a proof-of-concept for future feature integration with the Vrbo app. Project involves speech-to-text and text-to-speech conversion, natural language processing (NLP), cloud integration and building the mobile application itself.
                    </p>
                  </AccordionContent>
                </div>
              </div>
            </AccordionItem>

            {/* AiChat */}
            <AccordionItem value="item-7" className="border-b-0 mb-4">
              <div className="flex gap-4 items-start bg-white rounded-lg p-4 border border-gray-200">
                <div className="w-12 h-12 rounded overflow-hidden flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/aichat_logo.jpg"
                    alt="AiChat"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <AccordionTrigger className="hover:no-underline py-0">
                    <div className="flex-1 text-left">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">AiChat</h3>
                        <span className="text-sm text-gray-500 mr-4">Jul 2019 - Sep 2019</span>
                      </div>
                      <p className="text-sm text-gray-600">Software Developer Intern — Front-End Development</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-gray-700 mt-4">
                      Designed and implemented features for their web content management system (CMS) using ReactJS
                    </p>
                  </AccordionContent>
                </div>
              </div>
            </AccordionItem>

            {/* Permias Nasional */}
            <AccordionItem value="item-8" className="border-b-0 mb-4">
              <div className="flex gap-4 items-start bg-white rounded-lg p-4 border border-gray-200">
                <div className="w-12 h-12 rounded overflow-hidden flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/permias_logo.jpeg"
                    alt="Permias Nasional"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <AccordionTrigger className="hover:no-underline py-0">
                    <div className="flex-1 text-left">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">PERMIAS Nasional</h3>
                        <span className="text-sm text-gray-500 mr-4">Aug 2017 - Jun 2019</span>
                      </div>
                      <p className="text-sm text-gray-600">Junior Web Developer</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-gray-700 mt-4">
                      Handled the overall development and maintenance of the organization&apos;s website
                      <br />
                      <a href="https://permiasnasional.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://permiasnasional.com/</a>
                    </p>
                  </AccordionContent>
                </div>
              </div>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/seattleu_logo.png"
                  alt="Seattle University"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Seattle University</h3>
                <p className="text-sm text-gray-600">
                  BS Computer Science (Cum Laude)
                </p>
                <p className="text-sm text-gray-500">Sep 2018 - Dec 2020 · Seattle, Washington</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/nsc_logo.svg"
                  alt="North Seattle College"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">North Seattle College</h3>
                <p className="text-sm text-gray-600">AS Computer Science</p>
                <p className="text-sm text-gray-500">Jan 2017 - Aug 2018 · Seattle, Washington</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Python", "Java", "JavaScript", "TypeScript", "HTML/CSS",
              "React", "Redux", "Next.js", "Tailwind", "Node.js",
              "NestJS", "Express", "Flask", "FastAPI", "Spring Boot",
              "PostgreSQL", "MongoDB", "Docker", "Git", "Azure", "AWS", "Agile Scrum"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: "easeOut"
                }}
              >
                <Badge variant="default" className="bg-black text-white hover:bg-black/80">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-2">Check out my latest works</h2>
            <p className="text-gray-600">
              I developed and designed websites, from simple pages to advanced web applications.
            </p>
          </div>

          <Tabs defaultValue="development" className="w-full">
            <TabsList className="w-full justify-center mb-8">
              <TabsTrigger value="development">Development</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
            </TabsList>

            <TabsContent value="development">
              <div className="grid md:grid-cols-2 gap-6">
                Project 1
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-8 flex items-center justify-center h-48">
                    <div className="text-white text-center">
                      <div className="text-6xl mb-2">📝</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">Tooleny</h3>
                    <p className="text-sm text-gray-600 mb-1">2024 - 2025</p>
                    <p className="text-gray-700 mb-4">
                      I developed and created a custom to-do list website that helps organize tasks,
                      set priorities, and boost productivity.
                    </p>
                    <div className="flex gap-2">
                      <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md hover:bg-black/80 text-sm">
                        <Github className="w-4 h-4" />
                        GitHub
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-sm">
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </button>
                    </div>
                  </div>
                </div>

                Project 2
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="bg-orange-50 p-8 flex items-center justify-center h-48">
                    <img
                      src="/omnifood-preview.jpg"
                      alt="Omnifood"
                      className="max-w-full h-auto rounded"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">Omnifood</h3>
                    <p className="text-sm text-gray-600 mb-1">2024</p>
                    <p className="text-gray-700 mb-4">
                      A landing page for Omnifood AI showcases its features, optimizes conversions,
                      and delivers user-friendly information.
                    </p>
                    <div className="flex gap-2">
                      <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md hover:bg-black/80 text-sm">
                        <Github className="w-4 h-4" />
                        GitHub
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-sm">
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="design">
              <div className="text-center text-gray-500 py-12">
                <p>Design projects coming soon...</p>
              </div>
            </TabsContent>
          </Tabs>
        </section> */}

        {/* Contact Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
            <p className="text-gray-600">
              Feel free to reach out for collaborations or just a friendly chat!
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:jocelindarma13@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-black/80 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
            <a
              href="https://linkedin.com/in/jocelindarma"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/jocelindarma"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="tel:+6281110220088"
              className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +62 8111022088
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center text-gray-600 text-sm">
          <p>© 2025 Jocelin Darma</p>
        </div>
      </footer>
    </main>
  );
}
