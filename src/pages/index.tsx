import { useState, useEffect } from "react";
import CardLayout from "../components/CardLayout";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useMeasure from "react-use-measure";

export default function Home() {
  let [ref, bounds] = useMeasure();
  const [year, setYear] = useState(2023);
  const [month, setMonth] = useState(1);

  const [category, setCategory] = useState(1);

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const yearPlaceholder = year ? '&year=' + year : null

  useEffect(() => {
    fetch(
      `https://vox-dashboard.ra-devs.tech/api/wpposts?page=${page}${yearPlaceholder}&month=${month}&category=${category}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [page, year, month, category]);

  return (
    <div className="w-full">
      <Header />
      <div className="flex justify-between mx-4">
        <div className="w-1/6 mt-4">
          <Sidebar
            year={year}
            setYear={setYear}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div className="w-5/6">
          <CardLayout
            data={data}
            page={page}
            setPage={setPage}
            month={month}
            setMonth={setMonth}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
