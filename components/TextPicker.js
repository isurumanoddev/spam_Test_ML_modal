'use client'

import React, {useState} from 'react';

import {FieldValues, SubmitHandler, useForm} from "react-hook-form";


import {Add, LocationCity, PlusOne, Public, Remove} from "@mui/icons-material";
import Input from "@/components/Input";
import {Button, IconButton} from "@mui/material";
import DisplayNumber from "@/components/DisplayNumber";
import ColloutCard from "@/components/ColloutCard";


function TextPicker() {

    const [count, setCount] = useState(0);
    const [warning, setWarning] = useState(false);

    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = (data) => {
        console.log("Number ", data.number);
        setCount(data.number)

        if (data.number === 0) {
            setWarning(false);
        } else {
            setWarning(true)
        }

    }
    console.log("errors ", errors);



    return (
        <div className={"space-y-4"}>

            <div className={"space-y-2 flex flex-col justify-center items-center"}>
                <div className={'flex flex-col justify-center items-center relative w-full pt-4'}>
                    <DisplayNumber value={count}/>
                    {/*{*/}
                    {/*    warning &&*/}
                    {/*    <ColloutCard message={"Enter number between 0 - 10 "} warning/>*/}
                    {/*}*/}
                </div>



                <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col  max-w-sm gap-2"}>
                    <Input
                        type="string"
                        register={register}
                        label={"Enter Text"}
                        id={"number"}
                        errors={errors}

                    />

                    <Button  color="warning"  variant="contained" className={"w-full bg-gray-700 text-white hover:bg-gray-600"}
                            type="submit">Submit</Button>
                </form>


            </div>


        </div>
    );
}

export default TextPicker;






