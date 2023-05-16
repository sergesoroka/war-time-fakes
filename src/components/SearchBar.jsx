import { useState } from "react";

function SearchBar({ setResults, placeholder }) {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    if (value) {
      fetch(`https://vox-dashboard.ra-devs.tech/api/wpposts?search=${value}`)
        .then((response) => response.json())
        .then((json) => {
          const results = json.data.filter((item) => {
            return (
              item && item.title && item.title.toLowerCase().includes(value)
            );
          });
          setResults(results);
        });
    }
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div>
      <input
        placeholder={placeholder}
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
