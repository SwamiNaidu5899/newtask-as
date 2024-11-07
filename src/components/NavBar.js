import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { Navbar, Nav, Form, FormControl, Button, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ResponsiveNavbar = () => {
    const [cartCount, setCartCount] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [category, setCategory] = useState('all');
    const [selectedLocation, setSelectedLocation] = useState('bangalore');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log(`Searching for: ${searchQuery} in category: ${category}`);
    };

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src='https://www.nettoplate.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNet-to-plate-text.48a45ae9.png&w=640&q=75' alt='logo' height={100} width={200} />

                </Navbar.Brand>

                <Form.Control
                    as="select"
                    value={selectedLocation}
                    onChange={handleLocationChange}
                    className="ms-3"
                    style={{ maxWidth: '180px' }}
                >
                    <option value="bangalore">Bangalore, N35 2nd floor, Varalakshmi Mansion</option>
                    <option value="delhi">Delhi, Connaught Place</option>
                    <option value="mumbai">Mumbai, Bandra West</option>
                    <option value="chennai">Chennai, T Nagar</option>
                    <option value="kolkata">Kolkata, Park Street</option>
                    <option value="hyderabad">Hyderabad, Banjara Hills</option>
                </Form.Control>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Seafood Categories" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/salmon">Salmon</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/tuna">Tuna</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/shrimp">Shrimp</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/lobster">Lobster</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/crab">Crab</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/mussels">Mussels</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/oysters">Oysters</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/clams">Clams</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/squid">Squid</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/scallops">Scallops</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <Nav>
                        <Form className="d-flex" onSubmit={handleSearchSubmit}>
                            <FormControl
                                type="search"
                                placeholder="Search Seafood..."
                                className="me-2"
                                aria-label="Search"
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                            <Form.Control
                                as="select"
                                value={category}
                                onChange={handleCategoryChange}
                                className="me-2"
                            >
                                <option value="all">All Categories</option>
                                <option value="salmon">Salmon</option>
                                <option value="tuna">Tuna</option>
                                <option value="shrimp">Shrimp</option>
                                <option value="lobster">Lobster</option>
                                <option value="crab">Crab</option>
                                <option value="mussels">Mussels</option>
                                <option value="oysters">Oysters</option>
                                <option value="clams">Clams</option>
                                <option value="squid">Squid</option>
                                <option value="scallops">Scallops</option>
                            </Form.Control>
                            <Button type="submit" variant="outline-dark">Search</Button>
                        </Form>
                    </Nav>

                    <Nav>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as="button" onClick={() => alert('Go to cart')}>
                            <FaShoppingCart size={24} />
                            {cartCount > 0 && (
                                <span className="badge bg-danger">{cartCount}</span>
                            )}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default ResponsiveNavbar;
