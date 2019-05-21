import React from 'react'


const Info =(props)=> {
    return(
        
        <div>
            <p>{props.data.nombre}</p>
            <p>{props.data.Texto}</p>
            <p>{props.data.saludo}</p>


            
        </div>
    )

}
export default Info