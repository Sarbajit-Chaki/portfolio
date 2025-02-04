import { PropsWithChildren } from "react";

const HeroOrbit = ({
  children,
  size,
  rotation,
  shouldOrbit = false,
  orbitDuration,
  shouldSpin = false,
  spinDuration
}: PropsWithChildren<{
  size: number;
  rotation: number;
  shouldOrbit?: boolean;
  orbitDuration?: string;
  shouldSpin?: boolean;
  spinDuration?: string;
}>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
      <div
        className={`${shouldOrbit ? "animate-spin" : ""}`}
        style={{
          animationDuration: orbitDuration,
        }}
      >
        <div
          className=""
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <div className={`w-fit ${shouldSpin ? "animate-spin" : ""}`} style={{
            animationDuration: spinDuration,
          }}>
            <div
              className="inline-flex"
              style={{
                transform: `rotate(${rotation * -1}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;
