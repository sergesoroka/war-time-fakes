import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import Header from "../../components/Header";
import Card from "../../components/Card";

export default function Tag() {
  const router = useRouter();
  const { path } = router;

  const tagName = router.query.id;

  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch(`https://vox-dashboard.ra-devs.tech/api/wpposts?per_page=80`)
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
      <div className="m-8 ml-10 flex flex-col justify-center text-lg">
        # {tagName}
      </div>

      <div className="mx-10 grid gap-2 sm:grid-cols-1 lg:grid-cols-3">
        {results.length > 0 &&
          results.map((item, i) => {
            let tags = item.tags.map((tag) => tag.title);
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
