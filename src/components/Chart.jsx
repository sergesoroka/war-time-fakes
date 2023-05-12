import * as d3 from "d3";
import { motion } from "framer-motion";
import { format } from "date-fns";

export default function Chart({ width, hight, data }) {
  let dataMock = [
    [1, 10],
    [2, 50],
    [3, 70],
    [4, 100],
    [5, 30],
    [6, 150],
    [7, 10],
    [8, 30],
    [9, 20],
    [10, 50],
    [11, 30],
    [12, 50],
  ];

  let margin = {
    t: 10,
    r: 10,
    l: 20,
    b: 10,
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
              <rect
                key={date}
                fill="#5D63FF"
                x={20 + i * 100}
                opacity={0.1}
                height={hight}
                width={100}
              />
            );
          }
        })}
      </svg>
    );
  }
}
