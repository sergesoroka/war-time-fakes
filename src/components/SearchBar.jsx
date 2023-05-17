import { useState } from "react";
import { useRouter } from "next/router";

function SearchBar({ setResults, placeholder }) {
  const [input, setInput] = useState("");

  const router = useRouter();
  const { locale } = router;
  const titleLang = locale === "ua" ? 'title' : 'title_ru'
  

  const fetchData = (value) => {
    if (value !== '') {
      fetch(`https://vox-dashboard.ra-devs.tech/api/wpposts?search=${value}`)
        .then((response) => response.json())
        .then((json) => {
          const results = json.data.filter((item) => {
            return (
              item && item[titleLang] && item[titleLang].toLowerCase().includes(value)
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
    <div>
      <input
        className="h-8 w-96 rounded-full px-4 focus:border-indigo-600 focus:outline-indigo-600"
        placeholder={placeholder}
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
