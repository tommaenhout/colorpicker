import ColorList from './components/ColorList.tsx'

function App() {
  return (
    <>
      <ColorList colorList={[]} clearColors={() => {}} />
      <ColorList colorList={[
        "#000000",
        "#ffffff",
        "#ff0000",
        "#00ff00",
        "#0000ff",
      ]} clearColors={() => {}} />
    </>
  )
}

export default App
