import React from "react";
import Link from "next/link";

const Welcome = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div className="space-y-3 mb-5">
        <h1 className="text-3xl font-bold">Sign in to ComX</h1>
        <p className="text-sm">Welcome to ComX</p>
        <div className="pt-3 mt-5">
          <Link href="/">
            <button className="bg-green-500 text-white text-center w-full p-2">
              Sign In
            </button>
          </Link>
        </div>
      </div>

      <div className="space-y-3 mb-5 pt-14">
        <h1 className="text-3xl font-bold">Create Account</h1>
        <p className="text-sm">Join the Family</p>
        <div>
          <Link href="/">
            <button className="bg-black text-white text-center w-full p-2">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
