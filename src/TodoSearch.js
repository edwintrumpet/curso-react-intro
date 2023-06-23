import './TodoSearch.css';

const TodoSearch = () => (
<input
    className="TodoSearch"
    type="text"
    placeholder="Cortar la cebolla"
    onChange={event => {
        console.log('escribiste en el todo search');
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
    }}
/>
);

export { TodoSearch };
