'use client'

export default function ChevronRightIcon(props: Readonly<SvgProps>) {
  const { width = 14, height = 14, ...rest } = props
  const validWidth = typeof width === 'number' && !isNaN(width) ? width : 14
  const validHeight = typeof height === 'number' && !isNaN(height) ? height : 14

  return (
    <svg
      width={validWidth}
      height={validHeight}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M3.99391 2.9428C3.15281 2.10171 4.45656 0.840563 5.255 1.68171L10.0058 6.43247C10.3842 6.76879 10.3842 7.35724 10.0058 7.69356L5.38142 12.36C4.54033 13.159 3.27918 11.8974 4.12033 11.0568L8.1141 7.06306L3.99391 2.9428Z"
        fill="currentColor"
      />
    </svg>
  )
}
