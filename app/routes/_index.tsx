import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async() =>{
  return {
    test: 'hahahah1'
  }
}
export default function Index() {
  const d = useLoaderData()
  return (
   <h1>Test for changes 3 {d.test}</h1>
  );
}
