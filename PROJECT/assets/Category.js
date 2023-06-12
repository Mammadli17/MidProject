import * as React from "react"
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={52}
    height={52}
    fill="none"
    {...props}
  >
    <Rect width={50} height={50} x={1} y={1} fill="#DBECF6" rx={25} />
    <G clipPath="url(#a)">
      <Path
        fill="#194A66"
        d="M34 36H18a1 1 0 0 1-1-1V17a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1Zm-1-2V18H19v16h14ZM22 21h8v2h-8v-2Zm0 4h8v2h-8v-2Zm0 4h8v2h-8v-2Z"
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
export default SvgComponent
