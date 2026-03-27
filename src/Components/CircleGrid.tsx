import type { JSX } from "react"

type Props={
    skills:string[]
}

export default function CircleGrid({ skills }:Props) {
   const radius = 240;

  return (
    <div className="relative w-[500px] h-[500px] mx-auto flex items-center justify-center">
      {skills.map((skill, index) => {
        const angle = (index / skills.length) * (2 * Math.PI);

        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        return (
          <div
            key={index}
            className="absolute w-20 h-20 flex items-center justify-center rounded-full border border-white text-white text-xs text-wrap  text-center px-1"
            style={{
              left: "50%",
              top: "50%",
              transform: `translate(-20%, -20%) translate(${x}px, ${y}px)`
            }}
          >
            {skill}
          </div>
        );
      })}
    </div>
  );
}