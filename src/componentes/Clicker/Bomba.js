


export const Bomba = ( { show, counter } ) => {

    return (
        <div>
            {/* si show es true muestra la bomba si es false no */}
            {/* lo mezclamos con el contador asi que este le dara el
            tamaño a la bomba */}
            {show && <p style={{fontSize: `${counter * 16}px`}}>
                    {counter >= 20 ? '💥' : '💣'}
                </p>}
        </div>
    )
}