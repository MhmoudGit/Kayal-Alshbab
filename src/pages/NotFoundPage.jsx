import React from 'react'
import image from '../img/not found.jpg'
function NotFoundPage() {
    return (
        <div className='w-full bg-cyan-50'>
            <div className='max-w-4xl mx-auto p-3'>
            <img src={image} className="mx-auto"/>
            </div>
        </div>
    )
}

export default NotFoundPage