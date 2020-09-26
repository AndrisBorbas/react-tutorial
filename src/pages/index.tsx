import Layout from 'components/Layout';
import TodoItem from 'components/todo/TodoItem';
import React from 'react';
import useLocalStorage from 'utils/useLocalStorage';

export default function IndexPage(): JSX.Element {
  const [inputText, setInputText] = React.useState<string>('');
  // useState volt localStorage nélkül
  const [todoList, setTodoList] = useLocalStorage<string[]>('todolist', []);

  return (
    <Layout>
      <form className="flex flex-row">
        <input
          placeholder="Task"
          className="sm:w-auto bg-dark w-full p-2 px-4 text-2xl text-gray-200 border-none rounded-l-full"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          type="submit"
          className="bg-schdesign inline-flex items-center justify-center w-12 text-2xl font-bold text-white border-none rounded-r-full cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            if (inputText !== '') setTodoList([...todoList, inputText]);
            setInputText('');
          }}
        >
          +
        </button>
      </form>
      {todoList.map((todo) => {
        // rossz a key, ha ugyanaz a szöveg eltűnhet mindegyik ugyanolyan
        return (
          <TodoItem
            todo={todo}
            key={todo}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        );
      })}
    </Layout>
  );
}
