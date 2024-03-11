export const SvgColor = {
  star: (props: { isactive: boolean }) => (
    <svg
      viewBox="0 0 1024 1024"
      fill="white"
      height="2em"
      width="2em"
      strokeWidth={props.isactive ? 2 : 1}
    >
      <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z" />
    </svg>
  ),
  device: (props: { isactive: boolean }) => (
    <svg
      fill="none"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      height="2em"
      width="2em"
      strokeWidth={props.isactive ? 2 : 1}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M5 4 H9 A1 1 0 0 1 10 5 V9 A1 1 0 0 1 9 10 H5 A1 1 0 0 1 4 9 V5 A1 1 0 0 1 5 4 z" />
      <path d="M15 4 H19 A1 1 0 0 1 20 5 V9 A1 1 0 0 1 19 10 H15 A1 1 0 0 1 14 9 V5 A1 1 0 0 1 15 4 z" />
      <path d="M5 14 H9 A1 1 0 0 1 10 15 V19 A1 1 0 0 1 9 20 H5 A1 1 0 0 1 4 19 V15 A1 1 0 0 1 5 14 z" />
      <path d="M14 17h6m-3-3v6" />
    </svg>
  ),

  life: (props: { isactive: boolean }) => (
    <svg
      fill="white"
      viewBox="0 0 16 16"
      height="2em"
      width="2em"
      strokeWidth={props.isactive ? 2 : 1}
    >
      <path d="M12 0H4a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2zM4.5 3h5a.5.5 0 010 1h-5a.5.5 0 010-1zm0 2h7a.5.5 0 01.5.5v8a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5z" />
    </svg>
  ),

  automatic: (props: { isactive: boolean }) => (
    <svg
      fill="white"
      viewBox="0 0 16 16"
      height="2em"
      width="2em"
      strokeWidth={props.isactive ? 2 : 1}
    >
      <path d="M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z" />
      <path d="M6.271 5.055a.5.5 0 01.52.038l3.5 2.5a.5.5 0 010 .814l-3.5 2.5A.5.5 0 016 10.5v-5a.5.5 0 01.271-.445z" />
    </svg>
  ),

  menu: (props: { isactive: boolean }) => (
    <svg
      fill="none"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="2em"
      width="2em"
      {...props}
    >
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  ),
};
