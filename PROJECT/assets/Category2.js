import * as React from "react"
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg"
const Category2 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={52}
    height={52}
    fill="none"
    {...props}
  >
    <Rect width={50} height={50} x={1} y={1} fill="#FEF5D3" rx={25} />
    <G clipPath="url(#a)">
      <Path
        fill="#403100"
        d="M27 30.938V33h5v2H20v-2h5v-2.062A8 8 0 0 1 18 23v-6h16v6a8 8 0 0 1-7 7.938ZM20 19v4a6 6 0 1 0 12 0v-4H20Zm-5 0h2v4h-2v-4Zm20 0h2v4h-2v-4Z"
      />
    </G>
    <Rect
      width={50}
      height={50}
      x={1}
      y={1}
      stroke="#fff"
      strokeWidth={2}
      rx={25}
    />
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M14 14h24v24H14z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default Category2
