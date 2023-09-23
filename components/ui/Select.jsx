"use client";
import { Select, SelectItem, SelectSection } from "@nextui-org/select";

export default function Services() {
  return (
    <Select label="Choose a service">
      <SelectItem>
        <p>Boarding</p>
        <p>For overnight care</p>
      </SelectItem>
      <SelectItem>Day Care</SelectItem>
      <SelectItem>Drop In Visit</SelectItem>
      <SelectItem>Walk</SelectItem>
    </Select>
  );
}
