import { useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <form>
        <div className="space-y-2 pb-3">
          <h1 className="text-center font-bold items-center text-3xl">
            Sign In to ComX
          </h1>
          <p className="text-center font-bold items-center text-xl">
            Enter your Login Credentials Below
          </p>
        </div>

        <div className="space-y-2">
          <p className="font-bold">Your Email</p>
          <input
            className="outline-none text-gray-600 p-3"
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Enter your Email"
          />

          <p className="font-bold">Your Password</p>
          <input
            className="outline-none text-gray-600 p-3"
            onChange={(e) => setInput(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </div>

        <div className="flex justify-around items-center">
          <input type="checkbox" />
          <p className="pl-[-3]">Stay Signed In</p>

          <Link href="/">
            <span className="text-red-600 cursor-pointer">Forgot Password</span>
          </Link>
        </div>
        <div className="flex flex-col space-y-1 p-3 text-xl">
          <button
            className=" bg-green-400 text-white items-center justify-center cursor-pointer"
            onClick={() => signIn()}
          >
            Sign In
          </button>
          <Link href="/welcome">
            <button className=" bg-white text-black items-center justify-center cursor-pointer">
              Back
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
