import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../../images/Logo.svg'
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth);
        navigate('/home')
    }

    return (
        <div>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home" href="#home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/shop" href="#shop">Shop</Nav.Link>
                        </Nav>
                        <Nav className='me-auto'>
                            {
                                user &&
                                <>
                                    <Nav.Link>{user?.displayName} </Nav.Link>
                                    <Navbar.Brand>
                                        <img style={{'borderRadius': '50%', 'maxHeight' : '50px'}} src={user?.photoURL} alt="" />
                                    </Navbar.Brand>
                                </>
                            }
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/favorite" href="#favorite">Favorite item</Nav.Link>
                            {
                                user
                                    ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                    :
                                    <Nav.Link eventKey={2} as={Link} to="/login" href="#signin">
                                        Login
                                    </Nav.Link>

                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;