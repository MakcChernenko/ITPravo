import { useState } from "react";
import "./App.css";
import SudList from "./components/SudList/SudList.jsx";
import FilterArray from "./components/filtrList/FiltrList.jsx";
import kards from "./data/kards.jsx";

function App() {
  const [filtrArray, setFiltrArray] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const keyWord = e.target.search.value;
    if (keyWord === "") {
      alert("ВВЕДІТЬ СТАТТЮ");
      return;
    }
    const filteredSudList = kards.filter((obj) => {
      return obj.stattya.toLowerCase().includes(keyWord.toLowerCase());
    });
    setFiltrArray(filteredSudList);
    e.target.reset();
  };

  return (
    <>
      <header className="header">
        <a className="logo-link" href="http://" rel="noopener noreferrer">
          {" "}
          <div className="logo">
            <span className="name">
              <span className="ch">Ч</span>ерненко
            </span>
            <span className="description">студент 123 групи</span>
          </div>
        </a>
        <form className="form-search" action="" onSubmit={handleSubmit}>
          <input type="text" name="search" placeholder="введіть назву статті" />
          <button>Пошук</button>
        </form>
      </header>

      <main className="main">
        <div>
          <p>
            Пане Романе, згідно з Нашим Договором, я додав дві справи з
            адміністративного та одну з цивільного кодексу. Оскільки відповідно
            до статті 628 ЦК щодо змісту договору, ми чітко не обговорили всі
            деталі Нашого Договору, я, спираючись на цю ж статтю 628 ЦК, на свій
            розсуд узгодив умови Нашого Договору, а саме — виписав три справи,
            що я й зробив.
          </p>
          <p>
            На підставі Нашого Договору вимагаю задовольнити мої вимоги на 100
            балів у заліку. Усвідомлюючи, що ви будете апелювати до нікчемності
            Нашого Договору, хочу звернути вашу увагу на джентльменську суть
            Нашої Угоди. Також, враховуючи, що відповідно до статті 632 ЦК щодо
            ціни, ми чітко не погодили її у Нашому Договорі, я знову апелюю до
            джентльменського підходу в оцінці цієї ситуації та до вашого
            особистого благородства при ухваленні рішення по цій справі.
          </p>
        </div>
        {filtrArray.length !== 0 && <FilterArray filtrArray={filtrArray} />}
        <section className="hero">
          <h1 className="title">Виконана робота по ІТ-праву</h1>
          <a className="hero-link" href="./conspect.html">
            конспект перших уроків
          </a>
          <a
            className="hero-link"
            href="./myConspect.html"
            rel="noopener noreferrer"
          >
            Мої замітки
          </a>
        </section>

        <section>
          <h2 className="title2">Судові рішення</h2>
          <SudList />
        </section>
      </main>
    </>
  );
}

export default App;
