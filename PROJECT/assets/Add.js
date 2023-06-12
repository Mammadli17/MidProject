import * as React from "react"
import Svg, { G, Rect, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */
const Add = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    viewBox="0 0 24 24"
    {...props}
  >
    <G

      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <Rect
        width={20}
        height={20}
        x={2}
        y={2}
        data-name="--Rectangle"
        rx={2}
        ry={2}
      />
      <Path d="M15.5 12h-7M12 15.5v-7" />
    </G>
  </Svg>
)
export default Add