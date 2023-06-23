import './TodoList.css';

const TodoList = ({ children }) => (
<ul className="TodoList">
    { children }
</ul>
);

export { TodoList };
