import './App.css'
import SudList from "./components/SudList/SudList.jsx"
function App() {

  return (
    <>
      <h1 className=''>Виконана робота по ІТ-праву</h1>
      <button type='button'style={{border:"black solid 1px"}} ><a href="../conspect.html" style={{color: "green"}} >конспект</a></button>
      <SudList/>
    </>
  )
}

export default App
