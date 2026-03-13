// next api
import Link from "next/link";
import Image from "next/legacy/image";
import { useRouter } from "next/router";
// functions
import preventBodyScroll from "../function/preventBodyScroll";

const elements = [
  { name: "Flowers", url: "/flowers" },
  { name: "Plants", url: "/plants" },
  { name: "Gifts", url: "/gifts" },
  { name: "Disconts", url: "/disconts" }, // ← typo? probably "Discounts"
  { name: "About us", url: "/about-us" },
];

export default function Nav(props) {
  const router = useRouter();
  const queryParam = router.query;

  const tabs = elements.map((item, index) => {
    // Better active logic: check both pathname and potential query-based routes
    const isActive =
      router.pathname === item.url ||
      (queryParam.page && `/${queryParam.page}` === item.url);

    const activeClassName = isActive ? " nav__tab--active" : "";

    return (
      <Link
        key={index}
        href={item.url}
        onClick={() => {
          props.navRef.current.className = "nav nav--hiden";
          props.closeNavRef.current.className = "hiden";
          props.openNavRef.current.className = "show";
          preventBodyScroll(false);
        }}
        className={`nav__tab${activeClassName}`}
      >
        {item.name}
      </Link>
    );
  });

  return (
    <nav ref={props.navRef} className="nav nav--hiden">
      {tabs}

      <div className="nav__location">
        <img src="/svgs/location.svg" alt="location icon" width={24} height={24} />
        <span>Kenya</span>
      </div>
    </nav>
  );
}