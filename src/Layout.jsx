import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import { Outlet } from 'react-router-dom'
import './app.css'

export function Layout(){
return (
    <div>
        <NavBar/>
        <SideBar/>
        <main>
            <Outlet/>
        </main>
    </div>
)
}
