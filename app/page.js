"use client";
import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import BaseLayout from "./components/BaseLayout";

export default function Home() {
  const username = Cookies.get('username');
  // if (username === undefined) {
  //   const router = useRouter();
  //   router.push('/login');
  // } else {
  //   console.log('Todo Dashboard');
  // }

  const handler = () => {
    console.log('callled');
  };

  return (
    <>
    <button onClick={handler}> button dddf</button>
    </>
  );
}
