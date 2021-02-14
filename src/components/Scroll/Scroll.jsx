import { Children } from "react";


const Scroll = ({children})=>{
    
    return(
        <div style={{overflowY:'scroll',height:'70vh'}}>
            { children }
        </div>
        
    )
}

export default Scroll;