import React, { Suspense } from "react";
import { useColors } from "picker/useColors";

const Picker = React.lazy(() => import("picker/Picker"));
const ColorList = React.lazy(() => import("colorlist/ColorList"));

function App() {
  const { color, onChangeHandler, onAddColor, colorList, clearColors } = useColors();
  return (
    <div>
      <h1 className="text-center py-4 bg-dark text-white">Color Picker</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="container text-center">
          <div className="row gx-5 g-2">
            <div className="col-4">
            <ColorList colorList={colorList} clearColors={clearColors} />
            </div>
            <div className="col-8">
              <Picker color={color} onChangeHandler={onChangeHandler} onAddColor={onAddColor}/>
            </div>   
          </div>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
