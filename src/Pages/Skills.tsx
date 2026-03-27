import Screen from "../Components/Screen";

import CircleGrid from "../Components/CircleGrid"
import NextButton from "../Components/NextButton";
const skills = [
  "Java",
  "Python",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Bootstrap CSS",
  "Tailwind  CSS",
  "React JS",
  "Node JS",
  "Express JS",
  "Spring",
  "Spring Boot",
  "Spring Security",
  "MySQL",
  "MongoDB",
  "Docker",
  "Postman",
  "Shopify",
  "AWS DynamoDB",
  "TypeScript"
];

 function Skills() {
  return (
    <Screen>
       <div className="flex flex-col items-center justify-center gap-10 py-10">
        
        <CircleGrid skills={skills} />

        <div className="px-8">
          <NextButton to="/" />
        </div>

      </div>
      
    </Screen>
  );
}

export default Skills