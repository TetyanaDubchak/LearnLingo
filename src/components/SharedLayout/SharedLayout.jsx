import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { Container } from "./SharedLayout.styled";

export const SharedLayout = () => {

    return (
        <Container>
            <header>
                <nav>
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/teachers">Teachers</NavLink>
                    <NavLink to="/favorites">Favorites</NavLink>
                </nav>
            </header>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet/>
            </Suspense>
        </Container>
    )
}