import className from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = className(
    rest.className,
    "flex items-center gap-1 border py-1.5 px-3 ",
    {
      "border-blue-500 bg-blue-500 text-white hover:text-black": primary,
      "border-gray-900 bg-gray-900 ": secondary,
      "border-green-500 bg-green-500 ": success,
      "border-yellow-400 bg-yellow-400 ": warning,
      "border-red-500 bg-red-500 ": danger,
      "rounded-full": rounded,
      "outline-2 outline-red-700 bg-white ": outline,
      "text-blue-500": outline && primary,
      "text-green-500": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-500": outline && danger,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, sucess, warning, danger can be true"
      );
    }
  },
};

export default Button;
