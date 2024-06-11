export default function NavbarItem({ item }: { item: string }) {
  return (
    <a
      key={item}
      href={`#${item}`}
      className={`cursor-pointer   transition-all duration-200 hover:font-bold `}
    >
      {item}
    </a>
  );
}
