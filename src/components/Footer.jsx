import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full h-8 p-6 mb-6 mt-4 uppercase text-sm font-medium border-t border-indigo-600 flex justify-between">
      <div className="">
        © 2023 <span className="text-indigo-600">VoxUkraine</span>
      </div>
      <div className="text-indigo-600 hover:text-indigo-700">
        
        <Link href='/about'>Про проект</Link></div>
    </div>
  );
}
