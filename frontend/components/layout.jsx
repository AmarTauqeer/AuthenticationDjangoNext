import { useContext, useEffect, useState } from "react";
import Navbar from "./navbar";
import { useRouter } from "next/router";

export default function RootLayout(props) {
  // console.log(auth)
  const [data, setData] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("token"));
    setData(getData);
  }, [props.children]);
  return (
    <>
      {/* <html>
        <body> */}
      {/* {console.log(data)} */}
      {router.pathname !== "/login" && router.pathname !== "/signup" ? (
        <>
          <Navbar auth={props.auth} />
          <main>{props.children}</main>
        </>
      ) : (
        <>{props.children}</>
      )}
      {/* </body>
      </html> */}
    </>
  );
}
