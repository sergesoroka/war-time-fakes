export default function Sidebar({ year, setYear, category, setCategory }) {
 
  return (
    <div>
      <ul className="text-gray-800 text-[14px] font-medium ml-4 mb-8">
        <li
          className={
            year === 2022
              ? "mt-2 pl-2 border-l-4 border-indigo-600 text-indigo-600 tracking-wider"
              : "mt-2 pl-3 cursor-pointer tracking-wider transition duration-75 ease-out"
          }
          onClick={() => setYear(2022)}
        >
          2022
        </li>
        <li
          className={
            year === 2023
              ? "mt-2 pl-2 border-l-4 border-indigo-600 text-indigo-600 tracking-wider"
              : "mt-2 pl-3 cursor-pointer tracking-wider"
          }
          onClick={() => setYear(2023)}
        >
          2023
        </li>
      </ul>
      <ul className="text-gray-800 text-[14px] font-medium ml-4">
        <div className="flex justify-start">
          <li
            className={
              category === 1
                ? "w-40 bg-indigo-600 text-white px-3  py-1"
                : "px-3  py-1 cursor-pointer tracking-wider"
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
                ? "w-40 bg-red-600 text-white px-3  py-1"
                : "px-3 text-gray-800 py-1 cursor-pointer tracking-wider"
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
                ? "w-40 bg-amber-400 text-white px-3  py-1"
                : "px-3 text-gray-800 py-1 cursor-pointer tracking-wider"
            }
            onClick={() => setCategory(3)}
          >
            МАНІПУЛЯЦІЯ
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
                ? "w-40 bg-sky-600 text-white px-3  py-1"
                : "px-3 text-gray-800 py-1 cursor-pointer tracking-wider"
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
