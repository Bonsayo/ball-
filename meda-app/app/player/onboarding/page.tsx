"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function OnboardingPage() {
  const router = useRouter();
  const { toggleLang } = useLanguage();
  const [showSplash, setShowSplash] = useState(true);
  const [splashFading, setSplashFading] = useState(false);
  const [onboardingVisible, setOnboardingVisible] = useState(false);

  useEffect(() => {
    // After 2s, start fading out the splash
    const fadeTimer = setTimeout(() => {
      setSplashFading(true);
    }, 2000);

    // After 2.8s (2s delay + 0.8s animation), hide splash and show onboarding
    const hideTimer = setTimeout(() => {
      setShowSplash(false);
      setOnboardingVisible(true);
    }, 2800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="bg-background text-on-background h-screen w-full overflow-hidden relative font-body-lg">
      {/* Splash Screen */}
      {showSplash && (
        <div
          className={`absolute inset-0 z-50 bg-primary-container flex flex-col items-center justify-center transition-opacity duration-[800ms] ${
            splashFading ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="flex-grow flex items-center justify-center">
            <div className="text-on-primary-container text-center">
              <h1 className="text-display-lg font-display-lg text-[48px] leading-[56px] font-black tracking-tight">
                Meda
              </h1>
              <p className="text-body-lg font-body-lg mt-2 opacity-80">
                ⚽ Book • Play • Win
              </p>
            </div>
          </div>
          {/* Heritage Accent at bottom of splash */}
          <div className="w-full flex h-1 absolute bottom-0 left-0">
            <div className="flex-1 bg-red-600"></div>
            <div className="flex-1 bg-yellow-400"></div>
            <div className="flex-1 bg-primary-container"></div>
          </div>
        </div>
      )}

      {/* Onboarding Screen */}
      <div
        className={`h-full w-full flex flex-col bg-[#FAFAF7] absolute inset-0 z-40 transition-opacity duration-[800ms] ${
          onboardingVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Top Controls - Language toggle */}
        <div className="w-full flex justify-end p-container-margin absolute top-0 right-0 z-10">
          <button
            onClick={toggleLang}
            className="bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant rounded-full px-4 py-2 flex items-center gap-2 shadow-sm font-label-lg text-label-lg text-on-surface"
          >
            <span className="font-ethiopic-label text-ethiopic-label">አማ</span>
            <span className="text-outline-variant">|</span>
            <span>EN</span>
          </button>
        </div>

        {/* Hero Image Canvas */}
        <div className="w-full h-[55%] relative flex-shrink-0 bg-surface-variant">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC2VJbF5zFf58SBSL6pWtJbrtS6GuoH1_8NsMTL-m96TiA5aYfRyRmhRH8HTx2FDcMnVl9zjtcOApWpKPJRUrMDGzLy39KeDSYfaNMpau8waU-698t9cIJnZZu5sGEltsZLW2RQZfYPdi6jiXB1g6QGi4SXOwnMem3a33ZHMv01DV-77yzwbUHkRx_PGa0idsKjNHh3ALDLtuC830Q6GlnmM_3edr0SjKiEOJ0d9cV3oZV9goMQ16Y80JQ7Ph5UvByubPisowrc0ME')",
            }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAF7] via-[#FAFAF7]/20 to-transparent"></div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col justify-end px-container-margin pb-xl pt-lg relative z-10 bg-[#FAFAF7]">
          <div className="mb-8">
            <h1 className="font-ethiopic-body text-[28px] leading-[36px] font-bold text-on-surface mb-2">
              ሜዳዎን አሁን ይዘው ይጫወቱ
            </h1>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Book your field and play now
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Addis Ababa&apos;s fastest football booking app. Find, book, and play in 3 taps.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-gutter w-full pb-safe">
            <button
              onClick={() => router.push("/player/home")}
              className="w-full h-[52px] bg-primary text-on-primary rounded-[12px] font-label-lg text-label-lg flex items-center justify-center gap-2 active:bg-[#005320] transition-colors"
            >
              <span className="font-ethiopic-label text-ethiopic-label">ሜዳ ፈልግ</span>
              <span className="opacity-70">|</span>
              <span>Find a field</span>
            </button>
            <button
              onClick={() => router.push("/login")}
              className="w-full h-[52px] bg-transparent border border-primary text-primary rounded-[12px] font-label-lg text-label-lg flex items-center justify-center gap-2 active:bg-surface-container-highest transition-colors"
            >
              <span className="font-ethiopic-label text-ethiopic-label">ግባ</span>
              <span className="opacity-70">|</span>
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
