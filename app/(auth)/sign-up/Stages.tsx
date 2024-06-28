import React from 'react'

function Stages() {
  return (
    <div className="p-4 space-y-2">
    <h3 className="text-base font-semibold">Step 1: Account Type</h3>
    <div className="flex max-w-xs space-x-4">
        <span className="w-24 h-2 rounded-full bg-violet-600"></span>
        <span className="w-24 h-2 rounded-full bg-gray-800 animate-pulse"></span>
        <span className="w-24 h-2 rounded-full bg-gray-400"></span>
    </div>
</div>
  )
}

export default Stages