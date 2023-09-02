'use client'
import React from 'react';
import {useTypewriter} from "react-simple-typewriter";
import {Subtitle} from "@tremor/react";

function TypeWriter() {
        const [text, count] = useTypewriter({
        words: ["Next js ,React js ,Tailwind CSS,Material UI ,Tremor 2.0 + More"],
        loop: true,
        delaySpeed: 1000,
        typeSpeed: 40,

    });
    return (

        <div className={"relative"}>
            <Subtitle className={"text-lg pb-1 text-center text-gray-800"}>Powered by </Subtitle>
            <Subtitle className={"absolute font-semibold text-sm text-center text-gray-800"}>{text}</Subtitle>
        </div>


    );
}

export default TypeWriter;