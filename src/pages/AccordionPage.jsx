import { useState } from "react";
import Accordion from "../components/Accordion";

const AccordionPage = () => {
  const items = [
    {
      id: "121dasfa",
      label: "Can I use React on a project?",
      content: "Hi How are you doing? ",
    },
    {
      id: "aAfasa2",
      label: "Can I use Javascript on a project?",
      content: "Hello ",
    },
    {
      id: "J232as",
      label: "Can I use Tailwind on a project?",
      content: "Bye ",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="flex flex-col gap-1 w-80">
      {items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        return (
          <Accordion
            key={item.id}
            item={item}
            index={index}
            isExpanded={isExpanded}
            setExpandedIndex={setExpandedIndex}
            expandedIndex={expandedIndex}
          ></Accordion>
        );
      })}
    </div>
  );
};

export default AccordionPage;
