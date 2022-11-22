import React from 'react'

type GridItemProps = {
    styling: string
}

function GridItem(props: GridItemProps) {
  return (
    <div className = {`${props.styling}`}>
        gridItem
    </div>
  )
}

export default GridItem