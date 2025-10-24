import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { HeartPulse } from "lucide-react"; // ícone elegante de saúde

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className="custom-navbar shadow-sm">
        <Container fluid className="px-5">
          {/* LOGO + TEXTO */}
          <Navbar.Brand href="/" className="d-flex align-items-center gap-2">
            <span className="brand-text d-flex align-items-center gap-1">
              <HeartPulse size={22} color="#00b4a0" />
              HealthBase
            </span>
          </Navbar.Brand>

          {/* LINKS */}
          <Nav className="ms-auto nav-links">
            <Nav.Link href="/" className="nav-item">
              HOME
            </Nav.Link>
            <Nav.Link href="/imc" className="nav-item">
              IMC
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
