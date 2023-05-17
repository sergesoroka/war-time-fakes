import { useState } from "react";
import { useRouter } from "next/router";

import Header from "../components/Header";
import Card from "../components/Card";

function Search() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const router = useRouter();
  const { locale } = router;

  const titleLang = locale === "ua" ? "title" : "title_ru";
  const placeholder = locale === "ua" ? "ПОШУК ФЕЙКІВ" : "ПОИСК ФЕЙКОВ";
  console.log(results);
  const fetchData = (value) => {
    if (value !== "") {
      fetch(`https://vox-dashboard.ra-devs.tech/api/wpposts?search=${value}`)
        .then((response) => response.json())
        .then((json) => {
          const results = json.data.filter((item) => {
            return (
              item &&
              item[titleLang] &&
              item[titleLang].toLowerCase().includes(value)
            );
          });
          setResults(results);
        });
    } else {
      setResults([]);
    }
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
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
                cat={item.categories[0].title}
                index={i}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Search;
