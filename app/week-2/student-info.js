import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <Link href="/">Home</Link>

      <h1>Student Information</h1>
      <h2>Hello, my name is Natalie!</h2>
      <p>
        This is a link to my Github repository:{" "}
        <Link href="https://github.com/nataliey16" target="_blank">
          https://github.com/nataliey16
        </Link>
      </p>
    </div>
  );
}
