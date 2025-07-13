
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, useSpring, MotionValue } from "framer-motion";
import {
  Code,
  Palette,
  Server,
  Smartphone,
  ArrowDown,
  Mail,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Calendar,
  Award,
  Users,
  Zap,
  Shield,
  Rocket,
  Database,
  Cloud,
  GitBranch,
  Terminal,
  Layers,
  Box,
  Briefcase,
  Clock,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Building2
} from "lucide-react";
import Image from 'next/image'
// Tech Logo SVGs
const techLogos = {
  react: (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path fill="currentColor" d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
    </svg>
  ),
  nodejs: (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path fill="currentColor" d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path fill="currentColor" d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
    </svg>
  ),
  tailwind: (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path fill="currentColor" d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8 c0.913,0.228,1.565,0.89,2.288,1.624c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8 c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C10.337,13.382,8.976,12,6.001,12z" />
    </svg>
  ),
  mongodb: (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path fill="currentColor" d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
    </svg>
  ),
  aws: (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path fill="currentColor" d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.587-.894-.587-1.53 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.311-.08-.063-.056-.12-.16-.16-.311l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.312-.065.048-.16.08-.312.08zm10.047 2.861c-1.142 0-2.023-.269-2.643-.813-.61-.543-.917-1.293-.917-2.235 0-.982.34-1.732 1.03-2.26.69-.527 1.613-.79 2.778-.79.39 0 .75.032 1.085.096.335.064.623.136.862.223v5.213c0 .774-.183 1.342-.55 1.707-.375.366-.957.551-1.756.551a5.38 5.38 0 0 1-1.046-.096 6.688 6.688 0 0 1-.91-.256c-.263-.104-.47-.168-.607-.208a.918.918 0 0 1-.263-.063c-.112-.04-.168-.128-.168-.272v-.415c0-.176.072-.264.216-.264.08 0 .192.024.335.08.144.055.343.128.607.207.263.08.543.152.838.224.295.072.59.104.878.104.502 0 .87-.095 1.093-.287.224-.191.336-.503.336-.942v-.678a3.374 3.374 0 0 1-.878.534 2.831 2.831 0 0 1-1.022.184zm1.094-1.694c.215 0 .43-.04.654-.112.224-.08.415-.208.567-.39v-2.306a2.497 2.497 0 0 0-.479-.12 3.089 3.089 0 0 0-.607-.056c-.535 0-.966.144-1.285.431-.319.288-.479.726-.479 1.326 0 .526.127.934.383 1.213.248.279.622.414 1.117.414zm-11.071 1.55c-.127 0-.2-.065-.2-.2V5.263c0-.128.072-.192.2-.192h.734c.128 0 .2.064.2.192v7.283c0 .135-.072.2-.2.2zm8.447 8.398c-.838 0-1.501-.086-1.988-.263a2.593 2.593 0 0 1-1.125-.75 1.798 1.798 0 0 1-.351-1.14c0-.176.072-.264.216-.264h.783c.16 0 .248.08.288.176.096.216.232.383.407.503.176.12.455.184.838.184.391 0 .702-.072.934-.208a.64.64 0 0 0 .343-.598c0-.216-.088-.375-.263-.487-.176-.112-.463-.216-.862-.32l-1.23-.31c-.622-.152-1.077-.423-1.365-.806-.279-.383-.423-.83-.423-1.342 0-.415.112-.782.327-1.101.216-.32.527-.567.926-.75.399-.183.878-.271 1.437-.271.383 0 .75.031 1.093.095.343.063.655.159.925.287.271.127.495.263.663.415.167.152.287.311.351.479.064.168.096.335.096.503 0 .16-.064.247-.192.247h-.814c-.135 0-.232-.08-.28-.183a1.012 1.012 0 0 0-.367-.415 1.543 1.543 0 0 0-.783-.176c-.335 0-.607.064-.806.192a.603.603 0 0 0-.303.519c0 .128.024.24.08.336.056.095.152.183.287.263.136.08.335.16.599.24l1.21.295c.614.152 1.053.399 1.317.75.263.352.398.774.398 1.278 0 .423-.111.798-.327 1.126a2.216 2.216 0 0 1-.934.782c-.399.191-.862.288-1.397.288z" />
    </svg>
  )
};

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax background elements
  const useParallax = (value: MotionValue<number>, distance: number) => {
    return useTransform(value, [0, 1], [-distance, distance]);
  };

  return (
    <div ref={containerRef} className="relative bg-[#CBF3F0] overflow-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2EC4B6] to-[#FF9F1C] z-50 origin-left"
        style={{ scaleX: smoothProgress }}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section with Fixed Scroll */}
      <ProjectsSliderSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Achievements Section */}
      <AchievementsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}


