import { useRouter } from "next/router";
import Card from "./Card";
import Months from "./Months";
import Chart from "./Chart";
import useMeasure from "react-use-measure";

export default function CardLayout({ data, page, setPage, month, setMonth }) {
  let [ref, bounds] = useMeasure();
  const router = useRouter();
  const { locale } = router;

  return (
    <div>
      <div className="my-8 items-center px-6 text-blue-500" ref={ref}>
        <Months setMonth={setMonth} month={month} />
      </div>

      <div
        className="my-8 ml-2 h-60 items-center bg-indigo-50 px-4 text-blue-500"
        ref={ref}
      >
        <Chart width={bounds.width} hight={bounds.height} data={data} />
      </div>
      {data && data.data.length < 1 && (
        <div className="flex justify-center text-indigo-700">Немає даних</div>
      )}

      <div className="grid h-[420px] gap-2 sm:grid-cols-1 lg:grid-cols-3">
        {data
          ? data.data.map((item, i) => {
              return (
                <Card
                  key={item.id}
                  cardData={item}
                  cat={item.categories[0].title}
                  index={i}
                />
              );
            })
          : "loading"}
      </div>
      <div className="mt-6 flex items-baseline justify-center">
        
          <button
            className={` ${page < 1 && 'invisible'} m-4 flex justify-between rounded-full border-2 border-solid border-indigo-600 bg-indigo-600 px-4 py-2 text-xs  font-medium uppercase tracking-wider text-white hover:border-indigo-500 hover:bg-indigo-500`}
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
          <span className="w-4 ml-2">{page}</span>
        </p>
        <button
          className="m-4 flex justify-between rounded-full border-2 border-solid border-indigo-600 bg-indigo-600 px-4 py-2 text-xs  font-medium uppercase tracking-wider text-white hover:border-indigo-500 hover:bg-indigo-500"
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
