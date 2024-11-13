import './App.css'
import SudList from "./components/SudList/SudList.jsx"
function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Пошук ще не написаний, очікуйте нових оновлень");
    e.target.reset();
  };

  return (
    <>
    <header className="header">
      <a className='logo-link' href="http://" target="_blank" rel="noopener noreferrer"> <div className="logo">
          <span className="name"><span className="ch" >Ч</span>ерненко</span>
          <span className="description">студент 123 групи</span>
      </div></a>
      <form className='form-search' action="" onSubmit={handleSubmit} >
        <input type="text" name='search' placeholder='введіть назву статті' />
        <button >Пошук</button>
      </form>
    </header>
         
      <main className="main">
        <section className="hero">
          <h1 className='title'>Виконана робота по ІТ-праву</h1>
          <a className='hero-link' href="./conspect.html" >конспект перших уроків</a>
          <a className='hero-link' href="./myConspect.html" target="_blank" rel="noopener noreferrer">Мої замітки</a>
        </section>

        <section>
          <h2 className='title2' >Судові рішення</h2>
          <SudList/>
          </section>
      </main>
    </>
  )
}

export default App
