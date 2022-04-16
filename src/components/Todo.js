export default function Todo({
  id,
  title,
  checked,
  onClickItem,
  onDeleteItem,
  onEditItem,
}) {
  return (
    <li className={checked ? "done todo-item" : "todo-item"} data-key={id}>
      <input
        onChange={() => onClickItem(id, checked)}
        id={id}
        type="checkbox"
      />
      <label htmlFor={id} className="tick js-tick"></label>
      <span>{title}</span>
      <button className="edit-button" onClick={() => onEditItem(id, title)}>
        <box-icon name="edit" type="solid" color="#2b26e5"></box-icon>
      </button>
      <button
        onClick={() => onDeleteItem(id)}
        className="delete-todo js-delete-todo"
      >
        <svg>
          <use href="#delete-icon"></use>
        </svg>
      </button>
    </li>
  );
}
