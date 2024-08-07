import styles from "./footer.module.css"
export default function({completedTodos,totaltodos}){
    return (<div className={styles.footer}>
        <span className={styles.item}>Completed Todos:{completedTodos}</span>
        <span className={styles.item}>Total Todos:{totaltodos}</span>
    </div>
);
}