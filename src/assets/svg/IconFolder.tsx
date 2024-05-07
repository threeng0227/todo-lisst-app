import * as React from "react"
import Svg, { Path } from "react-native-svg"
const IconFolder = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={21}
    fill="none"
    {...props}
  >
    <Path
      stroke="#874ECF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M4 19.143h16c1.105 0 2-.853 2-1.905V6.762c0-1.052-.895-1.905-2-1.905h-9L9.297 2.424A1.014 1.014 0 0 0 8.465 2H4c-1.105 0-2 .853-2 1.905v13.333c0 1.052.895 1.905 2 1.905Z"
    />
  </Svg>
)
export default IconFolder
