// export const Noticias = () => { // otra forma de exportar

//     return (
//         <section>
//             <h4>Noticias de hoy</h4>
//             <hr/>
//             <p>loren ipsun etc ... </p>

//             <div>
//                 Este es un div
//             </div>
//         </section>
//     )
// }

// export default Noticias ... una forma para exportar


// childrens

export const Noticias = ({ children }) => { // otra forma de exportar

    const styles = {
        margin: '40px auto',
        color: 'red',
    }


    return (
        <section style={styles}>
            <h4>Noticias de hoy</h4>
            <hr/>
            <p>loren ipsun etc ... </p>

            <div>
                Este es un div
            </div>

            {children}


        </section>
    )
}

// export default Noticias ... una forma para exportar
