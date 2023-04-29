import React from 'react';
import { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then()
        .catch(error =>{
            console.error(error);
        })
    }


    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to="/category/0">Home</Link>
                            <Nav.Link href="#">About</Nav.Link>
                            <Nav.Link href="#">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user && <span><FaUserCircle style={{ fontSize: '2.5rem' }}></FaUserCircle> {user.displayName}</span>
                            }

                            {
                                user ?
                                    <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
                                    <Link to='/login'>
                                        <Button variant="secondary">Login</Button>
                                    </Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;