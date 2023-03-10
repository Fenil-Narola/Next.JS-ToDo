import styles from "../styles/components/Delete.module.css";

interface DeleteProps {
  deleteAction: () => void;
  cancelAction: () => void;
}
export default function DeleteItem({
  deleteAction,
  cancelAction,
}: DeleteProps) {
  return (
    <div className={styles.deleteItem}>
      <p>Are you sure?</p>
      <button className={styles.deleteItemAction} onClick={deleteAction}>
        Delete
      </button>
      <button className={styles.cancelAction} onClick={cancelAction}>
        Cancel
      </button>
    </div>
  );
}
