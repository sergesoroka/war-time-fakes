import { useState } from "react";
import CardLayout from "../components/CardLayout";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import useMeasure from "react-use-measure";

export default function Home() {
  let [ref, bounds] = useMeasure();
  const [year, setYear] = useState(2022);
  const [category, setCategory] = useState("БЕЗПІДСТАВНО");

  return (
    <div className="w-full">
      <>header</>
    <div className="flex justify-between mx-8">
      <div className="w-1/6">
        <Sidebar
          year={year}
          setYear={setYear}
          category={category}
          setCategory={setCategory}
        />
      </div>
      <div className="w-5/6">
        {/* <div className="h-40 items-center px-6 text-blue-500 m-8" ref={ref}>
        <Chart width={bounds.width} hight={bounds.height} />
      </div> */}
        <CardLayout />
      </div>
    </div>
    <Footer />
    </div>
  );
}

// export async function getServerSideProps() {

//   // Fetch data from external API
//   const res = await fetch(
//     `https://vox-dashboard.ra-devs.tech/api/wpposts?page=3`
//   );
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }
