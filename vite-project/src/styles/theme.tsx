import { DefaultTheme } from "styled-components";

// 반응형 디자인을 위한 픽셀 컨버팅 함수
const pixelToRem = (size: number): string => `${size / 16}rem`;

// font size를 객체로 반환해주자.
const fontSizes = {
  title: pixelToRem(60),
  subtitle: pixelToRem(30),
  paragraph: pixelToRem(18),
};

// 자주 사용하는 색을 객체로 만들자.
const colors = {
  black: "#000000",
  grey: "#999999",
  pointcolor: "#42A981",
  blue: "#0070cc",
};

// 자주 사용하는 스타일 속성을 theme으로 만들어보자.
const common = {
  flexCenter: `
    display: flex;
    justify-contents: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  `,
};

// theme 객체에 감싸서 반환한다.

export type FontsSizesType = typeof fontSizes;
export type ColorsType = typeof colors;
export type CommonType = typeof common;

export const theme: DefaultTheme = {
  fontSizes,
  colors,
  common,
};
