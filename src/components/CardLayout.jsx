import { useRouter } from "next/router";
import Card from "./Card";
import Months from "./Months";
import Spinner from "../components/Spinner/Spinner";
import useMeasure from "react-use-measure";

import { months } from "../utills/monthNames";

export default function CardLayout({
  data,
  page,
  setPage,
  month,
  setMonth,
  setCategory,
  setYear,
  category,
  results,
  year,
}) {
  let [ref, bounds] = useMeasure();
  const router = useRouter();
  const { locale } = router;
  const monthLang = locale == "ua" ? "monthUk" : "monthRu";
  return (
    <div className="flex flex-col justify-center">
      <div className="my-8 items-center pl-6 pr-2 text-blue-500" ref={ref}>
        <Months setMonth={setMonth} month={month} setPage={setPage} />
      </div>

      {/* {(data && data.data.length < 1) && <Spinner />} */}

      <div className="grid  gap-2 sm:grid-cols-1 lg:grid-cols-3">
        {results.length < 1 &&
          data &&
          data.data.map((item, i) => {
            return (
              <Card
                key={item.id}
                cardData={item}
                // cat={item.categories[0].title}
                index={i}
              />
            );
          })}

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
      {data && data.data.length < 1 && (
        <div className="flex justify-center tracking-wider font-[9px] uppercase text-indigo-700 dark:text-gray-200">
          {locale == "ua" ? " немає даних" : " нет данных"} за{" "}
          {months.map((m) => m.id == month && m[monthLang])} {year}
        </div>
      )}
      {(year != 2023 || category != 1 || month != 1) && (
        <div className="flex justify-center">
          <button
            className={
              year == 2023 && category == 1
                ? " mb-4 mr-2 mt-4 cursor-pointer select-none rounded-full  border border-solid border-indigo-600 px-4 py-2 text-[9px] font-medium uppercase tracking-wider text-gray-700 hover:border-indigo-500 hover:bg-indigo-500 hover:text-white dark:text-gray-200 lg:text-[12px]"
                : " mb-4 mr-2 mt-4 select-none rounded-full border border-solid border-indigo-600 bg-indigo-600 px-4 py-2 text-[9px] font-medium uppercase  tracking-wider text-white lg:text-[12px]"
            }
            onClick={() => {
              setCategory(1);
              setMonth(0);
              setYear(2023);
            }}
          >
            {locale == "ua" ? "Скинути фільтри" : "Сбросить фильтры"}
          </button>
        </div>
      )}
    </div>
  );
}
