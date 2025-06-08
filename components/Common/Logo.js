// https://react-svgr.com/playground/
import * as React from 'react'

const Logo = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 100 100'
    style={{
      opacity: 1
    }}
    {...props}
  >
    <g transform='translate(0.000000,100) scale(0.080000,-0.080000)'>
        <path
          d="M187.8 187.2 26.1 348.4c-34.8 34.7-34.8 90.9 0 125.6 34.8 34.7 91.2 34.7 126 0l161.7-161.1c34.8-34.7 34.8-90.9 0-125.6-34.8-34.7-91.3-34.7-126-.1z"
          style={{
            fill: "currentColor",
          }}
        />
        <path
          d="m152.2 26 161.7 161.1c34.8 34.7 34.8 90.9 0 125.6-34.8 34.7-91.2 34.7-126 0L26.2 151.6C-8.6 116.9-8.6 60.7 26.2 26c34.8-34.7 91.2-34.7 126 0z"
          style={{
            fill: "currentColor",
          }}
        />
      </g>
  </svg>
)

export default Logo
