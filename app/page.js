'use client';
import Container from "@/components/Container";

export default function Home() {

    const handleClick = async() => {
    
        try {
          const response = await fetch('/api/machine', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({text:'asdasdasda'})
          });
          const data = await response.json();
    
          console.log(data)
        } catch (error) {
          console.log(error)
        }
    
        
    
      }
    //   const data = await getData()
    //      console.log("data ",data)


    return (
        <main className="h-screen text-gray-600 snap-y snap-mandatory overflow-y-scroll py-12 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A] scrollbar-thin
        bg-[rgb(36,36,36)] flex flex-col justify-center items-center relative
        ">

            {/*<Container/>*/}
            {/*<div>*/}
            {/*    <button onClick={postData}>Send POST Request</button>*/}
            {/*    <pre>{response}</pre>*/}
            {/*</div>*/}

<button onClick={handleClick} className='bg-white'>click</button>
        </main>
    );
}
