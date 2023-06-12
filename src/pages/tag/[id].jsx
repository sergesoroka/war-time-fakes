import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import Header from "../../components/Header";
import Card from "../../components/Card";
import Spinner from "../../components/Spinner/Spinner";

export default function Tag() {
  const router = useRouter();
  const { locale } = router;

  const tagName = router.query.id;

  const taglang = locale === "ua" ? "title" : "title_ru";

  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch(`https://dashboard.voxukraine.org/api/wpposts?per_page=1500`)
      .then((response) => response.json())
      .then((json) => {
        const results = json.data.filter((item) => {
          return item && item.title;
        });
        setResults(results);
      });
  }, []);

  return (
    <div className="w-full">
      <Header />
      <div className="m-8 ml-10 flex flex-col justify-center text-base uppercase">
        # {tagName}
      </div>

      {results.length < 1 && <Spinner />}

      <div className="mx-10 grid gap-2 sm:grid-cols-1 lg:grid-cols-3">
        {results.length > 0 &&
          results.map((item, i) => {
            let tags = item.tags.map((tag) => tag[taglang]);
            if (tags.includes(tagName)) {
              return (
                <Card
                  key={item.id}
                  cardData={item}
                  // cat={item.categories[0].title}
                  index={i}
                />
              );
            }
          })}
      </div>
    </div>
  );
}
