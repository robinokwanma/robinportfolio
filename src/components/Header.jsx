import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ThemeSwitcher from './ThemeSwitcher'



function Header() {
  return (
    <Navbar sticky="top" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/"><h3><i><b> Robin Okwanma</b></i></h3></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
       <ThemeSwitcher/>
       </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;