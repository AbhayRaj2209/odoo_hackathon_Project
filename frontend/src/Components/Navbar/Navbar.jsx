import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useUser } from "../../util/UserContext";
import { Dropdown } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const primaryColor = "#854a68ff";
const textColor = "#f0eaf1";
const accentColor = "#ff7c7c";

const UserProfileDropdown = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem("userInfo");
    setUser(null);
    try {
      await axios.get("/auth/logout");
      window.location.href = "http://localhost:5173/login";
    } catch (error) {
      console.error(error?.response?.data?.message || error);
    }
  };

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div
      ref={ref}
      onClick={(e) => onClick(e)}
      style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
    >
      <div
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          overflow: "hidden",
          marginRight: "10px",
        }}
      >
        <img
          src={user?.picture}
          alt="User Avatar"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      {children}
      &#x25bc;
    </div>
  ));

  const CustomMenu = React.forwardRef(({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = useState("");

    return (
      <div ref={ref} style={style} className={className} aria-labelledby={labeledBy}>
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) => !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  });

  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" />
      <Dropdown.Menu as={CustomMenu}>
        <Dropdown.Item onClick={() => navigate(`/profile/${user.username}`)}>Profile</Dropdown.Item>
        <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

const Header = () => {
  const [navUser, setNavUser] = useState(null);
  const { user } = useUser();
  const [discover, setDiscover] = useState(false);

  useEffect(() => {
    setNavUser(JSON.parse(localStorage.getItem("userInfo")));
  }, [user]);

  useEffect(() => {
    const handleUrlChange = () => {
      const temp = window.location.href.split("/");
      const url = temp.pop();
      setDiscover(url.startsWith("discover"));
    };
    window.addEventListener("popstate", handleUrlChange);
    handleUrlChange();
    return () => window.removeEventListener("popstate", handleUrlChange);
  }, []);

  return (
    <Navbar expand="md" style={{ backgroundColor: primaryColor, zIndex: 998 }}>
      <Container fluid>
        <Navbar.Brand href="/" style={{ fontFamily: "Josefin Sans, sans-serif", color: textColor, fontWeight: 600 }}>
          SKILL SWAP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <Navbar.Offcanvas id={`offcanvasNavbar-expand-md`} aria-labelledby={`offcanvasNavbarLabel-expand-md`} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              id={`offcanvasNavbarLabel-expand-md`}
              style={{ fontFamily: "Josefin Sans, sans-serif", color: primaryColor }}
            >
              SKILL SWAP
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={Link} to="/" style={{ fontFamily: "Montserrat, sans-serif", color: textColor }}>
                Home
              </Nav.Link>
              {navUser !== null ? (
                <>
                  <Nav.Link as={Link} to="/discover" style={{ fontFamily: "Montserrat, sans-serif", color: textColor }}>
                    Discover
                  </Nav.Link>
                  <Nav.Link as={Link} to="/chats" style={{ fontFamily: "Montserrat, sans-serif", color: textColor }}>
                    Your Chats
                  </Nav.Link>
                  {discover && (
                    <>
                      <Nav.Link href="#for-you" style={{ fontFamily: "Montserrat", color: accentColor }} className="d-md-none">
                        For You
                      </Nav.Link>
                      <Nav.Link href="#popular" style={{ fontFamily: "Montserrat", color: textColor }} className="d-md-none">
                        Popular
                      </Nav.Link>
                      <Nav.Link href="#web-development" style={{ fontFamily: "Montserrat", color: textColor }} className="d-md-none">
                        Web Development
                      </Nav.Link>
                      <Nav.Link href="#machine-learning" style={{ fontFamily: "Montserrat", color: textColor }} className="d-md-none">
                        Machine Learning
                      </Nav.Link>
                      <Nav.Link href="#others" style={{ fontFamily: "Montserrat", color: textColor }} className="d-md-none">
                        Others
                      </Nav.Link>
                    </>
                  )}
                  <Nav.Link as={Dropdown}><UserProfileDropdown /></Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/about_us" style={{ fontFamily: "Montserrat", color: textColor }}>
                    About Us
                  </Nav.Link>
                  <Nav.Link as={Link} to="/#why-skill-swap" style={{ fontFamily: "Montserrat", color: textColor }}>
                    Why SkillSwap
                  </Nav.Link>
                  <Nav.Link as={Link} to="/login" style={{ fontFamily: "Montserrat", color: textColor }}>
                    Login/Register
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
