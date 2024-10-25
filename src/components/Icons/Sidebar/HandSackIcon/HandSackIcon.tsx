'use client'

export default function HandSackIcon(props: Readonly<SvgProps>) {
  const { width = 18, height = 22, ...rest } = props
  // Ensure width and height are valid numbers
  const validWidth = typeof width === 'number' && !isNaN(width) ? width : 18
  const validHeight = typeof height === 'number' && !isNaN(height) ? height : 22

  return (
    <svg
      width={validWidth}
      height={validHeight}
      viewBox="0 0 18 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M17.625 12.7813L12.9 16.5625C12.545 16.8459 12.1042 17.0002 11.65 17H0.5C0.367392 17 0.240215 16.9473 0.146447 16.8536C0.0526784 16.7598 0 16.6326 0 16.5V13.5C0 13.3674 0.0526784 13.2402 0.146447 13.1464C0.240215 13.0527 0.367392 13 0.5 13H2.23125L3.68438 11.8219C4.3392 11.2905 5.15673 11.0004 6 11H11C11.1458 10.9997 11.2898 11.0313 11.4221 11.0926C11.5543 11.1538 11.6716 11.2433 11.7657 11.3546C11.8598 11.4659 11.9284 11.5965 11.9667 11.7371C12.005 11.8778 12.0121 12.0251 11.9875 12.1688C11.9063 12.6594 11.4437 13 10.9469 13H8.5C8.36739 13 8.24021 13.0527 8.14645 13.1464C8.05268 13.2402 8 13.3674 8 13.5C8 13.6326 8.05268 13.7598 8.14645 13.8536C8.24021 13.9473 8.36739 14 8.5 14H12.1969C12.6513 14.0012 13.0924 13.8468 13.4469 13.5625L16.3344 11.2531C16.7219 10.9406 17.2969 10.9188 17.6656 11.2531C17.7744 11.3499 17.8606 11.4693 17.9185 11.6029C17.9763 11.7365 18.0042 11.8811 18.0004 12.0266C17.9965 12.1722 17.9609 12.3151 17.8961 12.4454C17.8312 12.5758 17.7387 12.6904 17.625 12.7813V12.7813Z"
          fill="currentColor"
        />
      </g>
      <g clipPath="url(#clip1)">
        <path
          opacity="0.4"
          d="M7.75004 1.875H10.25L11.1758 0.485937C11.2072 0.438878 11.2253 0.384177 11.228 0.327671C11.2307 0.271165 11.2181 0.214974 11.1914 0.165091C11.1647 0.115208 11.125 0.0735042 11.0765 0.0444293C11.0279 0.0153544 10.9724 -1.39459e-06 10.9159 0L7.08481 0C7.02823 -1.39459e-06 6.97272 0.0153544 6.92419 0.0444293C6.87566 0.0735042 6.83594 0.115208 6.80925 0.165091C6.78256 0.214974 6.76992 0.271165 6.77267 0.327671C6.77541 0.384177 6.79345 0.438878 6.82485 0.485937L7.75004 1.875ZM10.25 2.5H7.75004C3.79731 4.75391 4.0018 7.74687 4.0018 8.125C4.0018 9.16016 4.96098 10 6.14399 10H11.8565C13.0397 10 13.9987 9.16016 13.9987 8.125C13.9987 7.75391 14.1813 4.74141 10.25 2.5Z"
          fill="currentColor"
        />
        <path
          d="M10.582 2.03125V2.34375C10.582 2.38519 10.5656 2.42493 10.5363 2.45424C10.507 2.48354 10.4672 2.5 10.4258 2.5H7.57422C7.53278 2.5 7.49304 2.48354 7.46373 2.45424C7.43443 2.42493 7.41797 2.38519 7.41797 2.34375V2.03125C7.41797 1.98981 7.43443 1.95007 7.46373 1.92076C7.49304 1.89146 7.53278 1.875 7.57422 1.875H10.4258C10.4672 1.875 10.507 1.89146 10.5363 1.92076C10.5656 1.95007 10.582 1.98981 10.582 2.03125Z"
          fill="currentColor"
        />
        <path
          d="M7.67198 7.6273V6.21304H7.125V5.78433H7.67198V4.375H8.44563L9.21436 5.78433H9.7367V4.375H10.328V5.78433H10.875V6.21304H10.328V7.6273H9.55437L8.77579 6.21304H8.2633V7.6273H7.67198ZM8.2633 5.73998V5.78433H8.53926L8.25345 5.20779H8.24852L8.2633 5.73998ZM9.74655 6.8093H9.75641L9.7367 6.29681V6.21304H9.44596L9.46567 6.24261L9.74655 6.8093Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="18"
            height="16"
            fill="white"
            transform="translate(0 6)"
          />
        </clipPath>
        <clipPath id="clip1">
          <rect width="10" height="10" fill="white" transform="translate(4)" />
        </clipPath>
      </defs>
    </svg>
  )
}
