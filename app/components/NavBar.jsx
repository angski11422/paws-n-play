import {
    Navbar, 
    NavbarBrand, 
    NavbarContent, 
    NavbarItem, 
  } from "@nextui-org/navbar";
import Link from "next/link";
import Toggle from "./Switch";

export default function NavBar() {
    return (
        <Navbar>
            <NavbarBrand>
            <h1>Paws &#38; Play Pet Care </h1>
            </NavbarBrand>
            <NavbarContent justify="center">
                <NavbarItem>
                    <Link href="/about">
                    About Me
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/">
                    Book Now
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/">
                    Request Meet & Greet
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Toggle />
                </NavbarItem>
            </NavbarContent>
            
        </Navbar>
    );
}
