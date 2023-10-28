import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <div>
      Hello world!
      <Link href="/users">Users</Link>
      <ProductCard />
    </div>
  );
}
