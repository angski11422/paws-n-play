import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import Link from "next/link";
import Toggle from "../ui/Switch";
import Logo from "../ui/Logo";

export default function NavBar() {
  return (
    <Navbar maxWidth="full">
      <NavbarBrand>
        <Logo />
        <h1>Paws &#38; Play Pet Care </h1>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Link href="/about">About Me</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/pricing">Pricing</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/">Book Now</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contact">Request Meet & Greet</Link>
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
