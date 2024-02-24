import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Home() {
  const username = Cookies.get('username');
  if (username === undefined) {
    const router = useRouter();
    router.push('/login');
  } else {
    console.log('Todo Dashboard');
  }
  return (
    <>
    </>
  );
}
