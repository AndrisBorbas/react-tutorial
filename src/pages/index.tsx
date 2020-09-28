import Layout from 'components/Layout';
import Todo from 'components/todo/Todo';
import React from 'react';
import useLocalStorage from 'utils/useLocalStorage';

export default function IndexPage(): JSX.Element {
  const [todoText, setTodoText] = React.useState('');
  const [todoList, setTodoList] = useLocalStorage<string[]>('todos', []);
  return (
    <Layout>
      <h1 className="font-schdesign mt-8 text-6xl">
        sch<span className="text-schdesign">design</span>
      </h1>
      <form>
        <input
          placeholder="TODO"
          className="p-3 pl-4 text-white bg-gray-500 border-none rounded-full rounded-r-none"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button
          type="submit"
          className="bg-schdesign p-3 text-white border-none"
          onClick={(e) => {
            e.preventDefault();
            setTodoList([...todoList, todoText]);
          }}
        >
          +
        </button>
      </form>
      {todoList.map((todo) => {
        return (
          <Todo
            key={todo}
            todo={todo}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        );
      })}
    </Layout>
  );
}
