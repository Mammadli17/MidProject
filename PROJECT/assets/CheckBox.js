import * as React from "react"
import Svg, { Path } from "react-native-svg"
const CheckBox = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="none"
      strokeWidth={2}
      d="M2 2h20v20H2V2Zm3 11 5 4 9-11"
    />
  </Svg>
)
export default CheckBox
