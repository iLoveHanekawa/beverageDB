import React from 'react'
import { AiOutlineApi, AiOutlineFileAdd, AiOutlineBug } from 'react-icons/ai'

function BottomNavBar() {
  return (
    <div className = "nav bottom-0 fixed">
        <div className = 'btn text-sm flex gap-1'>
            <AiOutlineApi className = 'text-lg' />
            <button>API</button>
        </div>
        <div className = 'flex gap-6'>
            <div className = 'btn text-sm flex items-center gap-1'>
                <AiOutlineFileAdd className = 'text-md' />
                <button>Contribute</button>
            </div>
            <div className = 'btn text-sm items-center flex gap-1'>
                <AiOutlineBug className = 'text-md' />
                <button>Report Bug</button>
            </div>
        </div>
    </div>
  )
}

export default BottomNavBar