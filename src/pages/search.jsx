import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Header from "../components/Header";
import Card from "../components/Card";

function Search() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(12);

  const router = useRouter();
  const { locale } = router;

  const titleLang = locale === "ua" ? "title" : "title_ru";
  const contentLang = locale === "ua" ? "content" : "content_ru";
  const placeholder = locale === "ua" ? "ПОШУК ФЕЙКІВ" : "ПОИСК ФЕЙКОВ";

  console.log(input);

  useEffect(() => {
    if (input !== "") {
      fetch(
        `https://vox-dashboard.ra-devs.tech/api/wpposts?per_page=${page}&search=${input}`
      )
        .then((response) => response.json())
        .then((json) => {
          const results = json.data.filter((item) => {
            return (
              (item &&
                item[titleLang] &&
                item[titleLang].toLowerCase().includes(input)) ||
              (item[contentLang] &&
                item[contentLang].toLowerCase().includes(input))
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
                // cat={item.categories[0].title}
                index={i}
              />
            );
          })}
      </div>
      {input && (
        <div className="mt-6 flex items-center justify-center">
          <button
            className="m-4 flex items-center justify-between rounded-full border-2 border-solid border-indigo-600 bg-indigo-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:border-indigo-500 hover:bg-indigo-500"
            onClick={() => setPage(page + 12)}
          >
            <span className="ml-1 mr-2">
              {locale === "ua" ? "Завантажити ще" : "Загрузить еще"}
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Search;
