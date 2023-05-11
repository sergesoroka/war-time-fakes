import { useEffect, useState } from "react";
import Card from "./Card";
import Months from "./Months";
import Chart from "./Chart";
import useMeasure from "react-use-measure";

export default function CardLayout({ data, page, setPage, month, setMonth }) {
  let [ref, bounds] = useMeasure();

  // /api/wpposts?year=2023&month=5&per_page=6&tag=2&category=2&search=string

  // useEffect(() => {
  //   fetch(`https://vox-dashboard.ra-devs.tech/api/wpposts?page=${page}&year=2023`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       setLoading(false);
  //     });
  // }, [page]);

  return (
    <div>
      <div className="items-center px-6 text-blue-500 my-8" ref={ref}>
        <Months setMonth={setMonth} month={month} />
      </div>

      <div
        className="h-60 items-center ml-2 px-4 bg-indigo-50 text-blue-500 my-8"
        ref={ref}
      >
        <Chart width={bounds.width} hight={bounds.height} data={data} />
      </div>
      <div className="grid gap-2 lg:grid-cols-3 sm:grid-cols-1">
        {data
          ? data.data.map((item) => (
              <Card
                key={item.id}
                cardData={item}
                cat={item.categories[0].title}
              />
            ))
          : "loading"}
      </div>
      <div className="flex justify-center items-baseline mt-6">
        {page > 1 && (
          <button
            className="flex justify-between border-solid text-xs font-medium text-white uppercase tracking-wider border-2 bg-indigo-600 hover:bg-indigo-500  hover:border-indigo-500 border-indigo-600 m-4 rounded-full px-2 py-1"
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
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.0001 1.50001L8.50005 0L1.50005 7L1.50001 6.99995L0 8.49996L4.53289e-05 8.50001L7.68805e-06 8.50004L1.50002 10.0001L1.50005 10L8.50004 17L10.0001 15.5L3.00006 8.50001L10.0001 1.50001Z"
                fill="white"
                fill-opacity="0.9"
              />
            </svg>

            <span className="mr-1 ml-2">Попередня</span>
          </button>
        )}
        <p className="font-medium w-40 text-center text-indigo-500">
          <span className="text-[16px] ">Сторінка:</span> {page}
        </p>
        <button
          className="flex justify-between border-solid text-xs font-medium text-white uppercase tracking-wider border-2 bg-indigo-600 hover:bg-indigo-500  hover:border-indigo-500 border-indigo-600 m-4 rounded-full px-2 py-1"
          onClick={() => setPage(page + 1)}
        >
          <span className="mr-2 ml-1">Наступна</span>
          <svg
            width="10"
            height="17"
            viewBox="0 0 10 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.53674e-07 1.50001L1.50001 0L8.50001 7L8.50005 6.99995L10.0001 8.49996L10 8.50001L10.0001 8.50004L8.50005 10.0001L8.50001 10L1.50002 17L8.58307e-06 15.5L7 8.50001L9.53674e-07 1.50001Z"
              fill="white"
              fill-opacity="0.9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
