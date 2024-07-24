import React from "react";

interface Props {
  nameschool: string;
  year: string;
  description: string;
  bgColor?: string;
}

const Education = (Props: Props) => {
  const { nameschool, year, description, bgColor } = Props;
  return (
    <div
      className={`flex flex-col gap-3 ${bgColor} p-7 rounded-sm rounded-2xl`}
    >
      <div className="flex flex-row justify-between  ">
        <label>{nameschool}</label>
        <div>{year}</div>
      </div>
      <p className="text-justify">{description}</p>
    </div>
  );
};

export default Education;
