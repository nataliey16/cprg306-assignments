import Link from "next/link";

// const LINK_STYLES = "flex flex-col text-[#55968F]  hover:underline m-2 text-lg";

const LINK_STYLES = "flex flex-col text-[#E0FBFC] hover:underline m-2 text-lg";

export default function Home() {
  return (
    <main className="text-start m-6 max-w-[1000px]">
      <h1 className="text-4xl font-bold bg-[#EE6C4D] p-4 rounded-md text-[#E0FBFC]">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <Link className={LINK_STYLES} href="week-2">
        Week 2 Assignment: Student Information
      </Link>
      <Link className={LINK_STYLES} href="week-3">
        Week 3: Item List
      </Link>
    </main>
  );
}
