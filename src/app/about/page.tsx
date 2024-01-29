import Link from "next/link";
export default function About() {
  return (
    <>
      <Link href="/">
        <button className="btn">X</button>
      </Link>
      <div className="welcome-message">ABOUT</div>
    </>
  );
}
