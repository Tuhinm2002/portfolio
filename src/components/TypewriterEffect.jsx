import React from "react";
import Typewriter from "typewriter-effect"


export default function TypewriterEffect(){

    return(
        <h1 style={{marginTop:'10%',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Typewriter options={{
                strings : ["Hey I am tuhin","A Backend dev from India"],
                autoStart : true,
                loop : true
            }}
            />
        </h1>
    )
}