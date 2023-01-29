import React from "react";
const ContentBox = function ({ title, info, img }) {
  return (
    <div className="bg-custom-green my-6 mx-6 py-16 rounded text-center">
      <img className="m-auto" src={img} loading="lazy" alt="svg" />
      <h2 className="text-2xl text-slate-50 my-6 font-bold">{title}</h2>
      <p className="text-slate-100 font-light mx-6">{info}</p>
    </div>
  );
};

export default ContentBox;
