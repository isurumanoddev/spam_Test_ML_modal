

import {Card, Divider, Subtitle, Text} from "@tremor/react";
import TextPicker from "@/components/TextPicker";
import React from "react";
import TypeWriter from "@/components/TypeWriter";

export default function Home() {


    return (
        <main className="h-screen text-gray-600 snap-y snap-mandatory overflow-y-scroll py-12 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A] scrollbar-thin
        bg-[rgb(36,36,36)] flex flex-col justify-center items-center relative
        ">

            <div className={"w-full  absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[350px] -skew-y-12"}/>


            <Card className={"  max-w-lg bg-opacity-90   bg-amber-50  rounded-lg shadow-lg p-8 snap-center"}>
                <Text className={" text-black text-4xl text-center font-bold mb-10 animate-pulse"}>Spam Test</Text>
                <TypeWriter/>
                <Divider className={"my-10 bg-gray-400 "}/>


                <Card decorationColor="indigo" className="rounded-lg ring-gray-200 bg-white/60 shadow  ">
                    <TextPicker/>
                </Card>


            </Card>
            {/*<div>*/}
            {/*    <button onClick={postData}>Send POST Request</button>*/}
            {/*    <pre>{response}</pre>*/}
            {/*</div>*/}

            {/*<button onClick={handleClick} className='bg-white'>click</button>*/}
        </main>
    );
}
