import * as d3 from "d3";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Chart({ width, hight, data, year, month }) {
  const [totalData, setTotalData] = useState([]);

  useEffect(() => {
    fetch(
      `https://vox-dashboard.ra-devs.tech/api/wpposts?&year=${year}&month=${month}`
    )
      .then((res) => res.json())
      .then((totalData) => {
        setTotalData(totalData);
      });
  }, [year, month]);

  console.log("YEAR:", year, "MONTH:", month, "totalData:", totalData.total);

  let dataMock2022 = [
    [1, 0],
    [2, 8],
    [3, 67],
    [4, 109],
    [5, 106],
    [6, 52],
    [7, 55],
    [8, 62],
    [9, 81],
    [10, 72],
    [11, 63],
    [12, 50],
  ];

  let dataMock2023 = [
    [1, 85],
    [2, 84],
    [3, 73],
    [4, 82],
    [5, 4],
    // [6, 0],
    // [7, 0],
    // [8, 0],
    // [9, 0],
    // [10, 0],
    // [11, 0],
    // [12, 0],
  ];
  let dataMock = year == 2022 ? dataMock2022 : dataMock2023;

  let margin = {
    t: 10,
    r: 10,
    l: 20,
    b: 30,
  };

  let xScale = d3
    .scaleLinear()
    .domain(d3.extent(dataMock.map((d) => d[0])))
    .range([margin.l, width - margin.r]);

  let yScale = d3
    .scaleLinear()
    .domain(d3.extent(dataMock.map((d) => d[1])))
    .range([hight - margin.b, margin.t]);

  let line = d3
    .line()
    .x((d) => xScale(d[0]))
    .y((d) => yScale(d[1]));
  let d = line(dataMock);
  if (data) {
    return (
      <svg className="" viewBox={`0 0 ${width} ${hight}`}>
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, type: "spring" }}
          d={d}
          fill="none"
          strokeWidth={2}
          stroke="currentColor"
        />
        {yScale.ticks(5).map((max) => (
          <g
            transform={`translate(0, ${yScale(max)})`}
            key={max}
            className="text-gray-400"
          >
            <line
              x1={margin.l}
              x2={width - margin.r}
              stroke="currentColor"
              strokeDasharray="1,8"
            />
            <text
              alignmentBaseline="middle"
              fill="currentColor"
              className="text-[10px]"
            >
              {max}
            </text>
          </g>
        ))}
        {/* X Scale */}
        {xScale.ticks().map((date, i) => {
          if (i % 2 == 0) {
            return (
              <g key={date}>
                <rect
                  fill="#5D63FF"
                  x={20 + i * 100}
                  opacity={0.1}
                  height={hight + 10}
                  width={100}
                />
                {/* <text x={20 + i * 100} y={hight } fill="red">
                  {i + 1}
                </text> */}
              </g>
            );
          }
        })}
      </svg>
    );
  }
}
