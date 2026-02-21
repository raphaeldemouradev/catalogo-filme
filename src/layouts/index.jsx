import { Outlet } from "react-router-dom";

export function Layouts() {
    return (
        <div>
            <Outlet />
            <footer>Renderizou</footer>
        </div>
    )
}