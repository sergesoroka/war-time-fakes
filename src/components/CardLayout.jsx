import { useEffect, useState } from "react";
import Card from "./Card";
import Months from "./Months";
import Chart from "./Chart";
import useMeasure from "react-use-measure";

export default function CardLayout() {
  let [ref, bounds] = useMeasure();
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(1);


  // const defaultMonth = { id: 1, monthUk: "Січень", monthRu: "Январь" };
  const [month, setMonth] = useState("Січень");


  console.log(month);
  useEffect(() => {
    fetch(`https://vox-dashboard.ra-devs.tech/api/wpposts?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [page]);

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
          ? data.data.map((item) => <Card key={item.id} cardData={item} />)
          : "loading"}
      </div>
      <div className="flex justify-center items-baseline mt-6">
        {page > 1 && (
          <button
            className="border-solid text-xs font-medium text-white uppercase tracking-wider border-2 bg-indigo-600 hover:bg-indigo-500  hover:border-indigo-500 border-indigo-600 m-4 rounded-full px-4 py-1"
            onClick={() => setPage(page - 1)}
          >
            Попередня
          </button>
        )}
        <p className="font-medium w-20 text-center text-indigo-500">
          Page: {page}
        </p>
        <button
          className="border-solid text-xs font-medium text-white uppercase tracking-wider border-2 bg-indigo-600 hover:bg-indigo-500  hover:border-indigo-500 border-indigo-600 m-4 rounded-full px-4 py-1"
          onClick={() => setPage(page + 1)}
        >
          Наступна
        </button>
      </div>
    </div>
  );
}
