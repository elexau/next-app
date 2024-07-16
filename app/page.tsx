import Image from "next/image";
import rocket from "@/public/images/mascot_1.jpg";
import { getServerSession } from "next-auth";
import HeavyComponent from "./components/HeavyComponent";

export default function Home() {
  return (
    <main className="relative h-screen">
      <h1>Hello World!</h1>
      <HeavyComponent />
    </main>
  );
}
