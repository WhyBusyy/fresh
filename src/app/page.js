import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  let name = "WhyBusyy";
  return (
    <div>
      <h4 className="title">애플후레쉬</h4>
      <p className="title-sub">by dev {name}</p>
    </div>
  );
}
