import styles from "./Layout.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/Link";
import { Nav, Navbar, Button } from "react-bootstrap";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Ridesurf</title>
      </Head>

      <Navbar
        collapseOnSelect
        expand="md"
        bg="dark"
        variant="dark"
        className={styles.navbar}
      >
        <Navbar.Brand>Ridesurf</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Link href="/" passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/rides" passHref>
              <Nav.Link>Rides</Nav.Link>
            </Link>
            <Link href="/contact" passHref>
              <Nav.Link>Contact Us</Nav.Link>
            </Link>
          </Nav>
          <Button variant="primary" className={styles.button}>
            Sign In
          </Button>
          <Button variant="outline-secondary" className={styles.button}>
            Sign Up
          </Button>
        </Navbar.Collapse>
      </Navbar>

      {children}

      <footer>Hello</footer>
    </>
  );
}
