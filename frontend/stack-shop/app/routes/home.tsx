import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "StackShop | Retail Management OS" },
    { name: "description", content: "The all-in-one operating system for your retail business." },
  ];
}

export default function Home() {
  return <Welcome />;
}
