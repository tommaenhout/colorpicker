import React, {  useState } from "react";

const getColorList = () => {
  const colorList = localStorage.getItem("colorList");
  if (colorList) {
    return JSON.parse(colorList);
  }
  return [];
}

const getFirstColor = () => {
  const colorList = getColorList();
  if (colorList.length > 0) {
    return colorList[0];
  }
  return "#000000";
}

export function useColors() {
   const [color, setColor] = useState<string>(getFirstColor());
   const [colorList, setColorList] = useState<string[]>(getColorList());
 
   const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
     setColor(e.target.value);
   };
 
   const onAddColor = () => {
     setColorList([...colorList, color]);
     localStorage.setItem("colorList", JSON.stringify([...colorList, color]));
   };

   const clearColors = () => {
     localStorage.clear();
     setColorList([]);
     setColor("#000000");
   };

   const copyToClipboard = () => {
     navigator.clipboard.writeText(color);
   };

  return { color, colorList, onChangeHandler, onAddColor, clearColors, copyToClipboard };
}
