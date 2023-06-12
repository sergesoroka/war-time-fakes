import { useState, useEffect } from "react";
import CardLayout from "../components/CardLayout";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useMeasure from "react-use-measure";

export default function Home() {
  const [ref, bounds] = useMeasure();
  const [year, setYear] = useState(2023);
  const [month, setMonth] = useState(0);

  const [category, setCategory] = useState(1);

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const yearPlaceholder = year ? "&year=" + year : null;
  const monthPlaceholder = month !== 0 ? "&month=" + month : "";

  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(
      `https://dashboard.voxukraine.org/api/wpposts?per_page=80${yearPlaceholder}${monthPlaceholder}&category=${category}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [page, year, monthPlaceholder, category, yearPlaceholder, results]);

  return (
    <div className="w-full">
      <Header />
      <div className="mx-4 lg:flex lg:justify-between">
        <div className="mt-4 lg:w-1/6">
          <Sidebar
            year={year}
            setYear={setYear}
            category={category}
            setCategory={setCategory}
            setMonth={setMonth}
          />
        </div>
        <div className="w-5/6">
          <CardLayout
            data={data}
            page={page}
            setPage={setPage}
            month={month}
            setMonth={setMonth}
            results={results}
            year={year}
            category={category}
            setCategory={setCategory}
            setYear={setYear}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
