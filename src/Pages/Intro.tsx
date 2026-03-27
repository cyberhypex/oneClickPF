import NextButton from "../Components/NextButton";
import Screen from "../Components/Screen";

export default function Intro(){
    return(

        <Screen >

       
        
                <h1 className="text-2xl font-semibold">
            Aspiring Full Stack Developer
        </h1>

        <p className="mt-4 text-gray-400">
            Backend-focused, building scalable and secure applications 
            using Java and Spring Boot.
        </p>

        <p className="mt-4 text-gray-400">
            Experienced in REST APIs, authentication with Spring Security,
            and containerized environments using Docker.
        </p>

        <p className="mt-4 text-gray-400">
            Also building end-to-end applications using Java Full Stack with React & 
             <span> MERN stack</span>
        </p>
        <NextButton to="/" label="Let's dive deep" />
             </Screen>
    )
}

