import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Áreas de Estudo</h1>

      <Link href="/react">
        <button>React</button>
      </Link>
    </div>
  );
}
