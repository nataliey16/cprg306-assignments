import Link from "next/link";

export default function StudentInfo() {
  return (
    <main className="text-start text-[#E0FBFC]">
      <h1 className="text-3xl my-2">Week 2: Student Information</h1>
      <p>Hello, my name is Natalie Yeung!</p>
      <p>
        This is a link to my Github repository:{" "}
        <Link
          className="text-[#EE6C4D] hover:underline"
          href="https://github.com/nataliey16"
          target="_blank"
        >
          https://github.com/nataliey16
        </Link>
      </p>
    </main>
  );
}
