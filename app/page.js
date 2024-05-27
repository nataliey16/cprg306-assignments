import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignment 2</h1>
      Click here to access Week-2:{" "}
      <Link className="text-purple-600 hover:underline" href="week-2">
        Student Information
      </Link>
    </main>
  );
}
