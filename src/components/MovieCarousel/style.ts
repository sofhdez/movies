import styled from "styled-components";

export const ContainerSlider = styled.div`
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
`;

export const Slider = styled.div`
  display: flex;
  white-space: nowrap;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`;

export const Item = styled.div`
  scroll-snap-align: start;
  flex-shrink: 0;
`;
