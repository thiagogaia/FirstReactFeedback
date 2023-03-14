import styles from './Avatar.module.css'

export function Avatar({hasBorder = true,...props}) {
  return (
    <img 
      className={hasBorder ? styles.avatarBordered : styles.avatar} 
      {...props} />
  );
}
