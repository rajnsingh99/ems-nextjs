"use client";
import { useRouter } from "next/navigation";

const useCustomRoute = (routeTo) => {
  useRouter().push(`/${routeTo}`);
};

export default useCustomRoute;
