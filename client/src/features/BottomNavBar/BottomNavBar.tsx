import React from 'react'
import { AiOutlineApi, AiOutlineFileAdd, AiOutlineBug } from 'react-icons/ai'

function BottomNavBar() {
  return (
    <div className = "nav bottom-0">
        <div className = 'btn text-sm flex gap-1'>
            <AiOutlineApi className = 'text-xl' />
            <button>API</button>
        </div>
        <div className = 'flex gap-6'>
            <div className = 'btn text-sm flex gap-1'>
                <AiOutlineFileAdd className = 'text-lg' />
                <button>Contribute</button>
            </div>
            <div className = 'btn text-sm flex gap-1'>
                <AiOutlineBug className = 'text-lg' />
                <button>Report Bug</button>
            </div>
        </div>
    </div>
  )
}

export default BottomNavBar