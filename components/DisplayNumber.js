import React from 'react';

function DisplayNumber({value}) {
    return (
        <div className={" mt-9 p-4 flex flex-col justify-center items-center "}>
            <h1 className={"text-7xl text-black"}>{value}</h1>
        </div>
    );
}

export default DisplayNumber;
