import React from "react";
import dynamic from "next/dynamic";
import countryCode from "../../constant/countryCode";

const Plot = dynamic<any>(import("react-plotly.js"), {
  ssr: false,
});

function Location(props: any) {
  const { mapData } = props;

  const sizeArray: number[] = mapData.map(
    (data: { id: string; value: number }) => data.value
  );
  let total = 0;
  mapData.forEach((data: { id: string; value: number }) => {
    total += data.value;
  });

  const locationArray = mapData.map((data: { id: string; value: number }) => {
    const y = countryCode.find((item) => item.country === data.id);
    return y?.code;
  });

  const data = [
    {
      type: "scattergeo",
      mode: "markers",
      locations: locationArray,
      marker: {
        size: sizeArray,
        color: sizeArray,
        cmin: 0,
        cmax: total || 50,
        colorscale: [
          [0, "rgb(255,255,255)"],
          [1, "rgb(24,157,253)"],
        ],
        colorbar: {
          title: "",
          ticksuffix: "",
          showticksuffix: "last",
          outlinewidth: 0,
        },
        line: {
          color: "#189DFD",
        },
      },
      name: "",
    },
  ];

  const layout = {
    geo: {
      //   scope: "africa",
      scope: "world",
      resolution: 50,
    },
    width: 350,
    height: 300,
  };
  return (
    <Plot data={data} layout={layout} config={{ displayModeBar: false }} />
  );
}
export default Location;
