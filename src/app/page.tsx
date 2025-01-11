import { cookies } from "next/headers";

export default function HomePage() {
  return (
    <main>
      <form action={serverAction}>
        <button>Click</button>
      </form>
    </main>
  );
}

async function serverAction() {
  "use server";
  await cookies(); // <- this throws in Next.js 15.1.0 when JS is disabled on the client
  console.log("action called"); // <- this statement is reached in Next.js 15.0.0
}