import kards from "../../data/kards.jsx"

const SudList = () => {
return(
    <div>
    {kards.map((kard, index) => {
        return (
            <div key={index}>
                <h2>{kard.stattya}</h2>
                <h3>{kard.nomer}</h3>
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
            </div>
        );
    })}
</div>
);
}
export default SudList