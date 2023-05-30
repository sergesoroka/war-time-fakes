import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";

export default function About() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    fetch(`https://vox-dashboard.ra-devs.tech/api/wppages`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  const titleLang = locale == "ua" ? "title" : "title_ru";
  const contentLang = locale == "ua" ? "content" : "content_ru";

  return (
    <div className="w-full">
      <Header />
      <div className="mx-16 my-8 flex flex-col justify-center">
        <h1 className="mb-8 text-[26px]">
          {data && (
            <div
              dangerouslySetInnerHTML={{ __html: data.data[0][titleLang] }}
            />
          )}
        </h1>
        {data && (
          <div
            dangerouslySetInnerHTML={{ __html: data.data[0][contentLang] }}
          />
        )}
      </div>
    </div>
  );
}
