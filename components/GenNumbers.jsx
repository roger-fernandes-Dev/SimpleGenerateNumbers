import styles from "../styles/GenNumbers.module.css"
export default function GenNumbers(props){
    return (
        <div className={styles.container}>
            {props.numero}
        </div>
    )
}