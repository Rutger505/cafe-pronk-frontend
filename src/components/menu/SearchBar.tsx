interface SearchBarProps {
  onSearchChange: (search: string) => void;
}

export default function SearchBar({
  onSearchChange,
}: Readonly<SearchBarProps>) {
  return (
    <input
      className={"mb-5 rounded-button border border-tertiary p-2 px-4 "}
      type={"text"}
      placeholder={"Search for a dish..."}
      onChange={(event) => onSearchChange(event.target.value)}
    />
  );
}
