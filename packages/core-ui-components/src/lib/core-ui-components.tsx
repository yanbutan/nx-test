import styles from './core-ui-components.module.css';

/* eslint-disable-next-line */
export interface CoreUiComponentsProps {}

export function CoreUiComponents(props: CoreUiComponentsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CoreUiComponents!</h1>
    </div>
  );
}

export default CoreUiComponents;
