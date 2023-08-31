"use client"

import {Callout} from "@tremor/react";
import {CheckCircleIcon, ExclamationCircleIcon} from "@heroicons/react/20/solid";

function ColloutCard({message, warning}) {

    return (
        <Callout className={`absolute top-0 hidden sm:flex`} title={message}
                 icon={warning ? ExclamationCircleIcon : CheckCircleIcon}

                 color={warning ? "rose" : "teal"}
        >


        </Callout>


    );
}

export default ColloutCard;