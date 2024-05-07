import * as React from "react"
import Svg, { Path } from "react-native-svg"
const IconWork = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#874ECF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M2 9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9ZM16 7V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3"
    />
    <Path
      stroke="#874ECF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="m22 12-9.608 1.922a2.003 2.003 0 0 1-.784 0L2 12"
    />
  </Svg>
)
export default IconWork
