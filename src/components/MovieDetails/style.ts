import styled from "styled-components";

export const MovieDetailsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 20px;
`;

export const MovieDetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 20px;
`;

export const MovieDetailsTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
`;

export const MovieDetailsSubInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

export const MovieDetailsSubInfoText = styled.p`
  margin-right: 10px;
`;

export const MovieDetailsText = styled.p`
  margin-bottom: 20px;
`;

export const MovieDetailsButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

export const MovieDetailsButtonActive = styled.button`
  background-color: red;
`;
