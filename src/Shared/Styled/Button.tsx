import styled from "styled-components";
import { ButtonType } from "../Enums/ButtonType";

const getColor = (type: ButtonType) => {
  switch (type) {
    case ButtonType.danger:
      return { bg: "var(--c-red)", fg: "var(--c-white-green)" };
    case ButtonType.primary:
      return { bg: "var(--c-light-green)", fg: "var(--c-dark-green)" };
    case ButtonType.secondary:
      return { bg: "var(--c-white-green)", fg: "var(--c-mid-green)" };
  }
};

export const Button = styled.button<{ $type: ButtonType }>`
  background: ${(props) => getColor(props.$type).bg};
  border: none;
  color: ${(props) => getColor(props.$type).fg};
  padding: 6px;
  cursor: pointer;
  border-radius: 3px;
  font-family: var(--f-quicks);
  font-weight: 700;
  &:hover {
    filter: brightness(0.85);
  }
`;
