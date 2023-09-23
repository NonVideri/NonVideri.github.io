import Link from "next/link";

interface TodoItemProps {
  id: string;
  title: string;
  complete: boolean;
}

export function TodoItem({ id, title, complete }: TodoItemProps) {
  return (
    <li key={id} className="flex gap-1 items-center cursor-pointer">
      <input id={id} type="checkbox" checked={complete} className="w-4 h-4 peer" />
      <label htmlFor={id} className="peer-checked:line-through peer-checked:text-gray-500">
        {title}
      </label>
    </li>
  );
}
