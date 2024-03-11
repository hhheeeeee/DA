import styled from "styled-components";
import navConfig from "./config-smartbottomnavbar";
import { useState } from "react";

function SmartBottomNavbar() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <NavContainer>
      {navConfig.map(
        (
          item: {
            title: string;
            path: string;
            icon: (props: { isactive: boolean }) => JSX.Element;
          },
          index: number
        ) => {
          const isActiveItem = item.path.includes(item.path); // 현재 path를 포함하는지 여부 확인
          const isOnlyActive = activeIndex === index; // 무조건 하나만 active 상태인지 여부 확인
          const isactive = isActiveItem && isOnlyActive; // path 일치하고, 무조건 하나만 active인 경우에만 true

          return (
            <div
              key={index}
              onClick={() => handleItemClick(index)}
              // isactive={isactive}
            >
              {item.icon({ isactive })}
            </div>
          );
        }
      )}
    </NavContainer>
  );
}

export default SmartBottomNavbar;

const NavContainer = styled.div`
  width: 100vw;
  height: 12dvh;
  background-color: #94a1cb;
  position: absolute;
  bottom: 0;
  display: flex;
  box-sizing: border-box;
  padding-top: 1rem;
  justify-content: space-around;
`;
