import { useRouter } from "next/router";
import { useState, useEffect } from "react";

// https://vox-dashboard.ra-devs.tech/api/wpcategories

export default function Sidebar({
  year,
  setYear,
  category,
  setCategory,
  setPage,
}) {
  const router = useRouter();
  const { locale } = router;

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://vox-dashboard.ra-devs.tech/api/wpcategories`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  console.log(data);

  const categoriesList = data.map((cat) => {
    return (
      <div key={cat.id} className="flex justify-start">
        <li
          className={
            category === cat.id
              ? "mb-3 block w-40 select-none bg-indigo-600 px-3  py-1 text-white"
              : "mb-3 block cursor-pointer select-none px-3 py-1 tracking-wider text-gray-800"
          }
          onClick={() => {
            setCategory(cat.id);
            setPage(0);
          }}
        >
          {locale == 'ua' ? cat.title : cat.title_ru}
        </li>
        {category === cat.id && (
          <svg
            width="9"
            height="29"
            viewBox="0 0 9 29"
            fill="#dc2626"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0H1.63829L9 14.5L1.63829 29H0V0Z" fill="#4f46e5" />
          </svg>
        )}
      </div>
    );
  });

  return (
    <div>
      <ul className="mb-8 ml-4 text-[14px] font-bold text-gray-800">
        <li
          className={
            year === 2022
              ? "mt-1 select-none border-l-4 border-indigo-600 py-1 pl-2 tracking-wider text-indigo-600"
              : "mt-1 cursor-pointer select-none py-1 pl-3 tracking-wider transition duration-75 ease-out"
          }
          onClick={() => {
            setYear(2022);
            setPage(0);
          }}
        >
          2022
        </li>
        <li
          className={
            year === 2023
              ? "mt-1 select-none border-l-4 border-indigo-600 py-1 pl-2 tracking-wider text-indigo-600"
              : "mt-1 cursor-pointer select-none py-1 pl-3 tracking-wider"
          }
          onClick={() => {
            setYear(2023);
            setPage(0);
          }}
        >
          2023
        </li>
      </ul>
      <ul className="ml-4 text-[14px] font-medium text-gray-800">
        {categoriesList}
      </ul>
    </div>
  );
}
