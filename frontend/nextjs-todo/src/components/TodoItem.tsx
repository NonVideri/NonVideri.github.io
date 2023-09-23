"use client";

interface TodoItemProps {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
}

export function TodoItem({ id, title, complete, toggleTodo }: TodoItemProps) {
  return (
    <li key={id} className="flex gap-1 items-center cursor-pointer">
      <input
        id={id}
        type="checkbox"
        className="w-4 h-4 peer"
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label htmlFor={id} className="peer-checked:line-through peer-checked:text-gray-500">
        {title}
      </label>
    </li>
  );
}
