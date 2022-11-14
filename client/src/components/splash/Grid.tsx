import React from 'react'

function Grid() {
  return (
    <div className = 'grid grid-rows-1 w-full h-2/3 gap-3 px-20 absolute top-60 grid-cols-4'>
            <div className = 'row-span-1 col-span-1'>
                <div className = 'grid grid-rows-5 grid-cols-1 h-full'>
                    <div className = 'text-gray-300 row-span-1'>Some information about this section. More information about this section. Even more information about this section.</div>
                    <div className = 'bg-green-300 row-span-4 rounded-lg'></div>
                </div>
            </div>
            <div className = 'row-span-1 col-span-1'>
                <div className = 'grid grid-rows-5 grid-cols-1 h-full'>
                    <div className = 'text-gray-300 row-span-1'>Some information about this section. More information about this section. Even more information about this section.</div>
                    <div className = 'bg-red-300 row-span-4 rounded-lg'></div>
                </div>
            </div>
            <div className = 'row-span-1 col-span-1'>
                <div className = 'grid grid-rows-5 grid-cols-1 h-full'>
                    <div className = 'text-gray-300 row-span-1'>Some information about this section. More information about this section. Even more information about this section.</div>
                    <div className = 'bg-pink-300 row-span-4 rounded-lg'></div>
                </div>
            </div>
            <div className = 'row-span-1 col-span-1'>
                <div className = 'grid grid-rows-5 grid-cols-1 h-full'>
                    <div className = 'text-gray-300 row-span-1'>Some information about this section. More information about this section. Even more information about this section.</div>
                    <div className = 'bg-blue-300 row-span-4 rounded-lg'></div>
                </div>
            </div>
        </div>
  )
}

export default Grid