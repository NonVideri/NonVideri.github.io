import Link from "next/link";
import prisma from "../db";

function getTodos() {
  return prisma.todo.findMany();
}

export default async function HomePage() {
  const todos = await getTodos();

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="font-2xl">Todos</h1>
        <Link
          className="border border-gray-300 text-gray-300 px-2 py-1 rounded hover:bg-gray-700 focus-within:bg-gray-700 outline-none"
          href="/new">
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map((todo) => (
          <li key={todo.id} className="mb-2">
            <Link href={`/${todo.id}`}>
              <a className="text-blue-400 hover:text-blue-300 focus-within:text-blue-300 outline-none">{todo.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
