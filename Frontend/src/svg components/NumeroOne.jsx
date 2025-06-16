import * as React from "react"
const NumeroOne = ({color}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.57 11.57">
    <circle
      cx={5.79}
      cy={5.79}
      r={5.79}
      style={{
        fill: color,
      }}
    />
    <text
      style={{
        fill: "#fff",
        fontFamily: "SackersGothicStd-Heavy,Sackers Gothic Std",
        fontSize: "9.89px",
      }}
      transform="translate(2.74 8.79)"
    >
      <tspan x={0} y={0}>
        {"1"}
      </tspan>
    </text>
  </svg>
)
export default NumeroOne