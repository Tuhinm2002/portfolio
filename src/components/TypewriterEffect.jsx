import {Box} from "@mui/material";
// import Typography from "@mui/material/Typography";
import * as React from 'react';
import Typewriter from "typewriter-effect"


export default function TypewriterEffect(){

    return(
        <Box sx={{marginTop:{xs:'20%',md:'10%'},height:{xs:100,sm:100}, marginLeft:{xs:'5%',md:'none'},
        display:'flex',alignItems:'center',justifyContent:'center'}}>
        <h1>
            <Typewriter options={{
                strings : ["Hey I am tuhin","A Backend dev from India"],
                autoStart : true,
                loop : true
            }}
            />
        </h1>
        </Box>
    )
}