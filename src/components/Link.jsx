import useNavigation from "../hooks/use-navigation";
import classNames from "classnames";

const Link = ({ children, to, className, activeClassName, ...rest }) => {
  const { currentPath, navigate } = useNavigation();

  const classes = classNames(
    "text-blue-500",

    currentPath === to && activeClassName
  );

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} {...rest} className={classes}>
      {children}
    </a>
  );
};

export default Link;
