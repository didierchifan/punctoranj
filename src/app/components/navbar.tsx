import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <>
      <div className="row nav--bar">
        <Image src="/LogoPunctoranj.svg" width={50} height={50} alt="logo" />
        <div className="logo"></div>
        <Link href="/about" style={{ marginLeft: "auto" }} className="btn">
          About
        </Link>
        <Link href="/contact" className="btn">
          Contact
        </Link>
      </div>
    </>
  );
}
