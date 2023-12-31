import Link from "next/link";
import { useState, React } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";

import { useRouter } from "next/router";

export default function Signup() {
  const [email, setEmail] = useState("amar.tauqeer@gmail.com");
  const [name, setName] = useState("tauqeer");
  const [password, setPassword] = useState("123456");
  const [rePassword, setRePassword] = useState("123456");
  const [message, setMessage] = useState("");
  const router = useRouter();
  // const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://127.0.0.1:8000/account/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        // "X-CSRFToken":csrf,
      },
      credentials: "include",
      body: JSON.stringify({
        email,
        name,
        password,
        confirm_password: rePassword,
      }),
    });
    const response = await res.json();
    console.log(response);
    if (response.email && response.email !== undefined) {
      if (response.email[0]==="user with this email already exists.") {
        setMessage(response.email[0]);
        return false;  
      }
      setEmail("");
      setName("");
      setPassword("");
      setMessage("An email for activation is sent to "+email)
      // router.push("/login");
    } 
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col text-center items-center justify-center min-h-screen py-2">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            {/* sign in section */}
            <div className="text-left font-bold">
              <span className="text-green-500">Company</span>Name
            </div>

            <div className="py-10">
              <h2 className="text-3xl font-bold text-green-500 mb-2">Signup</h2>
              <div className="border-2 w-10 border-green-500 inline-block mb-12"></div>
              <div className="flex flex-col items-center mb-3">
                <div className="bg-gray-100 w-64 p-2 flex items-center">
                  <BsPersonFill className="text-gray-400 m-2" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="name"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
              </div>
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
              <div className="flex flex-col items-center mt-3 mb-5">
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
              <div className="flex flex-col items-center mt-3 mb-5">
                <div className="bg-gray-100 w-64 p-2 flex items-center">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)}
                    placeholder="retype password"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
              </div>
              <a
                onClick={handleSubmit}
                href="#"
                className="border-2 border-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white mb-3"
              >
                SIGN UP
              </a>
              <div className="flex items-center justify-center">
                <p
                  className={
                    message ===
                      "user with this email already exists." ||
                    message ===
                      "This password is too short. It must contain at least 8 characters." ||
                    message === "The two password fields didn't match." ||
                    message === "This field may not be blank."
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
            <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">
              To keep connected with us please login with your personal info
            </p>
            <Link
              href="/login"
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500"
            >
              SING IN
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
