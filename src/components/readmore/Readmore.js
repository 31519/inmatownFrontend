import React from "react";
import Link from "next/link";

function Readmore({ link }) {
  return (
    <div>
      <Link href={link}>
        <button>Readmore</button>
      </Link>
    </div>
  );
}

export default Readmore;
