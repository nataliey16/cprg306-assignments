import Link from "next/link";
export default function Home() {
  return (
    <main className="items-center p-24">
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      Click here to learn: <Link href="week-2">About me</Link>
    </main>
  );
}
