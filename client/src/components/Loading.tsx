import React from 'react'

function Loading() {
  return (
    <div className = 'w-full h-full mt-20 flex-col flex items-center'>
        <div className = 'w-32 h-32 border-red-300 border-8 border-l-white border-t-white animate-spin rounded-full relative'>
        </div>
        <div className = 'text-gray-400 mt-6'>Loading...</div>
    </div>
  )
}

export default Loading