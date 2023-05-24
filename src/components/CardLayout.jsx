import { useRouter } from "next/router";
import Card from "./Card";
import Months from "./Months";
import Chart from "./Chart";
import useMeasure from "react-use-measure";

export default function CardLayout({
  data,
  page,
  setPage,
  month,
  setMonth,
  results,
  year,
}) {
  let [ref, bounds] = useMeasure();
  const router = useRouter();
  const { locale } = router;


  return (
    <div className="flex flex-col justify-center">
      <div className="my-8 items-center pl-6 pr-2 text-blue-500" ref={ref}>
        <Months setMonth={setMonth} month={month} setPage={setPage} />
      </div>

      {/* <div className="my-8 ml-2 h-60 items-center px-4 text-blue-500" ref={ref}>
        <Chart
          width={bounds.width}
          hight={bounds.height}
          data={data}
          year={year}
          month={month}
        />
      </div> */}
     

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
        <div className="flex justify-center  font-medium uppercase text-indigo-700 dark:text-gray-200">{year}, {month} {locale == 'ua' ? ' немає даних' : ' нет данных'}</div>
      )}
      {/* {(data && data.data.length > 5) && (
        <div className="mt-6 flex items-center lg:justify-center">
          <button
            className={` ${
              page < 2 && "invisible"
            } m-4 flex items-center justify-between rounded-full border-2 border-solid border-indigo-600 bg-indigo-600 px-2 lg:px-4 py-1 lg:py-2 text-[11px] lg:text-xs font-bold uppercase tracking-wider text-white hover:border-indigo-500 hover:bg-indigo-500`}
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
            <span className="text-[16px] hidden lg:inline-block ">
              {locale === "ua" ? "Сторінка:" : "Страница:"}
            </span>
            <span className="ml-2 w-4">{page}</span>
          </p>
          {data && !data.data.length < 1 && (
            <button
              className="m-4 flex items-center justify-between rounded-full border-2 border-solid border-indigo-600 bg-indigo-600 px-2 lg:px-4 py-1 lg:py-2 text-[11px] lg:text-xs font-bold uppercase tracking-wider text-white hover:border-indigo-500 hover:bg-indigo-500"
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
          )}
        </div>
      )} */}
    </div>
  );
}
