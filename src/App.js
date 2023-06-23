import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

function App() {
  const defaultTodos = [
    {text: 'Estudiar programación', completed: true},
    {text: 'Estudiar inglés', completed: false},
    {text: 'Preparar el almuerzo', completed: false},
    {text: 'Lavar los platos', completed: false},
  ]

  return (
    <>
      <TodoCounter completed={2} total={6} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
