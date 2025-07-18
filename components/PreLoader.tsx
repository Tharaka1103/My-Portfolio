'use client'
import { useState, useEffect } from "react";

export function PreLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("Building your environment");
  const [mounted, setMounted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    setMounted(true);
    const texts = [
      "Welcome to my portfolio",
      "Exploring creativity",
      "Loading projects",
      "Almost there"
    ];
    let currentIndex = 0;

    const textInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % texts.length;
      setLoadingText(texts[currentIndex]);
    }, 800);

    const timer = setTimeout(() => {
      setIsClosing(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(textInterval);
    };
  }, []);

  if (!mounted) return null;
  if (!isLoading) return null;

  return (
    <div className={`fixed inset-0 flex flex-col items-center justify-center backdrop-blur-2xl z-50 transition-all duration-1000 ${isClosing ? 'opacity-0 backdrop-blur-none' : 'opacity-100'}`}>
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className="mt-6 text-lg font-medium text-black animate-pulse">
        {loadingText}
      </p>
      <style jsx>{`
        .spinner {
          width: min(70.4px, 15vw);
          height: min(70.4px, 15vw);
          animation: spinner-y0fdc1 2.4s infinite ease;
          transform-style: preserve-3d;
          margin: 0 auto;
        }
        .spinner > div {
          background-color: rgba(255,159,28,0.2);
          height: 100%;
          position: absolute;
          width: 100%;
          border: min(3.5px, 0.8vw) solid #FF9F1C;
          box-shadow: 0 0 15px rgba(255,159,28,0.3);
        }
        .spinner div:nth-of-type(1) {
          transform: translateZ(-35.2px) rotateY(180deg);
        }
        .spinner div:nth-of-type(2) {
          transform: rotateY(-270deg) translateX(50%);
          transform-origin: top right;
        }
        .spinner div:nth-of-type(3) {
          transform: rotateY(270deg) translateX(-50%);
          transform-origin: center left;
        }
        .spinner div:nth-of-type(4) {
          transform: rotateX(90deg) translateY(-50%);
          transform-origin: top center;
        }
        .spinner div:nth-of-type(5) {
          transform: rotateX(-90deg) translateY(50%);
          transform-origin: bottom center;
        }
        .spinner div:nth-of-type(6) {
          transform: translateZ(35.2px);
        }
        @keyframes spinner-y0fdc1 {
          0% {
            transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
          }
          50% {
            transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
          }
          100% {
            transform: rotate(45deg) rotateX(-385deg) rotateY(385deg);
          }
        }
      `}</style>
    </div>
  );
}