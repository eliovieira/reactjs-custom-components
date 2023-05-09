import React from "react";
//icons
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

//custom components
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {
    console.log("CLICK!");
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <Button success rounded outline onClick={handleClick}>
          <GoBell />
          Submit
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload />
          Buy now
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hi!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Bye!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
