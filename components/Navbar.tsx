import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href={"/"}>
        <a>Spartec Consortium</a>
      </Link>
      <Link href={"/orders"}>
        <a>Orders</a>
      </Link>
      <Link href={"/invoices"}>
        <a>Invoices</a>
      </Link>
      <Link href={"/lpo"}>
        <a>L.P.O</a>
      </Link>
    </nav>
  );
}
