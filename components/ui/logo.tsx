import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/MainLogo.jpg";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex rounded-2xl shrink-0" aria-label="BookLane Logo">
      <Image src={logo} alt="BookLane Logo" width={45} height={45} className="rounded-2xl" />
    </Link>
  );
}
