import React from 'react'

type StarterProps = {
    setRenderHero: React.Dispatch<React.SetStateAction<boolean>>
}

function Starter(props: StarterProps) {

    React.useEffect(() => {
        props.setRenderHero(false)
    }, [])

    return (
    <div>Starter</div>
    )
}

export default Starter