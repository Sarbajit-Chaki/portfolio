import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import HeroOrbit from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import ConnectBtn from "@/components/ConnectBtn";
import ExploreBtn from "@/components/ExploreBtn";

export const HeroSection = () => {
  return (
    <section id="hero" className="py-32 md:py-36 lg:py-52 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] -z-10">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        {/* <div className="size-[1420px] hero-ring"></div> */}
        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="6s">
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="4s">
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={80} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={175} shouldOrbit orbitDuration="34s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={145} shouldOrbit orbitDuration="42s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-15 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={-30} shouldOrbit orbitDuration="44s">
          <div className="size-4 rounded-full bg-emerald-300/30"></div>
        </HeroOrbit>
        <HeroOrbit size={720} rotation={-30} shouldOrbit orbitDuration="46s">
          <div className="size-4 rounded-full bg-emerald-300/30"></div>
        </HeroOrbit>
        <HeroOrbit size={600} rotation={130} shouldOrbit orbitDuration="40s">
          <div className="size-3 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit size={820} rotation={100} shouldOrbit orbitDuration="50s">
          <div className="size-3 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
      </div>
      <div className="container z-10">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking from behind a computer"
          />
          <div className="bg-gray-950 border-gray-800 px-4 py-1.5 inline-flex items-center gap-x-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="absolute inset-0 rounded-full bg-green-500 animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Empowering Ideas Through Code
          </h1>
          <p className="mt-4 text-center text-white/60">
            I’m a web developer with a strong focus on building efficient,
            scalable systems that power seamless user experiences. Let’s bring
            ideas to life with code that’s powerful inside and out!
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 ">
          <ExploreBtn />
          <ConnectBtn />
        </div>
      </div>
    </section>
  );
};
