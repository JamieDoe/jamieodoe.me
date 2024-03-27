import { useMemo, useRef } from "react";
import * as d3 from "d3";

export const PieChart = ({ width, height, data }) => {
  const colors = data.map(({ color }) => {
    return color;
  });
  const ref = useRef(null);

  const radius = Math.min(width - 2 * 0, height - 2 * 0) / 2;

  const pie = useMemo(() => {
    const pieGenerator = d3.pie().value((d) => d.value);
    return pieGenerator(data);
  }, [data]);

  const arcGenerator = d3.arc();

  const shapes = pie.map((grp, i) => {
    // First arc is for the Pie
    const sliceInfo = {
      innerRadius: 0,
      outerRadius: radius,
      startAngle: grp.startAngle,
      endAngle: grp.endAngle,
    };

    const slicePath = arcGenerator(sliceInfo);

    return (
      <g key={i}>
        <path d={slicePath} fill={colors[i]} />
      </g>
    );
  });

  return (
    <svg width={width} height={height}>
      <g ref={ref} transform={`translate(${width / 2}, ${height / 2})`}>
        {shapes}
      </g>
    </svg>
  );
};
