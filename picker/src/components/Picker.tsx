interface IPicker {
  color: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddColor: () => void;
}

const Picker: React.FC<IPicker> = ({ color, onChangeHandler, onAddColor }) => {
  return (
    <div className="container text-center">
      <input
        value={color}
        onChange={onChangeHandler}
        style={{ height: "200px" }}
        className="form-control form-control-color w-100"
        type="color"
        title="Choose your color"
      />
      <div className="d-flex py-2 flex-row gap-2 justify-content-between align-items-center">
        <div className="d-flex flex-row gap-2">
          <div
            style={{
              borderRadius: "100%",
              width: "50px",
              height: "50px",
              backgroundColor: color,
            }}
          ></div>
          <p className="align-self-center p-0 m-0">{color}</p>
        </div>
        <button className="btn btn-primary w-50" onClick={onAddColor}>
          Add to list
        </button>
      </div>
    </div>
  );
};

export default Picker;
