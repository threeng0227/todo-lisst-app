import * as React from "react"
import Svg, { Path } from "react-native-svg"
const IconHome = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#874ECF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M4.308 9.884v11.347a.77.77 0 0 0 .77.769h4.615v-6.539a1.154 1.154 0 0 1 1.154-1.154h3.846a1.154 1.154 0 0 1 1.154 1.154V22h4.615a.77.77 0 0 0 .77-.77V9.885"
    />
    <Path
      stroke="#874ECF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M23.54 12 13.292 2.19c-.24-.253-.802-.256-1.047 0L2 12M19.693 8.297V2.768h-2.308v3.318"
    />
  </Svg>
)
export default IconHome
