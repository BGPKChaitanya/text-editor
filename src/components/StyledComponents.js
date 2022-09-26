import styled from "styled-components";

export const CustomText = styled.textarea`
  font-weight:  ${(props) => (props.showBold ? "bold" : "normal")}};
  text-decoration: ${(props) =>
    props.showUnderLine ? "underline" : "normal"}};
  font-style:  ${(props) => (props.showItalic ? "italic" : "normal")}};
`;

export const BoldButton = styled.button`
    color: ${(props) => (props.showBold ? "#faff00" : "#f1f5f9")}};
`;
export const ItalicButton = styled.button`
    color: ${(props) => (props.showItalic ? "#faff00" : "#f1f5f9")}};
`;
export const UnderlineButton = styled.button`
    color: ${(props) => (props.showUnderLine ? "#faff00" : "#f1f5f9")}};
`;
