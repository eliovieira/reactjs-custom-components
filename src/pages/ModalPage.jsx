import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

const ModalPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {isOpen && (
        <Modal
          onClose={onClose}
          actionBar={
            <Button primary onClick={onClose}>
              I Accept
            </Button>
          }
        >
          <p> I'm a modaldasda sdads da das dasd as </p>
        </Modal>
      )}

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam nibh,
        finibus sed urna quis, mattis sagittis leo. Nullam eget euismod mi,
        cursus malesuada nulla. Duis sed suscipit orci. Nulla sit amet erat ac
        risus eleifend pulvinar tempor luctus eros. Duis non pharetra mi. In
        congue risus massa, vel semper nunc porttitor nec. Ut sed lacus vel arcu
        tempus tristique non nec mauris. Vivamus tincidunt massa nec elit
        hendrerit viverra. Morbi sollicitudin augue vitae est placerat pretium.
        Nulla tincidunt mauris purus, at rutrum lectus fermentum et. Praesent
        mauris elit, sodales ac tristique at, convallis sagittis mi. Aenean
        rutrum ornare velit in vulputate. In arcu risus, porta vel sodales sed,
        aliquet eu purus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam nibh,
        finibus sed urna quis, mattis sagittis leo. Nullam eget euismod mi,
        cursus malesuada nulla. Duis sed suscipit orci. Nulla sit amet erat ac
        risus eleifend pulvinar tempor luctus eros. Duis non pharetra mi. In
        congue risus massa, vel semper nunc porttitor nec. Ut sed lacus vel arcu
        tempus tristique non nec mauris. Vivamus tincidunt massa nec elit
        hendrerit viverra. Morbi sollicitudin augue vitae est placerat pretium.
        Nulla tincidunt mauris purus, at rutrum lectus fermentum et. Praesent
        mauris elit, sodales ac tristique at, convallis sagittis mi. Aenean
        rutrum ornare velit in vulputate. In arcu risus, porta vel sodales sed,
        aliquet eu purus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam nibh,
        finibus sed urna quis, mattis sagittis leo. Nullam eget euismod mi,
        cursus malesuada nulla. Duis sed suscipit orci. Nulla sit amet erat ac
        risus eleifend pulvinar tempor luctus eros. Duis non pharetra mi. In
        congue risus massa, vel semper nunc porttitor nec. Ut sed lacus vel arcu
        tempus tristique non nec mauris. Vivamus tincidunt massa nec elit
        hendrerit viverra. Morbi sollicitudin augue vitae est placerat pretium.
        Nulla tincidunt mauris purus, at rutrum lectus fermentum et. Praesent
        mauris elit, sodales ac tristique at, convallis sagittis mi. Aenean
        rutrum ornare velit in vulputate. In arcu risus, porta vel sodales sed,
        aliquet eu purus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam nibh,
        finibus sed urna quis, mattis sagittis leo. Nullam eget euismod mi,
        cursus malesuada nulla. Duis sed suscipit orci. Nulla sit amet erat ac
        risus eleifend pulvinar tempor luctus eros. Duis non pharetra mi. In
        congue risus massa, vel semper nunc porttitor nec. Ut sed lacus vel arcu
        tempus tristique non nec mauris. Vivamus tincidunt massa nec elit
        hendrerit viverra. Morbi sollicitudin augue vitae est placerat pretium.
        Nulla tincidunt mauris purus, at rutrum lectus fermentum et. Praesent
        mauris elit, sodales ac tristique at, convallis sagittis mi. Aenean
        rutrum ornare velit in vulputate. In arcu risus, porta vel sodales sed,
        aliquet eu purus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam nibh,
        finibus sed urna quis, mattis sagittis leo. Nullam eget euismod mi,
        cursus malesuada nulla. Duis sed suscipit orci. Nulla sit amet erat ac
        risus eleifend pulvinar tempor luctus eros. Duis non pharetra mi. In
        congue risus massa, vel semper nunc porttitor nec. Ut sed lacus vel arcu
        tempus tristique non nec mauris. Vivamus tincidunt massa nec elit
        hendrerit viverra. Morbi sollicitudin augue vitae est placerat pretium.
        Nulla tincidunt mauris purus, at rutrum lectus fermentum et. Praesent
        mauris elit, sodales ac tristique at, convallis sagittis mi. Aenean
        rutrum ornare velit in vulputate. In arcu risus, porta vel sodales sed,
        aliquet eu purus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam nibh,
        finibus sed urna quis, mattis sagittis leo. Nullam eget euismod mi,
        cursus malesuada nulla. Duis sed suscipit orci. Nulla sit amet erat ac
        risus eleifend pulvinar tempor luctus eros. Duis non pharetra mi. In
        congue risus massa, vel semper nunc porttitor nec. Ut sed lacus vel arcu
        tempus tristique non nec mauris. Vivamus tincidunt massa nec elit
        hendrerit viverra. Morbi sollicitudin augue vitae est placerat pretium.
        Nulla tincidunt mauris purus, at rutrum lectus fermentum et. Praesent
        mauris elit, sodales ac tristique at, convallis sagittis mi. Aenean
        rutrum ornare velit in vulputate. In arcu risus, porta vel sodales sed,
        aliquet eu purus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam nibh,
        finibus sed urna quis, mattis sagittis leo. Nullam eget euismod mi,
        cursus malesuada nulla. Duis sed suscipit orci. Nulla sit amet erat ac
        risus eleifend pulvinar tempor luctus eros. Duis non pharetra mi. In
        congue risus massa, vel semper nunc porttitor nec. Ut sed lacus vel arcu
        tempus tristique non nec mauris. Vivamus tincidunt massa nec elit
        hendrerit viverra. Morbi sollicitudin augue vitae est placerat pretium.
        Nulla tincidunt mauris purus, at rutrum lectus fermentum et. Praesent
        mauris elit, sodales ac tristique at, convallis sagittis mi. Aenean
        rutrum ornare velit in vulputate. In arcu risus, porta vel sodales sed,
        aliquet eu purus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam nibh,
        finibus sed urna quis, mattis sagittis leo. Nullam eget euismod mi,
        cursus malesuada nulla. Duis sed suscipit orci. Nulla sit amet erat ac
        risus eleifend pulvinar tempor luctus eros. Duis non pharetra mi. In
        congue risus massa, vel semper nunc porttitor nec. Ut sed lacus vel arcu
        tempus tristique non nec mauris. Vivamus tincidunt massa nec elit
        hendrerit viverra. Morbi sollicitudin augue vitae est placerat pretium.
        Nulla tincidunt mauris purus, at rutrum lectus fermentum et. Praesent
        mauris elit, sodales ac tristique at, convallis sagittis mi. Aenean
        rutrum ornare velit in vulputate. In arcu risus, porta vel sodales sed,
        aliquet eu purus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam diam nibh,
        finibus sed urna quis, mattis sagittis leo. Nullam eget euismod mi,
        cursus malesuada nulla. Duis sed suscipit orci. Nulla sit amet erat ac
        risus eleifend pulvinar tempor luctus eros. Duis non pharetra mi. In
        congue risus massa, vel semper nunc porttitor nec. Ut sed lacus vel arcu
        tempus tristique non nec mauris. Vivamus tincidunt massa nec elit
        hendrerit viverra. Morbi sollicitudin augue vitae est placerat pretium.
        Nulla tincidunt mauris purus, at rutrum lectus fermentum et. Praesent
        mauris elit, sodales ac tristique at, convallis sagittis mi. Aenean
        rutrum ornare velit in vulputate. In arcu risus, porta vel sodales sed,
        aliquet eu purus.
      </p>
    </div>
  );
};

export default ModalPage;
