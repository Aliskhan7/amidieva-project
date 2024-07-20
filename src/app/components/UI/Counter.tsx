import React from "react";

interface CounterProps {
  counter: number;
}

const Counter: React.FC<CounterProps> = ({ counter }) => {
  return (
    <div className="flex-between-center w-[102px] py-3.5 px-4 bg-[#EFEFEF] rounded">
      <button className="text-gray-400">-</button>
      <span className="text-gray-400">{counter}</span>
      <button className="text-gray-400">+</button>
    </div>
  );
};

export default Counter;
