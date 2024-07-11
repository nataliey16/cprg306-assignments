"use client";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";
import Image from "next/image";
import GitHubSvg from "../../public/svg/github.svg";

const Home = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <>
      <div>
        {user ? (
          <div>
            <div className="flex py-4 px-10 justify-between items-center bg-[#EE6C4D] text-lg  font-bold text-white">
              <Link href="/week-8/shopping-list">View Shopping List</Link>
              <button onClick={() => firebaseSignOut()}>Sign out</button>
            </div>
            <div className="grid place-items-center h-screen">
              <h1 className="text-bold text-white text-4xl">
                Welcome, {user.displayName} ({user.email})!
              </h1>
            </div>
          </div>
        ) : (
          <div className="grid place-items-center h-screen">
            <button
              onClick={() => gitHubSignIn()}
              className="rounded flex items-center gap-4 shadow-xl pl-3 bg-white"
            >
              <Image src={GitHubSvg} alt="Github logo" width={30} height={30} />
              <span className="px-4 py-3 rounded">Sign in to Github</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
