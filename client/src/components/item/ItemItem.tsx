import React from 'react'

type ItemItemProps = {
   title: string
   description: string
}

function ItemItem(props: ItemItemProps) {
   return (
      <div className = 'grid col-span-3 row-span-1 grid-rows-1 grid-cols-3'>
         <div className = 'col-span-1 border-r-2 py-2 h-full border-l-2 border-gray-800 pl-4'>{props.title}</div>
         <div className = 'col-span-2 py-2 border-gray-800 border-r-2 pl-4'>{props.description}</div>
      </div>
  )
}

export default ItemItem