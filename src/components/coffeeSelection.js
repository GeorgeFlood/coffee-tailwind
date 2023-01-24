import React from "react";
const CoffeeSelection = ({ img, title, info }) => {
  return (
    <div className="mt-16">
      <img src={img} alt="coffee img" />
      <h3 className="text-2xl font-semibold text-center">{title}</h3>
      <p className="text-center mt-4">{info}</p>
    </div>
  );
};
export default CoffeeSelection;
