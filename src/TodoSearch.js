import { useState } from 'react';
import './TodoSearch.css';

const TodoSearch = () => {
    const [textSearch, setTextSearch] = useState('');

    return(
        <input
            className="TodoSearch"
            type="text"
            placeholder="Cortar la cebolla"
            value={textSearch}
            onChange={event => {
                setTextSearch(event.target.value);
            }}
        />
    );
}

export { TodoSearch };
