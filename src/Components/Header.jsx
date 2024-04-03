import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
Link;
function Header() {
  return (
    <div>
      <Navbar className="bg-info">
        <Container>
          <Navbar.Brand>
            <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>
              <i class="fa-solid fa-photo-film me-2"></i>Media-Player
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
