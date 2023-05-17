import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Header from "../components/Header";
import Card from "../components/Card";

function Search() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(0);

  const router = useRouter();
  const { locale } = router;

  const titleLang = locale === "ua" ? "title" : "title_ru";
  const placeholder = locale === "ua" ? "ПОШУК ФЕЙКІВ" : "ПОИСК ФЕЙКОВ";

  useEffect(() => {
    if (input !== "") {
      fetch(
        `https://vox-dashboard.ra-devs.tech/api/wpposts?page=${page}&search=${input}`
      )
        .then((response) => response.json())
        .then((json) => {
          const results = json.data.filter((item) => {
            return (
              item &&
              item[titleLang] &&
              item[titleLang].toLowerCase().includes(input)
            );
          });
          setResults(results);
        });
    } else {
      setResults([]);
    }
  }, [page, input, titleLang]);

  const handleChange = (value) => {
    setInput(value);
  };
  return (
    <div className="w-full">
      <Header />
      <div className="flex justify-center p-10">
        <input
          className="font-sm h-10 w-full rounded-full border-2 border-solid border-gray-200 px-4 focus:outline-indigo-600"
          placeholder={placeholder}
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <div className="mx-10 grid gap-2 sm:grid-cols-1 lg:grid-cols-3">
        {results.length > 0 &&
          results.map((item, i) => {
            return (
              <Card
                search={"search"}
                key={item.id}
                cardData={item}
                cat={item.categories[0].title && item.categories[0].title}
                index={i}
              />
            );
          })}
      </div>
      <div className="mt-6 flex items-center justify-center">
        <button
          className={` ${
            page < 1 && "invisible"
          } m-4 flex items-center justify-between rounded-full border-2 border-solid border-indigo-600 bg-indigo-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:border-indigo-500 hover:bg-indigo-500`}
          onClick={() => setPage(page - 1)}
        >
          <svg
            width="10"
            height="17"
            viewBox="0 0 10 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.0001 1.50001L8.50005 0L1.50005 7L1.50001 6.99995L0 8.49996L4.53289e-05 8.50001L7.68805e-06 8.50004L1.50002 10.0001L1.50005 10L8.50004 17L10.0001 15.5L3.00006 8.50001L10.0001 1.50001Z"
              fill="white"
              fillOpacity="0.9"
            />
          </svg>

          <span className="ml-2 mr-1">
            {locale === "ua" ? "Попередня" : "Предыдущая"}
          </span>
        </button>

        <p className="w-40 text-center font-medium text-indigo-500">
          <span className="text-[16px] ">
            {locale === "ua" ? "Сторінка:" : "Страница:"}
          </span>
          <span className="ml-2 w-4">{page + 1}</span>
        </p>
        <button
          className="m-4 flex items-center justify-between rounded-full border-2 border-solid border-indigo-600 bg-indigo-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:border-indigo-500 hover:bg-indigo-500"
          onClick={() => setPage(page + 1)}
        >
          <span className="ml-1 mr-2">
            {locale === "ua" ? "Наступна" : "Следующая"}
          </span>
          <svg
            width="10"
            height="17"
            viewBox="0 0 10 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.53674e-07 1.50001L1.50001 0L8.50001 7L8.50005 6.99995L10.0001 8.49996L10 8.50001L10.0001 8.50004L8.50005 10.0001L8.50001 10L1.50002 17L8.58307e-06 15.5L7 8.50001L9.53674e-07 1.50001Z"
              fill="white"
              fillOpacity="0.9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Search;
