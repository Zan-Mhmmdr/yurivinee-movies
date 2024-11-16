import {Navbar, Container, Nav} from "react-bootstrap" 

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand href="/">Yurivinee Movies</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#trending">Super Hero</Nav.Link>
                        <Nav.Link href="#anime">Anime</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar;