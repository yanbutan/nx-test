import styles from './core-web-components.module.css';

/* eslint-disable-next-line */
export interface CoreWebComponentsProps {}

export function CoreWebComponents(props: CoreWebComponentsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CoreWebComponents!</h1>
    </div>
  );
}

export default CoreWebComponents;
