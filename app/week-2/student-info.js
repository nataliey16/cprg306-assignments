import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <Link className="underline" href="/">
        Return home
      </Link>
      <h1>Week 2: Student Information</h1>
      <p>Hello, my name is Natalie Yeung!</p>
      <p>
        This is a link to my Github repository:{" "}
        <Link
          className="text-purple-600 hover:underline"
          href="https://github.com/nataliey16"
          target="_blank"
        >
          https://github.com/nataliey16
        </Link>
      </p>
    </div>
  );
}
