import React from 'react'

const Cancel =()=>{
    return (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Cancelled!</strong>
            <span className="block sm:inline"> Your payment was cancelled.</span>
        </div>
    );
}
export default Cancel