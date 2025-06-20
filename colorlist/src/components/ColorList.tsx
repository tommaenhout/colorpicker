import EmptyState from "./EmptyState";

interface IColorList {
  colorList: string[];
  clearColors: () => void;
}

const ColorList = ({ colorList, clearColors }: IColorList) => {
  return (
    <div>
      {!colorList || colorList.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          <button onClick={clearColors} className="btn btn-danger mb-2 w-50">Clear</button>
          {colorList.map((color, index) => (
            <div
              className="w-100 rounded d-flex align-items-center justify-content-center"
              key={index}
              style={{
                backgroundColor: color,
              }}
            >
              <span className="text-center p-2">{color}</span>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ColorList;
