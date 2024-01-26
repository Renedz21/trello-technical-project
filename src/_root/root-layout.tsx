// import Navbar from '@/components/common/navbar'
import Sidebar from '@/components/common/sidebar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <div className='w-full h-full relative flex '>
            <Sidebar />
            <div className='flex-1 w-full h-full'>
                <Outlet />
            </div>
        </div>
    )
}

export default RootLayout