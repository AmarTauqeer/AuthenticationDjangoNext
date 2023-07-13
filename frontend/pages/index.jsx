import React, { useEffect, useState } from "react";
import RootLayout from "@/components/layout";

const Home = () => {
  const [message, setMessage] = useState("");
  const [auth, setAuth] = useState(false);

  const fetchData = async () => {
    const response = await fetch(`http://127.0.0.1:8000/account/user`, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const res = await response.json();

    if (res.detail !== "Unauthenticated") {
      setMessage(res.name);
      setAuth(true);
    } else {
      setMessage(res.detail);
      setAuth(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <RootLayout auth={auth}>
      <h2 className="mt-10 text-center">Dashboard page</h2>
      <h3 className="uppercase mt-10 p-2 text-center">
        {console.log(message)}
        {auth ? <div>Welcome back {message}</div> : <div>{message}</div>}
      </h3>
    </RootLayout>
  );
};

export default Home;
