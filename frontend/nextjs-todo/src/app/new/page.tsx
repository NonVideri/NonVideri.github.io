import Link from "next/link";
import prisma from "../../db";
import { redirect } from "next/navigation";

async function createTodo(data: FormData) {
  "use server";

  const title = data.get("title")?.valueOf();

  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid title");
  }

  await prisma.todo.create({
    data: {
      title
    }
  });

  redirect("/");
}

export default function NewPage() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="font-2xl">New</h1>
      </header>
      <form action={createTodo} className="flex flex-col gap-2">
        <input
          type="text"
          name="title"
          className="border border-gray-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-gray-100"
        />
        <div className="flex gap-1 justify-end">
          <Link
            href="/"
            className="
          border border-gray-300 text-gray-300 px-2 py-1 rounded hover:bg-gray-700 focus-within:bg-gray-700 outline-none
          ">
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-gray-300 text-gray-300 px-2 py-1 rounded hover:bg-gray-700 focus-within:bg-gray-700 outline-none">
            Save
          </button>
        </div>
      </form>
    </>
  );
}
