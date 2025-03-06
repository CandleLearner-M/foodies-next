import Link from "next/link";

function Meals() {
  return (
    <main>
      <h1>Meals</h1>
      <p>
        <Link href="/meals/share">Share Meal</Link>
      </p>
      <p><Link href="/meals/butnothing">something</Link></p>
    </main>
  );
}
export default Meals;
