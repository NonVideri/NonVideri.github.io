import Link from "next/link";

export default async function HomePage() {
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
      <ul className="pl-4"></ul>
    </>
  );
}
