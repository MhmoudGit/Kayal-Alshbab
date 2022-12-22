import { useState } from 'react'
import AddAdmin from '../components/AddAdmin'
import Theme from '../components/Theme'
import UpdateAdmin from '../components/updateAdmin'
import User from '../components/User'

const Settings = () => {
	const [page, setPage] = useState(true)

	return (
		<div className='lg:w-5/6 select-non max-h-[70vh] lg:max-h-[100vh]  overflow-y-auto'>
			<UpdateAdmin/>
			<hr className='hidden lg:block lg:my-10' />
			<div className='py-2 px-3 lg:px-10 lg:mt-11'>
				<h2 className='text-2xl lg:text-4xl font-bold mx-3 mt-3'>الإعدادات</h2>
			</div>
			<div className='my-2 border-b mx-12 flex gap-8'>
				<button
					className={`text-lg py-3 w-fit font-semibold ${
						page ? 'text-blue-500 border-b-2 border-blue-500' : null
					}`}
					onClick={() => setPage(true)}
				>
					ادارة المستخدمين
				</button>
				<button
					className={`text-lg py-3 w-fit font-semibold ${
						page ? null : 'text-blue-500 border-b-2 border-blue-500'
					}`}
					onClick={() => setPage(false)}
				>
					المظهر
				</button>
			</div>
			{page ? <User /> : <Theme />}
		</div>
	)
}

export default Settings
