import React from "react";
import { InView } from "react-intersection-observer";
import { useState } from "react";

const CoffeeSelection = ({ img, title, info }) => {
  const [isInView, setIsInView] = useState(false);
  return (
    <InView onChange={(inView, entry) => setIsInView(inView)} threshold={[0.6]}>
      <div className={`${isInView ? "opacity-100" : "opacity-0"}`}>
        <img src={img} alt={title} />
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className=" my-6">{info}</p>
      </div>
    </InView>
  );
};
export default CoffeeSelection;
