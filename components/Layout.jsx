import { useState, useEffect } from "react"
import { mega } from "../function/mega"
import styles from "../styles/Layout.module.css"
import GenNumbers from './GenNumbers';
export default function Layout(){
    let [number, setNumber] = useState([]);
    const [qtde, setQtde] = useState(6);
    
    //incializando com alteração no estado
    useEffect(()=>{
        setNumber(mega())
    }, [])

    function renderizarLista(){
        return number.map(
            n => <GenNumbers key={n} numero={n} />
            )
    }

    return (
        <div className={styles.container}>
            <h1>Generating Random Numbers</h1>
            <div className={styles.content}>
                <div className={styles.numbers}>
                    {renderizarLista()}
                </div>
                <div className={styles.buttonArea}>
                    <button onClick={() => setNumber(mega(qtde))} className={styles.button}>Generate</button>
                    <input className={styles.inputNumber} type="number" min={6} max={20} value={qtde} onChange={ e => setQtde(+e.target.value)}/>
                </div>
            </div>
        </div>
    )
}