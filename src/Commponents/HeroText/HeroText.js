import React from "react";

const HeroText = () => {
  return (
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h1 className="text-6xl htitile">
        {" "}
        TAHSIN <br />
        HOSEN <b className="text-yellow-600">RAHI</b>
      </h1>
      <p className="text-gray-400 text-2xl my-5 font-light htitile">
        {" "}
        Voice Over Artist
      </p>

      <p className="text-3xl">
        Based in Bangladesh , <br />
        I’m voice over artist and narrator.
      </p>
    </div>
  );
};

export default HeroText;
