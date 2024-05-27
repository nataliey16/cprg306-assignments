import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <Link className="underline" href="/">
        Return home
      </Link>

      <h1>Hello, my name is Natalie Yeung!</h1>
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
