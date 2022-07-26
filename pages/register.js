import { useState } from "react";
import Link from "next/link";

const Register = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <form className="p-3 space-y-5">
        <div className="space-y-2">
          <h1 className="font-bold text-3xl">Register new Account</h1>
          <p className="text-sm">
            Sign up for an account and start trading today
          </p>
        </div>

        <div>
          <p className="mb-3">Select the category that best describes you</p>
          <div>
            <Link href="/register/individual">
              <button className="rounded-sm text-black bg-white p-3">
                Individual
              </button>
            </Link>
            <Link href="/register/corporate/login-details">
              <button className="rounded-sm text-white bg-black p-3">
                Corporate
              </button>
            </Link>
          </div>

          <p className="p-2">Company Name</p>
          <input
            className="p-3 outline-none bg-gray-200"
            type="text"
            placeholder="Enter your email"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <div className="flex space-x-1">
          <div>
            <p>Type of Business</p>
            <input
              className="p-3 outline-none bg-gray-200"
              type="text"
              placeholder="Select Type of Business"
            />
          </div>
          <div>
            <p>Date of Incorporation</p>
            <input
              className="p-3 outline-none bg-gray-200"
              type="date"
              placeholder="Select Date"
            />
          </div>
        </div>
        <div>
          <button className="text-red-600 items-center text-center">
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
