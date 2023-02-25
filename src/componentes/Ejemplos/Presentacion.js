// Para ver como incluir propiedades

// // Nivel1

// export const Presentacion = (props) => {
    
//     console.log(props)

//     return (
//         <article>
//             <h2>Nombre: {props.nombre}</h2>
//             <p>Rol: {props.rol}</p>
//             <p>Edad: {props.edad}</p>
//         </article>
//     )
// }


// // Nivel2

// export const Presentacion = (props) => {
    
//     const { nombre, rol, edad} = props

//     return (
//         <article>
//             <h2>Nombre: {nombre}</h2>
//             <p>Rol: {rol}</p>
//             <p>Edad: {edad}</p>
//         </article>
//     )
// }


// // Nivel 3

export const Presentacion = ({ nombre, rol, edad}) => {

    return (
        <article>
            <h2>Nombre: {nombre}</h2>
            <p>Rol: {rol}</p>
            <p>Edad: {edad}</p>
        </article>
    )
}



// componentes de presentacion
// son los que se limitana a la parte visual
// estos son reutilizables



// componentes de tipo contenedor
// se encargan de encapsular un y muestra lo necesario




// children
// 

