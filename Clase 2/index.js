import React  from "react";
import {createRoot} from 'react-dom/client'
const nodo = document.getElementById("ejemplo")
const root = createRoot(nodo)



function Componente(props){
    const saludar = ()=>{
        alert(`Saludo desde  react! Hola ${props.nombre}`)
    }
    return (
    <div>
        <p>Parrafo desde  react!</p>
        <button onClick={saludar}>REACT-BUTTON</button>
    </div>
)
}



root.render(<div>
<Componente nombre='Francisco'/>
</div>)

