import styles from './Title.module.sass';

const Title = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>The Blog</h1>
        </div>
    );
};

export default Title;
