import { Link, Outlet } from "react-router-dom"

export const ReactProblems = () =>{
    return (
        <>
        <nav className="p-2 underline flex gap-2">
            <Link to={'table'}>Table</Link>
            <Link to={'pBar'}>Progress Bar</Link>
        </nav>
        <Outlet />
        </>
        
    )
}