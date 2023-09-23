import { Select, SelectItem, SelectSection } from "@nextui-org/select";

export default function Services() {
  return (
    <Select
      label="Favorite Animal"
      placeholder="Select an animal"
      className="max-w-xs"
    >
      <SelectItem key="animal">animal</SelectItem>
    </Select>
  );
}
