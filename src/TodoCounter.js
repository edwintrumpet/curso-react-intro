import './TodoCounter.css';

const TodoCounter = ({ completed, total }) => (
<h1 className="TodoCounter">
    Has completado <span>{completed}</span> de <span>{total}</span> TODOS
</h1>
);

export { TodoCounter };
