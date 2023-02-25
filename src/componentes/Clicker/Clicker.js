import './Clicker.css'
import { useEffect, useState } from 'react'
import { Bomba } from './Bomba'


export const Clicker = () => {

    const [counter, setCounter] = useState(1)
    const [show, setShow] = useState(true)

    const handleSumar = () => {
        setCounter(counter + 1)
    }

    const handleRestar = () => {
        if (counter > 1) {
            setCounter(counter - 1) 
        } else {
            alert('No puedes tener valores negativos')
        } 
    }

    const mostrar = () => {
        setShow( !show )
    }




    // hooks useEffect... para el ciclo de vida de un componente  
    // para funciones que quiero que se ejecuten una sola vez
    // o yo decir bajo que condicion quiero que se ejecute
    // se puede colocar un fech en el montaje del componente y
    // solo los va renderizar alli

    // si dejo el [] de dependencias vacio el efecto es solo 
    // de montaje

    // useEffect(() => {
    //     console.log('componente solo en montaje ejemplo 1')
    // }, [])

    
    // si dejo quito el [] d dependencias el efecto se 
    // ejecuta siempre

    useEffect(() => {
        console.log('componente renderiza siempre ejemplo 2')
    },)

    
    // si le coloco una dependencia se ejecuta en montaje y cuando 
    // esa dependencia sufre un cambio...  se le puede pasar
    // mas de una separada por coma.

    // useEffect(() => {
    //     console.log('componente con dependencia del counter ejemplo 3')
    // },[counter])

    
    // tambien le podemos aplicar condicionales y solo se activa
    // cuando se presente ese condicion

    // useEffect(() => {
    //     if (counter === 9)console.log('componente con condicional 9 ejemplo 4')       
    // },[counter])

    // siempre primero es el renderizado y despues el efecto


    // Clean use Effect
    // cada useEffect puede retornar una funcion y ese return ()
    // es el clear effect y se debe ejecutar en el desmontaje 
    // del componente

    useEffect(() => {
        console.log('componente solo en montaje ejemplo 5')
        
        return () => ( // efecto de limpieza
            console.log('componente desmontado ejemplo 5')
        )
    }, [])

    // los estados de los componentes existen mientras el componente
    // este montado, si lo desmonto empieza de cero


    // el efecto se dispara despues del renderizado
    // si queremos que el efecto se dispara antes hay que trabajarlo 
    // de esta manera y von dependencia

    useEffect(() => {      
        return () => ( 
            console.log('componente counter '+ counter)
        )
    }, [counter])



    return (
        <div className="container">
            <h2>Clickear</h2>
            <br/>
            <div className='btn btn-group'>
                <button className=" btn btn-danger" onClick={handleRestar}>Restar
                </button>
                <button className=" btn btn-secundary" disabled>{counter}</button>
                <button className=" btn btn-success" onClick={handleSumar}>Sumar</button>
            </div>
            <p> Fecha: {new Date().toLocaleDateString()}</p>
            <p> Hora: {new Date().toLocaleTimeString()}</p>
            <br/>
            {/* el nombre del boton cambia dependiendo del estado del show */}
            <button className='btn btn-primary' onClick={mostrar}>
                {show ? 'Ocultar' : 'Mostrar'}
            </button>
            {/* si show es true muestra la bomba si es false no
            lo mezclamos con el contador asi que este le dara el
            tamaño a la bomba
            {show && <p style={{fontSize: `${counter * 16}px`}}>
                    {counter >= 20 ? '💥' : '💣'}
                </p>} */}
            <Bomba show={show} counter={counter}  />
        </div>
        
    )
}


// hooks useState
/*
Estado de un componente

los estados son los valores relevantes para el funcionamiento
del componente o la funcion (es la memoria del componente)

Hooks son funciones que enganchan los estados de react

hooks useState

se debe importar arriba
import { useState} from "react"

su estructura es asi 
let [state, fn] = useState(0)

state = es la variable que tomo como estado de mi componente

fn = es la funcion que le pasamos generalmente la llamamos
set(nombre de la variable state) y es para modificar mi estado

useState() = retorna un array con dos elementos el primero es 
un valor o tu variable y el segundo es una funcion
dentro del() le das el valor inicial de la variable por parametro

la idea es que react actualice el componente y para que 
recat lo escuche se debe utilizar la funcion setState que 
me retorna y asi lo renderize en este caso setCounter

cada vez que react presive un cambio en los componentes
con state se renderiza, aunque ocurra en un hijo o directo
en el padre

renderizar un componente significa llamar a toda la funcion
en este caso a const Clicker = ()

tambien se puede tener mas de un estado en un componente

a las funciones por convencion se le coloca handle(nombre de la funcion)

*/

// hooks useEffect... para el ciclo de vida de un componente
/*




*/
