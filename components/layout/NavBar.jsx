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
        <Link className="flex space-x-2" href="/">
          <Logo />
          <h4 className="text-2xl">Paws &#38; Play Pet Care </h4>
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center" className="font-medium">
        <NavbarItem>
          <Link href="/about">About Me</Link>
        </NavbarItem>
        <p>&#183;</p>
        <NavbarItem>
          <Link href="/pricing">Pricing</Link>
        </NavbarItem>
        <p>&#183;</p>
        <NavbarItem>
          <Link href="/booking">Book Now</Link>
        </NavbarItem>
        <p>&#183;</p>
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
