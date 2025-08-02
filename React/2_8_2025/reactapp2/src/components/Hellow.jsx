// function  Hello(){
//         return(
//             <div>
//                 <h1>Hello this is the Hello </h1>
//             </div>
            
//         );
// }

// export default Hello;


// The above code is one more way of writing default export
export default function  Hello(){
        return(
            <div>
                <h1>Hello this is the Hello </h1>
            </div>
            
        );
}


//THis is the named export we can have n number of named exports for a file but only one default export for a file
export function World(){
    return(
        <>
        <div>
            <h1>Hello this is the World!</h1>
        </div>
        </>
    );
}

export const Greeting= ()=>{
    return(
        <>
        <div>
            <h1>This is praveen kumar kuruba</h1>
        </div>
        </>
    );
}