import React from "react";

export default function Footer() {
  return (
    <div className="w-full h-8 p-6 mb-6 mt-4 uppercase text-sm font-medium border-t border-blue-500 flex justify-between">
      <div className="">
        © 2023 <span className="text-blue-500">VoxUkraine</span>
      </div>
      <div className="text-blue-500">Про проект</div>
    </div>
  );
}
