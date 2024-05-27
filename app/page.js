import Link from "next/link";
export default function Home() {
  return (
    <main className="text-centre">
      <h1 className="text-lg">CPRG 306: Web Development 2 - Assignments</h1>
      <Link className="text-purple-600 hover:underline" href="week-2">
        Week 2 Assignment: Student Information
      </Link>
    </main>
  );
}
