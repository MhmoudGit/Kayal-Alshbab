import Deletemenu from './Deletemenu'

const User = () => {
	return (
		<div className=' p-10 bg-white mx-5 lg:mx-12 rounded-md'>
			<h2 className='font-bold text-2xl'>المستخدمون</h2>
			<div className='my-5'>
				<div className='flex justify-between p-2'>
					<div className='flex flex-col gap-0'>
						<p className='bg-gray-600 text-white rounded-full w-1/2 font-bold text-center'>
							المالك
						</p>
						<p>email@something.com</p>
					</div>
					<Deletemenu />
				</div>
			</div>
			<button className='p-3 px-6 font-bold bg-blue-700 text-white rounded-full'>
				إضافة مستخدم جديد
			</button>
		</div>
	)
}

export default User
