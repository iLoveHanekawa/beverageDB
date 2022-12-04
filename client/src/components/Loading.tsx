import React from 'react'

function Loading() {
  return (
    <div className = 'w-full h-full mt-20 flex-col flex items-center'>
        <div className = 'w-32 h-32 border-white border-8 border-l-transparent border-t-transparent animate-spin rounded-full relative'>
        </div>
    </div>
  )
}

export default Loading