const Theme = () => {
	return (
		<div className='py-6 px-10 bg-white mx-5 lg:mx-12 rounded-md shadow-md'>
			<h2 className='font-bold text-2xl'>خيارات المظهر</h2>
			<p className='font-bold text-xl mt-7'>النمط</p>
			<div className='py-8'>
				<img src='Capture.PNG' alt='theme1' className='w-44' />
				<div class='flex items-center m-3'>
				<label
						for='inline-radio'
						class='ml-2 text-xl font-bold'
					>
						افتراضي
					</label>
					<input
						id='inline-radio'
						type='radio'
						value=''
						name='inline-radio-group'
						class='w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 '
					/>
				</div>
			</div>
		</div>
	)
}

export default Theme
