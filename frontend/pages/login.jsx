import { useState, React, useEffect } from "react";
import { useRouter } from "next/router";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import Link from "next/link";
import RootLayout from "@/components/layout";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("amar.tauqeer@hotmail.com");
  const [password, setPassword] = useState("123456");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://127.0.0.1:8000/account/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const res = await response.json();
    if (res) {
      if (res.detail !== undefined) {
        setMessage(res.detail);
        return false;
      } else {
        router.push("/");
      }
    }
  };

  return (
    <RootLayout>
      <form onSubmit={handleSubmit}>
        {/* <csrfToken /> */}
        <div className="flex flex-col text-center items-center justify-center min-h-screen py-2">
          <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
            <div className="w-3/5 p-5">
              {/* sign in section */}
              <div className="text-left font-bold">
                <span className="text-green-500">Company</span>Name
              </div>
              <div className="py-10">
                <h2 className="text-3xl font-bold text-green-500 mb-2">
                  Sign in to Account
                </h2>
                <div className="border-2 w-10 border-green-500 inline-block mb-12"></div>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 w-64 p-2 flex items-center">
                    <FaRegEnvelope className="text-gray-400 m-2" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email"
                      className="bg-gray-100 outline-none text-sm flex-1"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center mt-3">
                  <div className="bg-gray-100 w-64 p-2 flex items-center">
                    <MdLockOutline className="text-gray-400 m-2" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="password"
                      className="bg-gray-100 outline-none text-sm flex-1"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center mt-3 mb-3">
                  <Link
                    className="flex w-64 justify-end text-xs underline"
                    href="/reset-password"
                  >
                    Reset password?
                  </Link>
                </div>
                <a
                  onClick={handleSubmit}
                  href="#"
                  className="border-2 border-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white"
                >
                  Sign In
                </a>
                <div className="flex items-center justify-center mt-3">
                  <p
                    className={
                      message === "Unauthenticated" ||
                      message ===
                        "This password is too short. It must contain at least 8 characters." ||
                      message === "This field may not be null."
                        ? "bg-red-500 text-lg text-white"
                        : "bg-green-500 text-lg text-white"
                    }
                  >
                    {message}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
              {/* sign up section */}
              <h2 className="text-3xl font-bold mb-2">Hello,Friend!</h2>
              <div className="border-2 w-10 border-white inline-block mb-2"></div>
              <p className="mb-10">
                Fill up personal information and start journey with us.
              </p>

              <Link
                href="/signup"
                className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </form>
    </RootLayout>
  );
}
