import Link from "next/link";

const LINK_STYLES = "flex flex-col text-purple-600 hover:underline";

export default function Home() {
  return (
    <main className="text-centre">
      <h1 className="text-lg">CPRG 306: Web Development 2 - Assignments</h1>
      <Link className={LINK_STYLES} href="week-2">
        Week 2 Assignment: Student Information
      </Link>
      <Link className={LINK_STYLES} href="week-3">
        Week 3: Item List
      </Link>
    </main>
  );
}
