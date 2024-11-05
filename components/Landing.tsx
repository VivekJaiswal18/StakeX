"use client";

import Image from "next/image";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import thirdwebIcon from "@public/thirdweb.svg";
// import { client } from "./client";
// import { Link } from "lucide-react";
import NextLink from "next/link";
// import { LoginButton } from "./components/LoginButton";

export default function Landing() {
  const account = useActiveAccount();
  return (
    <main className="p-4 pb-10 min-h-[100vh] cantora-one-regular flex items-center justify-center container max-w-screen-lg mx-auto font-montserrat">
      <div className="py-20">
        <Header />

        <div className="flex justify-center mb-20">

        <NextLink href="/stake">
            <button className="mt-4 bg-zinc-100 text-black px-6 py-3 rounded-md text-lg font-semibold hover:bg-zinc-200 transition-colors">
              Get Started
            </button>
          </NextLink>
        </div>
       

        <ThirdwebResources />
        {/* {account && (
        <div className="mt-12 text-center">
          You are logged in.{" "}
          <a href="/gated-content" className="underline">
          <div className="border-l-emerald-400 mt-3">
          <button className="border-2 border-green-300 px-4 py-2 rounded-lg">
            Go to the gated page
            </button>
            </div>
          </a>
        </div>
      )} */}
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="flex flex-col items-center mb-20 md:mb-20">
        {/* <Image
          src={thirdwebIcon}
          alt=""
          className="size-[150px] md:size-[150px]"
          style={{
            filter: "drop-shadow(0px 0px 24px #a726a9a8)",
          }}
        /> */}
<h1 className="text-2xl md:text-6xl font-montserrat md:font-bold tracking-tighter mb-6 text-zinc-100">
        StakeX
        {/* <span className="text-zinc-300 inline-block mx-1"> + </span> */}
        {/* <span className="inline-block -skew-x-6 text-blue-500"> NFT </span> */}
      </h1>
      <h1 className="text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-6 text-zinc-100">
        Now Earn by Staking
        <span className="text-zinc-300 inline-block mx-1"> - </span>
        <span className="inline-block -skew-x-6 text-blue-500"> NFTs </span>
      </h1>

          
    </header>

  );
}

function ThirdwebResources() {
  return (
<div>

        

    <div className="grid gap-4 lg:grid-cols-3 justify-center">
      <ArticleCard
        title="StakeX Features"
        href="/"
        description="Learn about StakeX more"
      />

      <ArticleCard
        title="Capabalities and Uses"
        href="/"
        description="StakeX provides a vast variety of uses cases specifically for education"
      />

      <ArticleCard
        title="StakeX Dashboard"
        href="/"
        description="Connect, Publish content, and manage that from the dashboard."
      />
    </div>
    </div>
  );
}

function ArticleCard(props: {
  title: string;
  href: string;
  description: string;
})
 
{
  return (
    <a
      href={props.href + "?utm_source=next-template"}
      target="_blank"
      className="flex flex-col border border-zinc-800 p-4 rounded-lg hover:bg-zinc-900 transition-colors hover:border-zinc-700"
    >
      <article>
        <h2 className="text-lg font-semibold mb-2">{props.title}</h2>
        <p className="text-sm text-zinc-400">{props.description}</p>
      </article>
    </a>
  );
}
