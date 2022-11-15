import React from 'react'
import SplashNav from '../splash/SplashNav'
import * as starters from '../starter/starters.json'

type StarterProps = {
    setRenderHero: React.Dispatch<React.SetStateAction<boolean>>
}

function Starter(props: StarterProps) {

    React.useEffect(() => {
        props.setRenderHero(false)
    }, [])

    return (
    <div className = 'relative bg-black text-white w-screen h-screen'>
        <SplashNav />
        <div className = ''></div>
    </div>
    )
}

export default Starter