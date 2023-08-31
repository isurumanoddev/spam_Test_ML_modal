'use client';
// import {FieldErrors, FieldValues, UseFormRegister} from "react-hook-form";
import React from 'react';



function Input({id, label, type, errors, register}) {
    return (
        <div className={"w-full relative pb-7"}>
            <input id={id}

                   {...register("number")}
                   placeholder={" "}
                   type={type}
                   className={`   peer w-full text-3xl text-gray-900 p-4 pt-10 font-semibold bg-white border-2 rounded-md outline-none transition ${errors[id] ? 'border-rose-500' : 'border-neutral-300'} ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}`}

            />
            {/*{*/}
            {/*    errors &&  <label className={"text-3xl"}>{errors[id]}</label>*/}
            {/*}*/}

            {errors.number && <p className={'text-rose-500 font-semibold text-[10px] md:text-sm  absolute bottom-0'}>Enter number between 0 - 10</p>}
            <label
                className={`
          absolute 
          text-sm
          duration-150 
          transform 
          -translate-y-3 
          top-5 
          z-10 
          origin-[0] 
           left-4
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75
          peer-focus:-translate-y-4
          peer-focus:text-black
          
          ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}
        `}
            >
                {label}
            </label>

        </div>
    );

}

export default Input;