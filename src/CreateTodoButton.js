import './CreateTodoButton.css';

const CreateTodoButton = () => (
<button
    className="CreateTodoButton"
    onClick={event => {
        console.log('diste click en el botón');
        console.log(event);
        console.log(event.target);
        console.log(event.target);
        }}
>+</button>
);

export { CreateTodoButton };
