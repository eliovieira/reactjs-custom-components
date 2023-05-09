import { GoChevronLeft, GoChevronDown } from "react-icons/go";

const Accordion = ({
  item,
  index,
  isExpanded,
  setExpandedIndex,
  expandedIndex,
}) => {
  return (
    <div>
      <div
        onClick={() => {
          if (index === expandedIndex) {
            setExpandedIndex(null);
          } else {
            setExpandedIndex(index);
          }
        }}
        className=" cursor-pointer bg-gray-50 p-1 flex items-center justify-between rounded border-b"
      >
        {item.label}

        <span className="text-2xl">
          {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </span>
      </div>
      {isExpanded && <div className="border-b p-5">{item.content}</div>}
    </div>
  );
};

export default Accordion;
