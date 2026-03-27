import type { JSX } from "react";
import Screen from "../Components/Screen";
import NextButton from "../Components/NextButton";
import Skills from "./Skills";

export default function HomePage():JSX.Element{
    return(
        <Screen>
            <div className="mt-20 sm:mt-28">
            <h1> Welcome to my page</h1>
            <p>Enjoy my journey just with clicks</p>
            </div>

            

        </Screen>
    )
}