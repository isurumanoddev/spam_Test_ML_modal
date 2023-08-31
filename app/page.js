
import Container from "@/components/Container";



async function getData() {

    const response = await fetch(`http://localhost/api/machine`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({text: "Great news, Your package cannot be delivered due to unpaid customs fees, please confirm your payment to avoid delays:https://u.to/xjXZHw"})
    });
    console.log("response ",response)

    if (!response.ok) {
        console.log(`HTTP error! Status: ${response.status}`);
    }

}

export default async function Home() {
      const data = await getData()
         console.log("data ",data)


    return (
        <main className="h-screen text-gray-600 snap-y snap-mandatory overflow-y-scroll py-12 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A] scrollbar-thin
        bg-[rgb(36,36,36)] flex flex-col justify-center items-center relative
        ">

            {/*<Container/>*/}
            {/*<div>*/}
            {/*    <button onClick={postData}>Send POST Request</button>*/}
            {/*    <pre>{response}</pre>*/}
            {/*</div>*/}


        </main>
    );
}
