import React from "react";
import { format } from "date-fns";
import { uk } from "date-fns/locale";
import Link from "next/link";

export default function Card({ cardData, cat }) {

  const colorCat =
    cat === "НЕПРАВДА"
      ? "text-red-600"
      : cat === "МАНІПУЛЯЦІЯ"
      ? "text-amber-400"
      : cat === "ФОТОФЕЙК"
      ? "text-sky-600"
      : "text-indigo-600";

  return (
    <div className=" m-4">
      <p className="text-xs text-gray-500">
        <span className={`text-xs ${colorCat} font-bold mr-4`}>
          {cardData.categories[0].title}
        </span>
        {format(new Date(cardData.date), "dd MMMM yyyy", { locale: uk })}
      </p>
      <Link href={cardData.url}>
        <h2 className="mt-4 text-gray-800 hover:text-violet-600 font-medium transition duration-300 ease-in-out">
          {cardData.title}
        </h2>
      </Link>
      <p className="text-xs font-bold text-gray-500 mt-4"># TAG</p>
    </div>
  );
}
