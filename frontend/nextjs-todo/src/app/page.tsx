import Link from "next/link";
import prisma from "../db";
import { TodoItem } from "../components/TodoItem";

function getTodos() {
  return prisma.todo.findMany();
}

async function toggleTodo(id: string, complete: boolean) {
  "use server";

  await prisma.todo.update({
    where: { id },
    data: { complete }
  });
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
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
  );
}
