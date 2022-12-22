import React from 'react'
import image from '../img/not found.jpg'
function NotFoundPage() {
	return (
		<div className='absolute h-full w-full bg-sky-50 z-50'>
			<img src={image} className='h-full w-full' />
		</div>
	)
}

export default NotFoundPage
