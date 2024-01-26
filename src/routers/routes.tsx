import { BoardDetails, Boards, Favorites, Home } from '@/_root/pages'
import RootLayout from '@/_root/root-layout'
import { Routes, Route } from 'react-router-dom'

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path='/boards' element={<Boards />} />
                <Route path='/boards/:boardId' element={<BoardDetails />} />
                <Route path='/favorites' element={<Favorites />} />
                {/* <Route path="*" element={<h1>Not Found</h1>} /> */}
            </Route>
        </Routes>
    )
}

export default AppRoutes