import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';

import crest from '../assets/uw-crest.svg'

import { AllBadgermonDataContext } from "../contexts/AllBadgermonDataContext";
import { BadgermonTeamContext } from "../contexts/BadgermonTeamContext";

function Layout() {

    const [badgermon, setBadgermon] = useState([]);
    const [team, setTeam] = useState([]);

    // TODO: Fetch the Badgermon data

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            alt="Badger Daycare Logo"
                            src={crest}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Badgermon
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/badgermon">Badgermon</Nav.Link>
                        <Nav.Link as={Link} to="/your-team">Your Team</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className="body-spacer">
                <AllBadgermonDataContext.Provider value={[badgermon, setBadgermon]}>
                    <BadgermonTeamContext.Provider value={[team, setTeam]}>
                        <Outlet />
                    </BadgermonTeamContext.Provider>
                </AllBadgermonDataContext.Provider>
            </div>
        </div>
    );
}

export default Layout;
