import * as React from "react"
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg"
const Category1 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={52}
    height={52}
    fill="none"
    {...props}
  >
    <Rect width={50} height={50} x={1} y={1} fill="#E7E2F3" rx={25} />
    <G clipPath="url(#a)">
      <Path
        fill="#4A3780"
        d="M31 17h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H17a1 1 0 0 1-1-1V18a1 1 0 0 1 1-1h4v-2h2v2h6v-2h2v2Zm-13 6v10h16V23H18Zm2 4h5v4h-5v-4Z"
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
export default Category1
