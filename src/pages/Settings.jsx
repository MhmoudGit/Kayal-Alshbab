import Theme from '../components/Theme'

const Settings = () => {
	return (
		<div className='lg:w-5/6 select-non max-h-[70vh] lg:max-h-[100vh]  overflow-y-auto'>
			<hr className='hidden lg:block lg:my-10' />
			<div className='py-2 px-3 lg:px-10 lg:mt-11'>
				<h2 className='text-2xl lg:text-4xl font-bold mx-3 mt-3'>الإعدادات</h2>
			</div>
			<div className='my-2 border-b mx-12 flex gap-8'>
				<p className='text-lg py-3 text-blue-500 w-fit font-semibold border-b-2 border-blue-500'>
					ادارة المستخدمين
				</p>
				<p className='text-lg py-3 w-fit'>المظهر</p>
			</div>
			<Theme />
		</div>
	)
}

export default Settings
