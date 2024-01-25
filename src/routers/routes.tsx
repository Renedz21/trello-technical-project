import { BoardDetails, Boards, Home } from '@/_root/pages'
import RootLayout from '@/_root/root-layout'
import { Routes, Route } from 'react-router-dom'

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path='/boards' element={<Boards />} />
                <Route path='/boards/:boardId' element={<BoardDetails />} />
                {/* <Route path="*" element={<h1>Not Found</h1>} /> */}
            </Route>
        </Routes>
    )
}

export default AppRoutes