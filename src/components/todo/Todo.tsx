import clsx from 'clsx';
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export interface TodoParams {
  todo: string;
  todoList: string[];
  setTodoList: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function Todo({ todo, todoList, setTodoList }: TodoParams) {
  const [isStrikeThrough, toggleStrikeThrough] = React.useState<boolean>(false);
  return (
    <div
      key={todo}
      role="button"
      tabIndex={0}
      className="flex flex-row items-center justify-between w-64 px-2 bg-gray-900 rounded-full"
      onKeyPress={() => {
        toggleStrikeThrough(!isStrikeThrough);
      }}
      onClick={() => {
        toggleStrikeThrough(!isStrikeThrough);
      }}
    >
      <p
        className={clsx(
          isStrikeThrough ? 'line-through' : '',
          'cursor-default',
        )}
      >
        {todo}
      </p>
      <button
        type="button"
        className="p-3 bg-transparent border-none"
        onClick={() => {
          const tempList = todoList.filter(
            (todoTextinList) => todoTextinList !== todo,
          );
          setTodoList(tempList);
        }}
      >
        <FaTrashAlt />
      </button>
    </div>
  );
}
