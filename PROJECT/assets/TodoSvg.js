import * as React from "react"
import Svg, { Path } from "react-native-svg"
const TodoSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={30}
    height={30}
    viewBox="0 0 64 64"
    {...props}
  >
    <Path
      // fill="none"
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M16 24h22M16 34h22M16 44h22M16 54h22M12 24H8M12 34H8M12 44H8M12 54H8M14 8H1v55h44V8H32"
    />
    <Path
    
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M27 5V1h-8v4h-4l-2 8h20l-2-8zM55 1v53l4 8 4-8V1zM55 11h8"
    />
  </Svg>
)
export default TodoSvg
