'use client'

import React, {useEffect, useState} from 'react';

import {FieldValues, SubmitHandler, useForm} from "react-hook-form";


import Input from "@/components/Input";
import {Button, IconButton} from "@mui/material";
import DisplayNumber from "@/components/DisplayNumber";
import ColloutCard from "@/components/ColloutCard";


function TextPicker() {

    const [prediction, setPrediction] = useState('')

    const [count, setCount] = useState(0);
    const [warning, setWarning] = useState(false);

    const {register, handleSubmit, formState: {errors}} = useForm()


    useEffect(() => {
        if (prediction === 0) {
            setWarning(true);
        } else {

            setWarning(false)
        }
    }, [prediction, count]);

    console.log("warning ",warning)
    const onSubmit = async (input) => {


        try {
            const response = await fetch('/api/machine', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({text: `${input.number}`})
            });
            const data = await response.json();

            console.log("data ", data)
            setPrediction(data?.predictions)
            setCount(data?.predictions)


            console.log("prediction ", input.number)
        } catch (error) {
            console.log(error)
        }


    }
    console.log("errors ", errors);


    return (
        <div className={"space-y-4"}>

            <div className={"space-y-2 flex flex-col justify-center items-center"}>
                <div className={'flex flex-col justify-center items-center relative w-full pt-4'}>
                    <DisplayNumber value={count}/>

                    {
                        warning ? ( <ColloutCard warning message={"Spam "}/> ) : ( <ColloutCard  message={"Not Spam "}/> )
                    }

                    {/*{*/}
                    {/*    warning ?( <div className={'text-5xl'}>*/}
                    {/*       It is not a Spam*/}
                    {/*     <ColloutCard message={"Spam "}/>*/}
                    {/*    </div> ) : (*/}
                    {/*        <div className={'text-5xl'}>*/}
                    {/*            It is a Spam*/}
                    {/*        </div>*/}
                    {/*    )*/}
                    {/*}*/}


                </div>


                <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col  max-w-md gap-2"}>
                    <Input
                        type="string"
                        register={register}
                        label={"Enter Text"}
                        id={"text"}
                        errors={errors}

                    />

                    <Button color="warning" variant="contained"
                            className={"w-full bg-gray-700 text-white hover:bg-gray-600"}
                            type="submit">Submit</Button>
                </form>


            </div>


        </div>
    );
}

export default TextPicker;






