import React from 'react'

type StarterItemProps = {
    setRenderHero: React.Dispatch<React.SetStateAction<boolean>>
}

function StarterItem(props: StarterItemProps) {

    React.useEffect(() => {
        props.setRenderHero(false)
    }, [])

    return (
    <div>StarterItem</div>
    )
}

export default StarterItem