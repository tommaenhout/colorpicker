declare module "colorlist/ColorList" {
  const ColorList: React.FC<IColorList>;
  export default ColorList;
}

declare module "picker/Picker" {
  const Picker: React.FC<IPicker>;
  export default Picker;
}

declare module "picker/useColors" {
  export function useColors(): IUseColors;
}
