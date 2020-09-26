import clsx from 'clsx';
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

interface TodoItemProps {
  todo: string;
  key: string;
  todoList: string[];
  setTodoList: (value: string[] | ((val: string[]) => string[])) => void;
}

export default function TodoItem({
  todo,
  key,
  todoList,
  setTodoList,
}: TodoItemProps): JSX.Element {
  const [isStrikeTrough, toggleStrikeTrough] = React.useState<boolean>(false);
  return (
    <div
      className="bg-dark min-w-64 flex flex-row items-center justify-between p-3 pl-4 rounded-full"
      key={key}
      role="button"
      tabIndex={0}
      onKeyPress={() => {
        toggleStrikeTrough(!isStrikeTrough);
      }}
      onClick={() => {
        toggleStrikeTrough(!isStrikeTrough);
      }}
    >
      <p
        className={clsx(isStrikeTrough ? 'line-through' : '', 'cursor-default')}
      >
        {todo}
      </p>
      <button
        type="button"
        className="bg-transparent border-none cursor-pointer"
        onClick={() => {
          const tempList = todoList.filter((todoText) => todoText !== todo);
          setTodoList(tempList);
        }}
      >
        <FaTrashAlt />
      </button>
    </div>
  );
}
