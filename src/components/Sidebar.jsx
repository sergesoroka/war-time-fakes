import { useRouter } from "next/router";

export default function Sidebar({ year, setYear, category, setCategory }) {
  const router = useRouter();
  const { locale } = router;

  return (
    <div>
      <ul className="mb-8 ml-4 text-[14px] font-bold text-gray-800">
        <li
          className={
            year === 2022
              ? "mt-1 select-none border-l-4 py-1 border-indigo-600 pl-2 tracking-wider text-indigo-600"
              : "mt-1 select-none cursor-pointer py-1 pl-3 tracking-wider transition duration-75 ease-out"
          }
          onClick={() => setYear(2022)}
        >
          2022
        </li>
        <li
          className={
            year === 2023
              ? "mt-1 select-none border-l-4 py-1 border-indigo-600 pl-2 tracking-wider text-indigo-600"
              : "mt-1 select-none cursor-pointer py-1 pl-3 tracking-wider"
          }
          onClick={() => setYear(2023)}
        >
          2023
        </li>
      </ul>
      <ul className="ml-4 text-[14px] font-medium text-gray-800">
        <div className="flex justify-start">
          <li
            className={
              category === 1
                ? "mb-3 select-none w-40 bg-indigo-600 px-3  py-1 text-white"
                : "mb-3 select-none cursor-pointer px-3 py-1 tracking-wider text-indigo-600"
            }
            onClick={() => setCategory(1)}
          >
            ФЕЙК
          </li>
          {category === 1 && (
            <svg
              width="9"
              height="29"
              viewBox="0 0 9 29"
              fill="#4f46e5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0H1.63829L9 14.5L1.63829 29H0V0Z" fill="#4f46e5" />
            </svg>
          )}
        </div>

        <div className="flex justify-start">
          <li
            className={
              category === 2
                ? "mb-3 select-none w-40 bg-red-600 px-3  py-1 text-white"
                : "mb-3 select-none cursor-pointer px-3 py-1 tracking-wider text-gray-800 text-red-600"
            }
            onClick={() => setCategory(2)}
          >
            НЕПРАВДА
          </li>
          {category === 2 && (
            <svg
              width="9"
              height="29"
              viewBox="0 0 9 29"
              fill="#dc2626"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0H1.63829L9 14.5L1.63829 29H0V0Z" fill="#dc2626" />
            </svg>
          )}
        </div>

        <div className="flex justify-start">
          <li
            className={
              category === 3
                ? "mb-3 select-none w-40 bg-amber-400 px-3  py-1 text-white"
                : "mb-3 select-none cursor-pointer px-3 py-1 tracking-wider text-amber-500"
            }
            onClick={() => setCategory(3)}
          >
            {locale === "ua" ? "МАНІПУЛЯЦІЯ" : "МАНИПУЛЯЦИЯ"}
          </li>
          {category === 3 && (
            <svg
              width="9"
              height="29"
              viewBox="0 0 9 29"
              fill="#fbbf24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0H1.63829L9 14.5L1.63829 29H0V0Z" fill="#fbbf24" />
            </svg>
          )}
        </div>
        {/* #0284c7 */}
        <div className="flex justify-start">
          <li
            className={
              category === 4
                ? "w-40 bg-sky-600 select-none px-3 py-1  text-white"
                : "cursor-pointer select-none px-3 py-1 tracking-wider  text-sky-600"
            }
            onClick={() => setCategory(4)}
          >
            ФОТОФЕЙК
          </li>
          {category === 4 && (
            <svg
              width="9"
              height="29"
              viewBox="0 0 9 29"
              fill="#0284c7"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0H1.63829L9 14.5L1.63829 29H0V0Z" fill="#0284c7" />
            </svg>
          )}
        </div>
      </ul>
    </div>
  );
}
