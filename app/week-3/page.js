import Link from "next/link";
import ItemList from "./item-list";

const Page = () => {
  return (
    <main>
      <Link className="underline m-4 text-[#E0FBFC]" href="/">
        Return home
      </Link>
      <h1 className="m-4 text-[#E0FBFC] text-bold text-4xl">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;
