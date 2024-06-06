import Link from "next/link.js";
import StudentInfo from "./student-info.js";

export default function Page() {
  return (
    <main className="m-4 text-[#E0FBFC]">
      <Link className="underline " href="/">
        Return home
      </Link>
      <h1>Shopping List</h1>
      <StudentInfo />
    </main>
  );
}
