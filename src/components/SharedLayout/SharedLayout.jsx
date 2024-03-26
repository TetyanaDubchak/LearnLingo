import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Container } from "./SharedLayout.styled";
import { Navigation } from "components/Navigation/Navigation";
import { AppBar } from "components/AppBar/AppBar";

export const SharedLayout = () => {

    return (
        <Container>
            <header>
                <AppBar/>
            </header>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet/>
            </Suspense>
        </Container>
    )
}