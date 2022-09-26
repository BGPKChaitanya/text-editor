import { useState } from "react";
import { VscBold } from "react-icons/vsc";
import { GoItalic } from "react-icons/go";
import { AiOutlineUnderline } from "react-icons/ai";

import {
  CustomText,
  BoldButton,
  ItalicButton,
  UnderlineButton,
} from "./StyledComponents";

const TextEdit = () => {
  const [showBold, setShowBold] = useState(false);
  const [showItalic, setShowItalic] = useState(false);
  const [showUnderLine, setShowUnderLine] = useState(false);

  const changeBold = () => setShowBold(!showBold);
  const changeItalic = () => setShowItalic(!showItalic);
  const changeUnderline = () => setShowUnderLine(!showUnderLine);

  return (
    <div>
      <h1>Text Editor</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
        alt="text editor"
      />
      <ul>
        <li>
          <BoldButton
            type="button"
            onClick={changeBold}
            data-testid="bold"
            showBold={showBold}
          >
            <VscBold size={25} />
          </BoldButton>
        </li>
        <li>
          <ItalicButton
            type="button"
            onClick={changeItalic}
            data-testid="italic"
            showItalic={showItalic}
          >
            <GoItalic size={25} />
          </ItalicButton>
        </li>
        <li>
          <UnderlineButton
            type="button"
            onClick={changeUnderline}
            data-testid="underline"
            showUnderLine={showUnderLine}
          >
            <AiOutlineUnderline size={25} />
          </UnderlineButton>
        </li>
      </ul>
      <CustomText
        rows={15}
        cols={50}
        showBold={showBold}
        showItalic={showItalic}
        showUnderLine={showUnderLine}
      />
    </div>
  );
};

export default TextEdit;
