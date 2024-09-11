import React from "react";
import Typewriter from "typewriter-effect"


export default function TypewriterEffect(){

    return(
        <h1 style={{marginTop:'10%',marginLeft:'25%'}}>
            <Typewriter options={{
                strings : ["Hey I am tuhin","A Backend dev from India"],
                autoStart : true,
                loop : true
            }}
            />
        </h1>
    )
}