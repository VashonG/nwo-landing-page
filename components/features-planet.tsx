import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";
import { GlobeDemo } from "./globe-demo";

export default function FeaturesPlanet() {
  return (
    <section className="relative before:absolute before:inset-0 before:bg-gray-900 before:-z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-16 md:pb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-200">
              Our operations have expanded globally
            </h2>
          </div>
          {/* Planet */}
          <div className="pb-12 md:pb-16" data-aos="zoom-y-out">
            <div className="text-center">
              
               
                <div>
                  <GlobeDemo />
                  <Image
                    className="absolute z-10 top-16 -right-27 opacity-80 transition-opacity duration-500 animate-[float_4s_ease-in-out_infinite_both]"
                    src={PlanetTagImg01}
                    width={253}
                    height={56}
                    alt="Tag 01"
                  />
                  <Image
                    className="absolute z-10 top-14 left-36 opacity-30 transition-opacity duration-500 animate-[float_4s_ease-in-out_infinite_1s_both]"
                    src={PlanetTagImg02}
                    width={241}
                    height={56}
                    alt="Tag 02"
                  />
                  <Image
                    className="absolute z-10 bottom-24 -right-10 opacity-25 transition-opacity duration-500 animate-[float_4s_ease-in-out_infinite_2s_both]"
                    src={PlanetTagImg03}
                    width={243}
                    height={56}
                    alt="Tag 03"
                  />
                  <Image
                    className="absolute z-10 bottom-32 left-4 opacity-80 transition-opacity duration-500 animate-[float_4s_ease-in-out_infinite_3s_both]"
                    src={PlanetTagImg04}
                    width={251}
                    height={56}
                    alt="Tag 04"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 overflow-hidden [&>*]:p-6 md:[&>*]:p-10 [&>*]:relative [&>*]:before:absolute [&>*]:before:bg-gray-800 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-inline-start:-1px] [&>*]:before:[inset-block-start:0] [&>*]:after:absolute [&>*]:after:bg-gray-800 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-inline-start:0] [&>*]:after:[inset-block-start:-1px]">
            <article>
              <h3 className="font-medium text-gray-200 flex items-center space-x-2 mb-2">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                >
                  <path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm1 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z" />
                </svg>
                <span>Well-Crafted Plans</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                We specialize in developing robust plans that align with your financial sector goals. From market analysis to execution, we ensure your strategies lead to measurable outcomes.
              </p>
            </article>
            <article>
              <h3 className="font-medium text-gray-200 flex items-center space-x-2 mb-2">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                >
                  <path d="M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z" />
                </svg>
                <span>Organizational Design</span>
              </h3>
              <p className="text-[15px] text-gray-400">
              Our consultants analyze your organizational structure to enhance efficiency and 
              agility in the insurance, banking, and lending industry. 
              </p>
            </article>
            <article>
              <h3 className="font-medium text-gray-200 flex items-center space-x-2 mb-2">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2.248 6.285a1 1 0 0 1-1.916-.57A8.014 8.014 0 0 1 5.715.332a1 1 0 0 1 .57 1.916 6.014 6.014 0 0 0-4.037 4.037Z"
                    opacity=".3"
                  />
                  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1.715-6.752a1 1 0 0 1 .57-1.916 8.014 8.014 0 0 1 5.383 5.383 1 1 0 1 1-1.916.57 6.014 6.014 0 0 0-4.037-4.037Zm4.037 7.467a1 1 0 1 1 1.916.57 8.014 8.014 0 0 1-5.383 5.383 1 1 0 1 1-.57-1.916 6.014 6.014 0 0 0 4.037-4.037Zm-7.467 4.037a1 1 0 1 1-.57 1.916 8.014 8.014 0 0 1-5.383-5.383 1 1 0 1 1 1.916-.57 6.014 6.014 0 0 0 4.037 4.037Z"
                  />
                </svg>
                <span>Detailed Market Research</span>
              </h3>
              <p className="text-[15px] text-gray-400">
              Our comprehensive market research and competitive analysis deliver valuable 
              insights in the financial industry. Stay ahead with data-driven strategies 
              for expansion and market leadership.
              </p>
            </article>
            <article>
              <h3 className="font-medium text-gray-200 flex items-center space-x-2 mb-2">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1Zm6 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1a1 1 0 1 1 0 2h-1a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h1a1 1 0 1 1 0 2h-1ZM1 1a1 1 0 0 0 0 2h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 1 0 0 2h1a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H1Z" />
                </svg>
                <span>KPI Development</span>
              </h3>
              <p className="text-[15px] text-gray-400">
               We develop tailored KPI frameworks and performance management systems. 
               Gain actionable insights to drive growth, enhance profitability, and 
               maintain competitive advantage.
              </p>
            </article>
            <article>
              <h3 className="font-medium text-gray-200 flex items-center space-x-2 mb-2">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                >
                  <path d="M10.284.33a1 1 0 1 0-.574 1.917 6.049 6.049 0 0 1 2.417 1.395A1 1 0 0 0 13.5 2.188 8.034 8.034 0 0 0 10.284.33ZM6.288 2.248A1 1 0 0 0 5.718.33 8.036 8.036 0 0 0 2.5 2.187a1 1 0 0 0 1.372 1.455 6.036 6.036 0 0 1 2.415-1.395ZM1.42 5.401a1 1 0 0 1 .742 1.204 6.025 6.025 0 0 0 0 2.79 1 1 0 0 1-1.946.462 8.026 8.026 0 0 1 0-3.714A1 1 0 0 1 1.421 5.4Zm2.452 6.957A1 1 0 0 0 2.5 13.812a8.036 8.036 0 0 0 3.216 1.857 1 1 0 0 0 .574-1.916 6.044 6.044 0 0 1-2.417-1.395Zm9.668.04a1 1 0 0 1-.041 1.414 8.033 8.033 0 0 1-3.217 1.857 1 1 0 1 1-.571-1.917 6.035 6.035 0 0 0 2.415-1.395 1 1 0 0 1 1.414.042Zm2.242-6.255a1 1 0 1 0-1.946.462 6.03 6.03 0 0 1 0 2.79 1 1 0 1 0 1.946.462 8.022 8.022 0 0 0 0-3.714Z" />
                </svg>
                <span>Regulatory Compliance</span>
              </h3>
              <p className="text-[15px] text-gray-400">
              From conducting thorough audits to implementing robust compliance frameworks, we ensure 
              your operations meet regulatory standards while optimizing efficiency and mitigating risk.
              </p>
            </article>
            <article>
              <h3 className="font-medium text-gray-200 flex items-center space-x-2 mb-2">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                >
                  <path d="M9 1a1 1 0 1 0-2 0v6a1 1 0 0 0 2 0V1ZM4.572 3.08a1 1 0 0 0-1.144-1.64A7.987 7.987 0 0 0 0 8a8 8 0 0 0 16 0c0-2.72-1.36-5.117-3.428-6.56a1 1 0 1 0-1.144 1.64A5.987 5.987 0 0 1 14 8 6 6 0 1 1 2 8a5.987 5.987 0 0 1 2.572-4.92Z" />
                </svg>
                <span>Operational Improvement</span>
              </h3>
              <p className="text-[15px] text-gray-400">
              We identify opportunities to streamline operations and reduce costs. 
              Our solutions enhance financial controls and optimize resource allocation 
              to boost your bottom line.
              </p>
            </article>
          </div>
        </div>
    </section>
  );
}
