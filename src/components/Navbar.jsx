import Link from "./Link";

const Navbar = () => {
  const links = [
    {
      label: "Dropdown",
      path: "/dropdown",
    },
    {
      label: "Accordion",
      path: "/accordion",
    },
    {
      label: "Button",
      path: "/button",
    },
    {
      label: "Modal",
      path: "/modal",
    },
    {
      label: "Table",
      path: "/table",
    },
  ];
  return (
    <nav className="flex flex-col gap-10 sticky top-0 items-start ">
      {links.map((link) => {
        return (
          <Link
            key={link.path}
            to={link.path}
            activeClassName="font-bold border-l-4 border-blue-500 pl-2"
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