// Enhanced Hero Section
function HeroSection() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -500]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.8]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden" id="home">
      {/* Multiple Parallax Background Elements */}
      <motion.div className="absolute inset-0" style={{ y: y1 }}>
        <div className="absolute top-[5%] md:top-20 left-[5%] md:left-10 w-48 md:w-72 h-48 md:h-72 bg-[#2EC4B6] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      </motion.div>

      <motion.div className="absolute inset-0" style={{ y: y3 }}>
        <div className="absolute bottom-[5%] md:bottom-20 right-[5%] md:right-10 w-56 md:w-80 h-56 md:h-80 bg-[#2EC4B6] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </motion.div>

      {/* Geometric shapes and icons */}
      <motion.div
        className="absolute top-1/4 right-[5%] md:right-1/4 w-16 sm:w-20 md:w-32 h-16 sm:h-20 md:h-32 bg-[#2EC4B6] opacity-20 rotate-45"
        style={{ y: y1 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute bottom-1/4 left-[5%] md:left-1/4 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 bg-[#2EC4B6] opacity-20"
        style={{ y: y2 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute top-20 left-[15%] md:left-[25%] h-8 sm:h-12 md:h-16 opacity-30"
        style={{ y: y3 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 48 48">
          <rect width="36" height="36" x="6" y="6" fill="#1976d2"></rect><polygon fill="#fff" points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"></polygon><path fill="#fff" d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"></path>
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-[15%] md:right-[25%] w-10 sm:w-14 md:w-20 h-10 sm:h-14 md:h-20 opacity-30"
        style={{ y: y1 }}
        animate={{ scale: [1, 0.8, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 48 48">
          <path fill="#f7df1e" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z"></path>
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/2 w-8 sm:w-10 md:w-14 h-8 sm:h-10 md:h-14 opacity-30"
        style={{ y: y2 }}
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 48 48">
          <path fill="#29b6f6" d="M44,11.11v25.78c0,1.27-0.79,2.4-1.98,2.82l-8.82,4.14L34,33V15L33.2,4.15l8.82,4.14 C43.21,8.71,44,9.84,44,11.11z"></path><path fill="#0277bd" d="M9,33.896L34,15V5.353c0-1.198-1.482-1.758-2.275-0.86L4.658,29.239 c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574C7.304,34.37,8.271,34.43,9,33.896z"></path><path fill="#0288d1" d="M9,14.104L34,33v9.647c0,1.198-1.482,1.758-2.275,0.86L4.658,18.761 c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"></path>
        </svg>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 md:px-8"
        style={{ opacity, scale }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-4xl mx-auto"
        >
          <motion.div
            className="mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span className="inline-block px-4 py-2 bg-[#2EC4B6] bg-opacity-20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-gray-800">
              Welcome to my portfolio
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-gray-900 mb-4">
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Hola,
            </motion.span>{" "}
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >

              I'm <span className="text-accent text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tanHeading">Tharaka</span>
            </motion.span>
          </h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 mb-6 sm:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Full Stack Software Engineer
          </motion.p>

          <motion.p
            className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Crafting exceptional digital experiences with modern technologies
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              className="w-fit px-6 sm:px-8 py-2.5 sm:py-3 bg-accent border-2 border-accent text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.button>
            <motion.button
              className="w-fit px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-6 sm:bottom-10 cursor-pointer hover:opacity-80 transition-opacity"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <ArrowDown size={4} className="text-gray-700 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// Enhanced About Section
function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const x1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section ref={ref} className="relative py-16 overflow-hidden" id="about">
      {/* Multiple Animated Background Shapes */}
      <motion.div
        className="absolute -right-96 top-0 w-[800px] h-[800px] bg-[#2EC4B6] rounded-full opacity-30"
        style={{ x: x1 }}
      />

      <motion.div
        className="absolute -left-96 bottom-0 w-[600px] h-[600px] bg-[#FF9F1C] rounded-full opacity-30"
        style={{ x: x2 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          style={{ scale }}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.span
              className="inline-block px-4 py-2 bg-[#2EC4B6] bg-opacity-20 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get to know me
            </motion.span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#2EC4B6] to-[#FF9F1C] rounded-3xl"
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-[#2EC4B6] to-[#FF9F1C] rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
                <img
                  src="/new.jpg"
                  alt="Profile"
                  className="relative z-10 rounded-3xl w-full transform group-hover:scale-[1.02] transition-transform duration-300"
                />


              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  As a final-year SLIIT undergraduate, I'm passionate about crafting modern web applications using the MERN stack and Next.js. I specialize in building user-friendly interfaces and robust backend systems, while staying curious about emerging technologies. From AI integration to performance optimization, I'm constantly exploring new ways to grow and deliver impactful solutions.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  My vision? <span className="text-sm tanHeading uppercase">To be a critical resource</span> to projects that they'll need a search party if I take a coffee break! 🚀 I'm aiming to be that developer who's like the secret sauce in a burger - you might not see me, but boy, you'll notice when I'm not there! Just kidding (sort of), but seriously, I'm working hard to become an indispensable resource in the tech world, one bug fix at a time.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <motion.div
                  className="text-center p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <motion.h3
                    className="text-3xl font-bold bg-accent bg-clip-text text-transparent"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    50+
                  </motion.h3>
                  <p className="text-gray-600 mt-2">Projects Completed</p>
                </motion.div>

                <motion.div
                  className="text-center p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <motion.h3
                    className="text-3xl font-bold bg-accent bg-clip-text text-transparent"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    30+
                  </motion.h3>
                  <p className="text-gray-600 mt-2">Happy Clients</p>
                </motion.div>
              </div>

              <motion.button
                className="mt-6 px-6 py-3 bg-accent text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume <ExternalLink size={20} />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Completely Redesigned Skills Section with Modern Design & Advanced Animations
function SkillsSection() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Advanced scroll-based transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const backgroundRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const floatingY1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const floatingY2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const floatingY3 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const scaleProgress = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.95]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = (containerRef.current as HTMLElement).getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    const container = containerRef.current as HTMLElement | null;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Enhanced skills data with categories and detailed info
  const skillCategories = [
    {
      category: "Frontend",
      color: "#61DAFB",
      gradient: "from-blue-400 to-cyan-400",
      skills: [
        {
          name: "React/Next.js",
          level: 95,
          logo: techLogos.react,
          color: "#61DAFB",
          description: "Building dynamic UIs with hooks, context, and performance optimization",
          projects: 25,
          yearsExp: 3
        },
        {
          name: "TypeScript",
          level: 88,
          logo: techLogos.typescript,
          color: "#3178C6",
          description: "Type-safe development with advanced generics and utility types",
          projects: 20,
          yearsExp: 2
        },
        {
          name: "Tailwind CSS",
          level: 92,
          logo: techLogos.tailwind,
          color: "#06B6D4",
          description: "Utility-first CSS with custom components and responsive design",
          projects: 30,
          yearsExp: 2
        }
      ]
    },
    {
      category: "Backend",
      color: "#339933",
      gradient: "from-green-400 to-emerald-400",
      skills: [
        {
          name: "Node.js",
          level: 90,
          logo: techLogos.nodejs,
          color: "#339933",
          description: "Server-side JavaScript with Express, FastAPI, and microservices",
          projects: 18,
          yearsExp: 3
        },
        {
          name: "MongoDB",
          level: 85,
          logo: techLogos.mongodb,
          color: "#47A248",
          description: "NoSQL database design with aggregation pipelines and indexing",
          projects: 15,
          yearsExp: 2
        }
      ]
    }
  ];

  // Additional tech stack
  const additionalTechs = [
    { name: "JavaScript", level: 95, color: "#F7DF1E" },
    { name: "Python", level: 85, color: "#3776AB" },
    { name: "PostgreSQL", level: 88, color: "#336791" },
    { name: "GraphQL", level: 75, color: "#E10098" },
    { name: "Git", level: 90, color: "#F05032" },
    { name: "Figma", level: 78, color: "#F24E1E" },
    { name: "REST APIs", level: 92, color: "#25D366" }
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen py-16 sm:py-16 md:py-16 lg:py-16 overflow-hidden bg-[#CBF3F0] bg-opacity-20"
      id="skills"
    >
      {/* Advanced Background Elements */}


      <div ref={containerRef} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header with Scroll Animations */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
          style={{ scale: scaleProgress, opacity: opacityProgress }}
        >
          <motion.div
            className="inline-block px-4 py-2 bg-[#2EC4B6] bg-opacity-20 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800"
            initial={{ scale: 0, rotate: -10 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
          >
            <span className="text-sm md:text-base font-medium text-gray-700">
              Technical Expertise
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="">
              Skills &
            </span>
            <br />
            <span className="">
              Technologies
            </span>
          </motion.h2>

          <motion.div
            className="flex justify-center items-center gap-4 mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: "auto" } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="h-1 w-16 bg-accent rounded-full" />
            <div className="w-3 h-3 bg-accent rounded-full" />
            <div className="h-1 w-16 bg-accent rounded-full" />
          </motion.div>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Transforming ideas into reality with cutting-edge technologies and modern development practices
          </motion.p>
        </motion.div>

        {/* Enhanced Skills Categories */}
        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 + categoryIndex * 0.3 }}
              className="relative"
            >
              {/* Category Header */}
              <motion.div
                className="text-center mb-8 sm:mb-12"
                whileHover={{ scale: 1.02 }}
              >
                <motion.h3
                  className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-accent"

                >
                  {category.category}
                </motion.h3>
                <div
                  className="w-20 h-1 mx-auto rounded-full bg-accent"
                />
              </motion.div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: 1.4 + categoryIndex * 0.3 + skillIndex * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="group relative"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {/* Skill Card */}
                    <motion.div
                      className="relative h-full bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 
                                 shadow-xl border border-white/20 overflow-hidden"
                      whileHover={{
                        y: -10,
                        scale: 1.02,
                        boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Animated Background Gradient */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(135deg, ${skill.color}40, ${skill.color}20)`
                        }}
                      />

                      {/* Skill Icon and Level */}
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6">
                          <motion.div
                            className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center p-3"
                            style={{ backgroundColor: `${skill.color}15` }}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.8 }}
                          >
                            <div style={{ color: skill.color }} className="w-full h-full">
                              {skill.logo}
                            </div>
                          </motion.div>

                          {/* Floating Stats */}
                          <motion.div
                            className="text-right sm:text-left md:text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4 mr-4 sm:mt-6"
                            initial={{ x: 20 }}
                            whileHover={{ x: 0 }}
                          >
                            <div className="text-xs sm:text-sm text-gray-500 mb-1">Projects</div>
                            <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">{skill.projects}</div>
                          </motion.div>
                        </div>

                        {/* Skill Info */}
                        <div className="mb-6">
                          <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                            {skill.name}
                          </h4>
                          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                            {skill.description}
                          </p>
                          <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {skill.yearsExp} years
                            </span>
                            <span className="flex items-center gap-1">
                              <Award className="w-4 h-4" />
                              Expert
                            </span>
                          </div>
                        </div>
                        {/* Interactive Hover Elements */}
                        <motion.div
                          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1.2 }}
                        >
                          <div className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                            <ExternalLink className="w-4 h-4 text-gray-600" />
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Additional Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="mt-20 sm:mt-24 md:mt-32"
        >
          <div className="text-center mb-12 sm:mb-16">
            <motion.h3
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Additional Technologies
            </motion.h3>
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 2.7 }}
            >
              A diverse toolkit of technologies I work with regularly
            </motion.p>
          </div>

          {/* Floating Tech Tags */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-5xl mx-auto">
            {additionalTechs.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0, rotate: Math.random() * 360 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 2.8 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                className="group relative"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <motion.div
                  className="px-4 sm:px-6 py-3 sm:py-4 bg-white/90 backdrop-blur-sm rounded-2xl 
                             shadow-lg border border-white/20 cursor-pointer overflow-hidden"
                  whileHover={{
                    boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                    borderColor: tech.color + "50"
                  }}
                >
                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{ backgroundColor: tech.color }}
                  />

                  <div className="relative z-10 flex items-center gap-3">
                    <motion.div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: tech.color }}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    />
                    <span className="text-sm sm:text-base font-medium text-gray-800 group-hover:text-gray-900 transition-colors">
                      {tech.name}
                    </span>
                    <motion.div
                      className="text-xs font-bold px-2 py-1 rounded-full text-white"
                      style={{ backgroundColor: tech.color }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 3 + index * 0.1 }}
                    >
                      {tech.level}%
                    </motion.div>
                  </div>

                  {/* Hover Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interactive Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 3.2 }}
          className="mt-20 sm:mt-24 md:mt-32"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {[
              { label: "Technologies", value: "15+", icon: <Code className="w-6 h-6" />, color: "#3B82F6" },
              { label: "Projects", value: "50+", icon: <Rocket className="w-6 h-6" />, color: "#10B981" },
              { label: "Experience", value: "3+", icon: <Calendar className="w-6 h-6" />, color: "#F59E0B" },
              { label: "Certifications", value: "5+", icon: <Award className="w-6 h-6" />, color: "#EF4444" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 3.4 + index * 0.1 }}
                className="group relative"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-white/20 text-center">
                  <motion.div
                    className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: stat.color + "15" }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div style={{ color: stat.color }}>
                      {stat.icon}
                    </div>
                  </motion.div>
                  <motion.div
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2"
                    style={{ color: stat.color }}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 3.6 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 4 }}
          className="text-center mt-20 sm:mt-24 md:mt-32"
        >
          <motion.div
            className="bg-primary rounded-3xl p-8 sm:p-12 shadow-2xl max-w-4xl mx-auto"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-lg sm:text-xl text-white mb-8 max-w-2xl mx-auto">
              Let's collaborate and bring your ideas to life with cutting-edge technologies and innovative solutions.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 4.2 }}
            >
              <motion.button
                className="px-8 py-4 bg-white text-primary rounded-full font-semibold text-lg 
                           shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start a Project
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Interactive Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated Code Snippets */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-6 h-6 sm:w-8 sm:h-8 opacity-10"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(i) * 10, 0],
              rotate: [0, 360, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg">
              <div className="w-full h-full flex items-center justify-center">
                {[<Code />, <Terminal />, <Database />, <Cloud />, <GitBranch />, <Layers />][i]}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </section>
  );
}

// Modern Animated Projects Slider Section
function ProjectsSliderSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [titleComplete, setTitleComplete] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Advanced scroll-based transforms for background
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const backgroundRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  // Enhanced projects data
  const projects = [
    {
      id: 1,
      title: "TRIMIDS",
      description: "Full-stack web development agency portfolio and client management platform. Features secure authentication, project showcase, admin dashboard. Built with modern tech stack and enterprise-level security.",
      image: "/projects/trimids.png",
      technologies: ["Next.js", "TypeScript", "JWT", "AES-256", "shadcn/ui", "Tailwind CSS", "Magic UI", "Node.js", "MongoDB"],
      category: "Full Stack",
      color: "#3B82F6",
      gradient: "from-blue-600 to-indigo-600",
      githubUrl: "https://github.com/Tharaka1103/trimids",
      liveUrl: "https://trimids.com",
      featured: true,
      year: "2024",
      duration: "2 Months",
      status: "Live"
    },
    {
      id: 2,
      title: "Rupa's Surf Camp - Arugambay",
      description: "Secure hotel booking platform with live surf cam integration for Arugambay beach. Features real-time room availability, secure payment processing, and encrypted user authentication. Enhanced with modern UI components and robust security measures.",
      image: "/projects/rupas.png",
      technologies: ["Next.js", "Tailwind CSS", "shadcn/ui", "Magic UI", "JWT", "AES-256", "bcrypt", "SSL/TLS"],
      category: "Full Stack",
      color: "#6366F1",
      gradient: "from-blue-500 to-cyan-600",
      githubUrl: "https://github.com/Tharaka1103/Hotel-Website",
      liveUrl: "https://rupas.surf.trimids.com",
      featured: true,
      year: "2025",
      duration: "1 Months",
      status: "Live"
    },
    {
      id: 3,
      title: "Luminex Engineering",
      description: "Modern solar company website with dynamic content management, integrated Google Drive storage for documents, sleek UI components using shadcn, and responsive design. Features customer portal, solar calculator, and appointment scheduling system.",
      image: "/projects/luminex.png",
      technologies: ["Next.js", "Google Drive API", "shadcn/ui", "Tailwind CSS", "Node.js", "MongoDB", "TypeScript", "GraphQL"],
      category: "Full Stack",
      color: "#10B981",
      gradient: "from-emerald-500 to-teal-600",
      githubUrl: "https://github.com/Tharaka1103/Smart-Solar",
      liveUrl: "https://luminex.trimids.com/",
      featured: true,
      year: "2025",
      duration: "3 Months",
      status: "Live"
    },
    {
      id: 4,
      title: "E-commerce website",
      description: "Advanced e-commerce platform with admin dashboard for product management and automated QR code generation. Features include product catalog, inventory tracking, and mobile-friendly QR code scanning for instant product details access.",
      image: "/projects/eweb.png",
      technologies: ["NextJs", "Node.js", "MongoDB", "QR Code API"],
      category: "E-commerce",
      color: "#F59E0B",
      gradient: "from-amber-500 to-orange-600",
      githubUrl: "https://github.com/Tharaka1103/E-Commerce-website-with-QR-Generator-",
      liveUrl: "https://eshop.trimids.com/",
      featured: true,
      year: "2023",
      duration: "3 Days",
      status: "Live"
    }
  ];

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, projects.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
      } else if (e.key === 'ArrowRight') {
        setCurrentSlide((prev) => (prev + 1) % projects.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [projects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-muted overflow-hidden py-10"
      id="projects"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-11/12">
        {/* Header with Typing Animation */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 
                       rounded-fullws"
            initial={{ scale: 0, rotate: -10 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              className="inline-block px-4 py-2 bg-[#2EC4B6] bg-opacity-20 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Recent projects
            </motion.span>
          </motion.div>

          {/* Typing Animation for Title */}
          <div className="mb-6">
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="">
                <TypewriterEffect
                  text="Featured Projects"
                  speed={100}
                  onComplete={() => setTitleComplete(true)}
                  className="inline-block"
                />
              </span>
            </motion.h2>
          </div>

          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Explore my latest work showcasing modern web technologies, innovative solutions, and creative problem-solving approaches.
          </motion.p>

          {/* Project Counter */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView && titleComplete ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="flex items-center gap-2">
              <motion.div
                className="text-3xl md:text-4xl font-bold bg-accent bg-clip-text text-transparent"
                key={currentSlide}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {String(currentSlide + 1).padStart(2, '0')}
              </motion.div>
              <div className="text-2xl text-gray-400">/</div>
              <div className="text-2xl text-gray-600">
                {String(projects.length).padStart(2, '0')}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <motion.button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Main Slider */}
        <div className="relative max-w-7xl mx-auto">
          {/* Slider Container */}
          <div className="relative overflow-hidden rounded-3xl">
            <motion.div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={project.id} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    className="grid lg:grid-cols-2 gap-8 items-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {/* Project Image */}
                    <motion.div
                      className="relative group order-2 lg:order-1"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative overflow-hidden rounded-3xl">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full aspect-auto shadow-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Overlay with Actions */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                          <div className="flex gap-4">
                            <motion.a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full font-semibold text-gray-800 shadow-lg hover:shadow-xl transition-all"
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <ExternalLink size={18} />
                              <span>Live Demo</span>
                            </motion.a>
                            <motion.a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-6 py-3 bg-gray-900/90 backdrop-blur-sm rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                              whileHover={{ scale: 1.05, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Github size={18} />
                              <span>Source</span>
                            </motion.a>
                          </div>
                        </div>

                        {/* Status Badge */}
                        <div className="absolute top-4 right-4 z-30">
                          <motion.div
                            className={`px-3 py-1 rounded-full text-xs font-bold ${project.status === 'Live'
                              ? 'bg-green-500 text-white'
                              : project.status === 'Beta'
                                ? 'bg-red-500 text-white'
                                : 'bg-gray-500 text-white'
                              }`}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5 }}
                          >
                            {project.status}
                          </motion.div>
                        </div>

                        {/* Featured Badge */}
                        {project.featured && (
                          <div className="absolute top-4 left-4 z-30">
                            <motion.div
                              className="bg-accent text-white px-3 py-1 rounded-full text-xs font-bold"
                              initial={{ scale: 0, rotate: -10 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ delay: 0.3 }}
                            >
                              ⭐ Featured
                            </motion.div>
                          </div>
                        )}
                      </div>


                    </motion.div>

                    {/* Project Content */}
                    <motion.div
                      className="space-y-6 order-1 lg:order-2"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {/* Category and Year */}
                      <div className="flex items-center gap-4 flex-wrap">
                        <motion.div
                          className="px-4 py-2 rounded-full font-medium text-sm"
                          style={{
                            backgroundColor: `${project.color}20`,
                            color: project.color
                          }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {project.category}
                        </motion.div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{project.year}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={16} />
                            <span>{project.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Title */}
                      <motion.h3
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        {project.title}
                      </motion.h3>

                      {/* Description */}
                      <motion.p
                        className="text-lg md:text-xl text-gray-600 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        {project.description}
                      </motion.p>

                      {/* Technologies */}
                      <motion.div
                        className="space-y-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      >
                        <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-200 hover:border-gray-300 transition-all"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: 0.6 + techIndex * 0.05 }}
                              whileHover={{ scale: 1.05, y: -2 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>

                      {/* Action Buttons */}
                      <motion.div
                        className="flex items-center gap-4 pt-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                      >
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-8 py-4 bg-accent text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink size={20} />
                          <span>View Live</span>
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-8 py-4 bg-gray-800 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:border-gray-400 transition-all"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={20} />
                          <span>Source Code</span>
                        </motion.a>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-12">
            {/* Previous Button */}
            <motion.button
              onClick={prevSlide}
              className="group flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Previous</span>
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-3">
              {projects.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${index === currentSlide
                    ? 'bg-accent scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              onClick={nextSlide}
              className="group flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-medium">Next</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.p
            className="text-gray-600 mb-10 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Interested in working together? Let's discuss your next project and bring your ideas to life.
          </motion.p>

          <motion.button
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Projects</span>
            <ExternalLink size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

// TypewriterEffect Component
interface TypewriterEffectProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
  className?: string;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  text,
  speed = 100,
  onComplete,
  className = ""
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        className="inline-block w-0.5 h-[1em] bg-current ml-1"
        animate={{ opacity: showCursor ? 1 : 0 }}
        transition={{ duration: 0 }}
      />
    </span>
  );
};

// Modern Experience Section with Fresh Design
function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCard, setActiveCard] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const experiences = [
    {
      id: 1,
      period: "2024 November - 2025 May",
      title: "Intern Software Engineer",
      company: "SKYREK Pvt Ltd",
      location: "Kaluthara, Sri Lanka",
      type: "Internship",
      description: "Learning and contributing to software development projects while gaining hands-on experience in modern web technologies.",
      achievements: [
        "Led a team of 5 developers in building scalable applications",
        "Improved application performance by 40% through optimization",
        "Learned and implemented Next.js, Prisma, and PostgreSQL in real projects",
        "Gained hands-on experience working with real-world software development projects"
      ],
      skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "Prisma", "JWT"],
      color: "from-blue-500 to-cyan-500",
      icon: "/skyrek.webp",
      image: "/skyrek.webp"
    },
    {
      id: 2,
      period: "2021 - 2024",
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      location: "New York, NY",
      type: "Full-time",
      description: "Built scalable web applications serving millions of users worldwide with focus on performance and user experience.",
      achievements: [
        "Developed microservices architecture handling 1M+ requests daily",
        "Reduced server costs by 30% through efficient resource management",
        "Built real-time features using WebSocket and Redis",
        "Collaborated with cross-functional teams of 15+ members"
      ],
      skills: ["Vue.js", "Python", "PostgreSQL", "Redis", "MongoDB", "GraphQL"],
      color: "from-emerald-500 to-teal-500",
      icon: "🚀",
      image: "/skyrek.webp"
    }
  ];

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-32 bg-muted overflow-hidden"
      id="experience"
    >

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center mb-8"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
          >
            <motion.span
              className="inline-block px-4 py-2 bg-[#2EC4B6] bg-opacity-20 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Career journey
            </motion.span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="">
              My Professional
            </span>
            <br />
            <span className="">
              Experience
            </span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            A journey through innovation, growth, and impactful contributions across diverse tech environments.
          </motion.p>
        </motion.div>

        {/* Experience Cards */}
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:gap-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 80 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                onViewportEnter={() => setActiveCard(index)}
                className="group relative"
              >
                {/* Card Container */}
                <div className={`relative grid md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? 'md:grid-cols-2' : 'md:grid-cols-2'
                  }`}>
                  {/* Content Side */}
                  <motion.div
                    className={`order-2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <Image src={exp.image} alt={exp.company} width={64} height={64} className="rounded-2xl" />
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-sm font-medium text-gray-500">{exp.period}</span>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium text-white bg-accent`}>
                                {exp.type}
                              </span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                          </div>
                        </div>
                      </div>

                      {/* Company Info */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className={`text-lg font-semibold bg-primary bg-clip-text text-transparent`}>
                            {exp.company}
                          </h4>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-600">{exp.location}</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                      </div>

                      {/* Key Achievements */}
                      <div className="mb-6">
                        <h5 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                          Key Achievements
                        </h5>
                        <div className="space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <motion.div
                              key={i}
                              className="flex items-start gap-3 group/item"
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                            >
                              <motion.div
                                className={`w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0`}
                                whileHover={{ scale: 1.5 }}
                              />
                              <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">
                                {achievement}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Skills */}
                      <div>
                        <h5 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                          Technologies
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <motion.span
                              key={skill}
                              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors cursor-default"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ duration: 0.3, delay: 1 + i * 0.05 }}
                              whileHover={{ scale: 1.05, y: -2 }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Visual Side */}
                  <motion.div
                    className={`order-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  >
                    <div className="relative">
                      {/* Main Visual Container */}
                      <motion.div
                        className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 overflow-hidden"
                        whileHover={{ scale: 1.05, rotateY: 5 }}
                        transition={{ duration: 0.4 }}
                      >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div
                            className="w-full h-full"
                            style={{
                              backgroundImage: `radial-gradient(circle at 20% 30%, ${exp.color.includes('blue') ? '#3B82F6' : exp.color.includes('emerald') ? '#10B981' : exp.color.includes('purple') ? '#8B5CF6' : '#F59E0B'} 0%, transparent 50%)`
                            }}
                          />
                        </div>

                        {/* Company Logo Placeholder */}
                        <div className="text-center mb-6">
                          <motion.div
                            className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Image src={exp.image} alt={exp.company} width={64} height={64} className="rounded-2xl" />

                          </motion.div>
                        </div>

                        {/* Stats */}
                        <div className="space-y-4">
                          <motion.div
                            className="flex items-center justify-between p-4 bg-white/50 rounded-xl"
                            whileHover={{ scale: 1.02 }}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${exp.color}`} />
                              <span className="text-sm font-medium text-gray-700">Duration</span>
                            </div>
                            <span className="text-sm font-bold text-gray-900">{exp.period}</span>
                          </motion.div>

                          <motion.div
                            className="flex items-center justify-between p-4 bg-white/50 rounded-xl"
                            whileHover={{ scale: 1.02 }}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${exp.color}`} />
                              <span className="text-sm font-medium text-gray-700">Achievements</span>
                            </div>
                            <span className="text-sm font-bold text-gray-900">{exp.achievements.length}</span>
                          </motion.div>

                          <motion.div
                            className="flex items-center justify-between p-4 bg-white/50 rounded-xl"
                            whileHover={{ scale: 1.02 }}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${exp.color}`} />
                              <span className="text-sm font-medium text-gray-700">Technologies</span>
                            </div>
                            <span className="text-sm font-bold text-gray-900">{exp.skills.length}</span>
                          </motion.div>
                        </div>

                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Connection Line for Desktop */}
                {index < experiences.length && (
                  <motion.div
                    className="hidden md:block absolute left-1/2 bottom-0 w-0.5 h-8 bg-accent h-full transform -translate-x-1/2 translate-y-full"
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.8 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: "Years Experience", value: "3+", icon: "🚀" },
              { label: "Projects Completed", value: "60+", icon: "💼" },
              { label: "Technologies Mastered", value: "15+", icon: "⚡" },
              { label: "Happy Clients", value: "40+", icon: "🎯" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <motion.div
                  className="text-3xl font-bold bg-accent bg-clip-text text-transparent mb-1"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mt-16"
        >
          <motion.button
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Download My Resume</span>
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              📄
            </motion.div>
          </motion.button>

          <motion.p
            className="text-gray-600 mt-4 text-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            Want to know more about my journey? Let's connect!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// Modern Services Section with Liquid Glass Design
function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const floatingY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Enhanced services data
  const services = [
    {
      id: 1,
      title: "Web Development",
      shortDescription: "Modern, responsive websites built with cutting-edge technologies",
      icon: "🌐",
      gradient: "from-blue-500 via-purple-500 to-cyan-500",
      glowColor: "rgba(59, 130, 246, 0.5)",
      features: ["React/Next.js", "TypeScript", "Responsive Design", "Performance Optimization"],
      fullDescription: "I create stunning, high-performance websites that deliver exceptional user experiences. From static landing pages to complex web applications, I use the latest technologies and best practices to ensure your website stands out in today's digital landscape.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
      pricing: "Starting from $1,500",
      deliveryTime: "2-4 weeks",
      portfolio: [
        "E-commerce Platform with 50K+ users",
        "SaaS Dashboard with real-time analytics",
        "Portfolio websites for creative professionals",
        "Corporate websites with CMS integration"
      ],
      process: [
        "Discovery & Planning",
        "Design & Prototyping",
        "Development & Testing",
        "Launch & Optimization"
      ]
    },
    {
      id: 2,
      title: "Backend Development",
      shortDescription: "Scalable server-side solutions and robust APIs",
      icon: "⚙️",
      gradient: "from-emerald-500 via-teal-500 to-green-500",
      glowColor: "rgba(16, 185, 129, 0.5)",
      features: ["Node.js", "Database Design", "API Development", "Cloud Integration"],
      fullDescription: "I build powerful backend systems that handle millions of requests efficiently. From RESTful APIs to microservices architecture, I ensure your application's backbone is solid, secure, and scalable.",
      technologies: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Prisma"],
      pricing: "Starting from $2,000",
      deliveryTime: "3-6 weeks",
      portfolio: [
        "Microservices handling 1M+ daily requests",
        "Real-time chat systems with WebSocket",
        "Payment processing integrations",
        "Data analytics pipelines"
      ],
      process: [
        "Requirements Analysis",
        "Architecture Design",
        "Implementation & Testing",
        "Deployment & Monitoring"
      ]
    },
    {
      id: 3,
      title: "API Integration",
      shortDescription: "Seamless third-party integrations and custom API solutions",
      icon: "🔗",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      glowColor: "rgba(251, 146, 60, 0.5)",
      features: ["REST APIs", "GraphQL", "Webhooks", "Authentication"],
      fullDescription: "I specialize in connecting your applications with external services, creating custom APIs, and building robust integration solutions that enhance your product's functionality and user experience.",
      technologies: ["REST", "GraphQL", "OAuth", "JWT", "Stripe", "PayPal", "Twilio", "SendGrid"],
      pricing: "Starting from $800",
      deliveryTime: "1-3 weeks",
      portfolio: [
        "Payment gateway integrations",
        "Social media API connections",
        "CRM system integrations",
        "Custom webhook implementations"
      ],
      process: [
        "API Documentation Review",
        "Integration Planning",
        "Development & Testing",
        "Monitoring & Maintenance"
      ]
    },
    {
      id: 4,
      title: "Graphic Design",
      shortDescription: "Eye-catching visuals and brand identity solutions",
      icon: "🎨",
      gradient: "from-purple-500 via-pink-500 to-indigo-500",
      glowColor: "rgba(147, 51, 234, 0.5)",
      features: ["Brand Identity", "Digital Graphics", "Print Design", "Illustrations"],
      fullDescription: "I create compelling visual designs that tell your brand's story and captivate your audience. From logos to marketing materials, I ensure every design element aligns with your brand vision and goals.",
      technologies: ["Adobe Illustrator", "Photoshop", "Figma", "Canva", "Sketch", "InDesign"],
      pricing: "Starting from $500",
      deliveryTime: "1-2 weeks",
      portfolio: [
        "Brand identities for 20+ startups",
        "Social media graphics with high engagement",
        "Print materials for corporate events",
        "Custom illustrations for web applications"
      ],
      process: [
        "Brand Research & Strategy",
        "Concept Development",
        "Design Creation",
        "Refinement & Delivery"
      ]
    },
    {
      id: 5,
      title: "UI/UX Design",
      shortDescription: "User-centered design that drives engagement and conversions",
      icon: "📱",
      gradient: "from-cyan-500 via-blue-500 to-purple-500",
      glowColor: "rgba(6, 182, 212, 0.5)",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      fullDescription: "I design intuitive and engaging user experiences that convert visitors into customers. Through user research, wireframing, and prototyping, I create designs that are both beautiful and functional.",
      technologies: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision", "Miro", "Hotjar"],
      pricing: "Starting from $1,200",
      deliveryTime: "2-4 weeks",
      portfolio: [
        "Mobile app with 4.8+ star rating",
        "SaaS platform increasing user retention by 40%",
        "E-commerce site boosting conversions by 60%",
        "Design systems for enterprise applications"
      ],
      process: [
        "User Research & Analysis",
        "Wireframing & Information Architecture",
        "Visual Design & Prototyping",
        "Testing & Iteration"
      ]
    },
    {
      id: 6,
      title: "Document Writing",
      shortDescription: "Technical documentation and content creation services",
      icon: "📝",
      gradient: "from-yellow-500 via-orange-500 to-red-500",
      glowColor: "rgba(245, 158, 11, 0.5)",
      features: ["Technical Docs", "API Documentation", "User Guides", "Content Strategy"],
      fullDescription: "I create clear, comprehensive documentation that helps users understand and use your products effectively. From API documentation to user manuals, I ensure your content is accessible and actionable.",
      technologies: ["Notion", "GitBook", "Markdown", "Confluence", "Google Docs", "Swagger"],
      pricing: "Starting from $400",
      deliveryTime: "1-2 weeks",
      portfolio: [
        "API documentation for 10+ products",
        "User manuals with 95% satisfaction rating",
        "Technical specifications for development teams",
        "Content strategy for SaaS platforms"
      ],
      process: [
        "Content Audit & Planning",
        "Research & Information Gathering",
        "Writing & Structuring",
        "Review & Optimization"
      ]
    }
  ];

  // Mouse tracking for glass effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        const rect = (ref.current as HTMLElement).getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    const section = ref.current as HTMLElement | null;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const openServiceDialog = (service: any) => {
    setSelectedService(service);
    setIsDialogOpen(true);
  };

  const closeServiceDialog = () => {
    setIsDialogOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  return (
    <>
      <section
        ref={ref}
        className="relative min-h-screen bg-muted overflow-hidden py-16"
        id="services"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-block px-4 py-2 bg-[#2EC4B6] bg-opacity-20 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800 mb-5"
              initial={{ scale: 0, rotate: -10 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            >
              <span >Services I Provide</span>
            </motion.div>

            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="">
                What I Can Do
              </span>
              <br />
              <span className="text-accent">
                For You
              </span>
            </motion.h2>

            <motion.p
              className="text-xl max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Transforming ideas into exceptional digital experiences through comprehensive services tailored to your unique needs.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <motion.div
                  className="relative h-full p-8 rounded-3xl overflow-hidden cursor-pointer bg-primary"

                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openServiceDialog(service)}
                >

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-black mb-6 leading-relaxed">
                      {service.shortDescription}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.1 + i * 0.1 }}
                        >
                          <span className="text-sm text-gray-700 group-hover:text-gray-100 transition-colors">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Learn More Button */}
                    <motion.button
                      className="w-full py-3 px-6 rounded-xl font-semibold text-white relative overflow-hidden group/btn bg-accent"

                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        openServiceDialog(service);
                      }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Learn More
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.div>
                      </span>
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Dialog */}
      <ServiceDialog
        isOpen={isDialogOpen}
        onClose={closeServiceDialog}
        service={selectedService}
      />
    </>
  );
}

interface Achievement {
  id: string
  title: string
  issuer: string
  date: string
  description: string
  credlyBadgeId: string
  credentialUrl?: string
  skills: string[]
}

const achievements: Achievement[] = [
  {
    id: '1',
    title: 'JavaScript Essentials 1',
    issuer: 'Cisco Network Academy',
    date: '2025',
    description: 'Comprehensive understanding of networking fundamentals including network protocols, routing, switching, and network security.',
    credlyBadgeId: '0ac23ac1-76d5-4e46-8db8-30cc52f866f2',
    credentialUrl: 'https://www.credly.com/badges/0ac23ac1-76d5-4e46-8db8-30cc52f866f2',
    skills: ['Network Protocols', 'Routing', 'Switching', 'Network Security']
  },
  {
    id: '2',
    title: 'Introduction to Modern AI',
    issuer: 'Cisco Network Academy',
    date: '2025',
    description: 'Foundational understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.',
    credlyBadgeId: '91b6d3cb-b7d7-40e9-9241-d83de66faf06',
    credentialUrl: 'https://www.credly.com/badges/91b6d3cb-b7d7-40e9-9241-d83de66faf06',
    skills: ['Cloud Computing', 'AWS Services', 'Cloud Security', 'Cloud Architecture']
  },
  {
    id: '3',
    title: 'Introduction to Data Science',
    issuer: 'Cisco Network Academy',
    date: '2025',
    description: 'Demonstrated knowledge of cloud concepts, Azure services, Azure workloads, security and privacy in Azure, and Azure pricing and support.',
    credlyBadgeId: 'e3b00b2f-217a-4b53-b5ba-60aff1d5fbe2',
    credentialUrl: 'https://www.credly.com/badges/e3b00b2f-217a-4b53-b5ba-60aff1d5fbe2',
    skills: ['Azure Cloud', 'Cloud Services', 'Cloud Security', 'Azure Architecture']
  },
  // Add more achievements here as needed
]

function AchievementsSection() {
  useEffect(() => {
    // Load Credly embed script
    const script = document.createElement('script')
    script.src = '//cdn.credly.com/assets/utilities/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="//cdn.credly.com/assets/utilities/embed.js"]')
      if (existingScript) {
        document.body.removeChild(existingScript)
      }
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-10 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
            <motion.div
              className="inline-block px-4 py-2 bg-[#2EC4B6] bg-opacity-20 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800 mb-5"
            >
              <span >My Achievements</span>
            </motion.div>
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-accent bg-clip-text text-transparent">
              Achievements & Certifications
            </h2>
          </div>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Professional certifications and achievements that demonstrate my commitment to continuous learning and expertise in technology.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 "
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-black mb-2 transition-colors">
                    {achievement.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-2">
                    <Building2 className="h-4 w-4" />
                    <span>{achievement.issuer}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <Calendar className="h-4 w-4" />
                    <span>{achievement.date}</span>
                  </div>
                </div>
                {achievement.credentialUrl && (
                  <a
                    href={achievement.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-accent transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>

              {/* Credly Badge */}
              <div className="flex justify-center">
                <div className="relative">
                  <div
                    data-iframe-width="250"
                    data-iframe-height="270"
                    data-share-badge-id={achievement.credlyBadgeId}
                    data-share-badge-host="https://www.credly.com"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Service Dialog Component
interface ServiceDialogProps {
  isOpen: boolean;
  onClose: () => void;
  service: any;
}
const ServiceDialog: React.FC<ServiceDialogProps> = ({ isOpen, onClose, service }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!service) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📋' },
    { id: 'process', label: 'Process', icon: '🔄' },
    { id: 'portfolio', label: 'Portfolio', icon: '💼' },
    { id: 'pricing', label: 'Pricing', icon: '💰' }
  ];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        onClick={onClose}
      />

      {/* Dialog */}
      <motion.div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl sm:rounded-3xl"
        style={{
          background: `linear-gradient(135deg, 
              rgba(255, 255, 255, 0.1) 0%, 
              rgba(255, 255, 255, 0.05) 100%)`,
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: isOpen ? 1 : 0.8,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, type: "spring" }}
      >
        {/* Header */}
        <div className="p-4 sm:p-6 md:p-8 pb-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-xl sm:text-2xl shadow-2xl`}>
                {service.icon}
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">{service.title}</h2>
                <p className="text-sm sm:text-base text-gray-300">{service.shortDescription}</p>
              </div>
            </div>
            <motion.button
              onClick={onClose}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </motion.button>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 sm:px-4 py-2 rounded-xl font-medium transition-all text-sm sm:text-base ${activeTab === tab.id
                    ? 'bg-white/20 text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-300'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  {tab.icon}
                  {tab.label}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 md:p-8 pt-0 overflow-y-auto max-h-[60vh] scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Description</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{service.fullDescription}</p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech: string, i: number) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm text-gray-300"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'process' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-6">My Process</h3>
              {service.process.map((step: string, i: number) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-4 p-3 sm:p-4 bg-white/5 rounded-xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white font-bold text-xs sm:text-sm`}>
                    {i + 1}
                  </div>
                  <span className="text-sm sm:text-base text-gray-300 font-medium">{step}</span>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'portfolio' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-6">Recent Projects</h3>
              {service.portfolio.map((project: string, i: number) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4 p-3 sm:p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r ${service.gradient} mt-1.5 flex-shrink-0`} />
                  <span className="text-sm sm:text-base text-gray-300">{project}</span>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'pricing' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="p-4 sm:p-6 bg-white/5 rounded-xl">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Investment</h3>
                  <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.pricing}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400 mt-2">Custom quotes available</p>
                </div>

                <div className="p-4 sm:p-6 bg-white/5 rounded-xl">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Timeline</h3>
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    {service.deliveryTime}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400 mt-2">Depending on complexity</p>
                </div>
              </div>

              <div className="p-4 sm:p-6 bg-white/5 rounded-xl">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">What's Included</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Initial consultation & strategy",
                    "Custom design & development",
                    "Quality assurance & testing",
                    "Launch support & deployment",
                    "30-day post-launch support",
                    "Source code & documentation"
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full" />
                      <span className="text-xs sm:text-sm text-gray-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 md:p-8 pt-0">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="text-center sm:text-left">
              <p className="text-xs sm:text-sm text-gray-400">
                Interested in this service? Let's discuss your project.
              </p>
            </div>
            <div className="flex gap-3">
              <motion.button
                onClick={onClose}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm rounded-xl text-white text-sm sm:text-base font-medium hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>
              <motion.button
                className={`px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r ${service.gradient} rounded-xl text-white text-sm sm:text-base font-medium shadow-lg hover:shadow-xl transition-all`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.location.href = '#contact';
                  onClose();
                }}
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </div>

        {/* Floating particles in dialog */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 sm:w-1 h-0.5 sm:h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};


// Enhanced Contact Section
function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="py-32 bg-[#CBF3F0] relative overflow-hidden" id="contact">

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-2 bg-[#FF9F1C] bg-opacity-20 rounded-full text-sm font-medium text-[#FF9F1C] mb-4"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get in touch
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together.
          </p>
        </motion.div>

        <motion.div
          style={{ scale }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2EC4B6] focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2EC4B6] focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2EC4B6] focus:outline-none transition-colors"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2EC4B6] focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-2 bg-accent text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
                <p className="text-gray-700 mb-8">
                  I'm always excited to work on new projects and collaborate with amazing people.
                  Feel free to reach out if you have any questions or just want to say hello!
                </p>
              </div>

              <div className="space-y-6">
                <motion.div
                  className="flex items-center gap-4 p-4 bg-primary rounded-2xl"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">supuntharakapro999@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 p-4 bg-primary rounded-2xl"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white">
                    <Smartphone size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+94 (71) 431-0048</p>
                  </div>
                </motion.div>
              </div>

              <div className="pt-8">
                <h4 className="font-semibold text-gray-900 mb-4">Connect With Me</h4>
                <div className="flex flex-wrap gap-4">
                  {[
                    {
                      icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                        <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                      </svg>,
                      name: "GitHub",
                      href: "https://github.com/tharaka1103"
                    },
                    {
                      icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                        <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                      </svg>,
                      name: "LinkedIn",
                      href: "https://www.linkedin.com/in/tharaka-dharmasiri-3ba950204/"
                    },
                    {
                      icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                        <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                      </svg>,
                      name: "Facebook",
                      href: "https://facebook.com/supun.tharaka.9277"
                    },
                    {
                      icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                        <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fillRule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clipRule="evenodd"></path>
                      </svg>,
                      name: "WhatsApp",
                      href: "https://wa.me/+94714310048"
                    },
                    {
                      icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                        <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
                      </svg>,
                      name: "Gmail",
                      href: "mailto:supuntharakapro999@gmail.com"
                    },
                    {
                      icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                        <path fill="#03a9f4" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"></path><path fill="#03a9f4" d="M33.5 22A11.5 11.5 0 1 0 33.5 45 11.5 11.5 0 1 0 33.5 22zM14.5 3A11.5 11.5 0 1 0 14.5 26 11.5 11.5 0 1 0 14.5 3z"></path><path fill="#fff" d="M24.602,36C18,36,15,32.699,15,30.199C15,28.898,15.898,28,17.199,28c2.801,0,2.102,4.102,7.402,4.102c2.699,0,4.199-1.5,4.199-3c0-0.902-0.402-1.902-2.199-2.402l-5.902-1.5C16,24,15.102,21.398,15.102,18.898c0-5.098,4.699-6.898,9.098-6.898C28.301,12,33,14.199,33,17.199c0,1.301-1,2.102-2.301,2.102c-2.398,0-2-3.402-6.801-3.402c-2.398,0-3.797,1.102-3.797,2.703c0,1.598,1.898,2.098,3.598,2.5l4.402,1C32.898,23.199,34,26,34,28.699C33.898,32.898,30.898,36,24.602,36z"></path>
                      </svg>,
                      name: "Skype",
                      href: "skype:yourusername?chat"
                    }
                  ].map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-gray-700 transition-all duration-300"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}