'use client'

import React, {useEffect, useState} from 'react';

import {FieldValues, SubmitHandler, useForm} from "react-hook-form";


import Input from "@/components/Input";
import {Button, IconButton} from "@mui/material";
import DisplayNumber from "@/components/DisplayNumber";
import ColloutCard from "@/components/ColloutCard";


function TextPicker() {

    const [prediction, setPrediction] = useState('')
    const [warning, setWarning] = useState('');
    const [hideMessage, setHideMessage] = useState(false);

    const {register, handleSubmit, formState: {errors}} = useForm()


    useEffect(() => {
        if (prediction === 0) {
            setWarning('notSpam');
        } else if (prediction === 1) {

            setWarning('spam');

        } else {
            setWarning('');
        }
    }, [prediction]);

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

            console.log("data ", prediction)
            setPrediction(data?.predictions)



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
                    {/*<DisplayNumber value={prediction}/>*/}

                    {
                        warning === 'spam' ? <ColloutCard warning message={"Spam "}/> :
                            warning === 'notSpam' ? <ColloutCard message={"Not Spam "}/> :
                                null
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


                <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col pt-8  max-w-md gap-2"}>
                    <Input
                        type="string"
                        register={register}
                        label={"Enter Text"}
                        id={"text"}
                        errors={errors}

                    />

                    <Button onClick={() => setHideMessage(true)} color="warning" variant="contained"
                            className={"w-full bg-gray-700 text-white hover:bg-gray-600"}
                            type="submit">Submit</Button>
                </form>


            </div>


        </div>
    );
}

export default TextPicker;






