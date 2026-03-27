import type { JSX } from "react";
import Screen from "../Components/Screen";
import NextButton from "../Components/NextButton";

export default function HomePage():JSX.Element{
    return(
        <Screen>
            <h1> Welcome to my page</h1>
            <p>Enjoy my journey just with clicks</p>
            <NextButton to="/" label="Let's Go" />

        </Screen>
    )
}