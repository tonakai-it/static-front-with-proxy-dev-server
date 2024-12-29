"use client";

import { FormEvent } from "react";
import { optFetch } from "@/libs/fetch";

export default function Home() {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await optFetch('ping')
    const data = await response.json();
    console.log(data);
  }
  return (
    <div>
      <main>
        <form action="" onSubmit={handleSubmit}>
          <button type="submit">送信</button>
        </form>
      </main>
    </div>
  );
}
