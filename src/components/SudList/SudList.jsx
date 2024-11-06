import { useState } from "react";
import kards from "../../data/kards.jsx"

const SudList = () => {
   const [openIndex, setOpenIndex] = useState(null);
    const toggleAccordion = (index) =>{
        setOpenIndex(openIndex === index ? null: index)
    }
return(
    <div>
    {kards.map((kard, index) => {
        return (
            <div onClick={()=>toggleAccordion(index)} style={{cursor: "pointer",
                border: "black solid 1px",margin:"10px"
            }}  key={index}>
                <h2>{kard.stattya}</h2>
                    <h3>{kard.nomer}</h3>
                {openIndex === index && (<div>
                    <div>
                        <h3>Суть справи</h3>
                        <p>{kard.sutSpravy}</p>
                    </div>
                    <div>
                        <h3>Вирок</h3>
                        <p>{kard.vyrok}</p>
                    </div>
                    <div>
                        <h3>Обставини</h3>
                        <p>{kard.obstavyny}</p>
                </div>
                </div>)}
            </div>
        );
    })}
</div>
);
}
export default SudList