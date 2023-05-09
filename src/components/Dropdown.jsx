import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

const Dropdown = ({ title, options, onChange, value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handler = (event) => {
      if (divEl.current && !divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  return (
    <div ref={divEl} className=" w-48 relative">
      <label className="text-s">{title} </label>
      <Panel
        className=" flex justify-between items-center cursor-pointer "
        onClick={() => setIsOpen(!isOpen)}
      >
        {value ? value.label : "Select..."}
        <GoChevronDown className="text-xl" />
      </Panel>
      {isOpen &&
        options.map((option) => {
          return (
            <Panel
              key={option.value}
              value={option.value}
              className="hover:bg-sky-100 flex justify-between cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </Panel>
          );
        })}
    </div>
  );
};

export default Dropdown;
