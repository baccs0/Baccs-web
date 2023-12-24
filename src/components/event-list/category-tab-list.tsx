import Link from "next/link";
import { useRouter } from "next/router";
export const CategoryTabList = () => {
  const unSelectedStyle = {
    textDecoration: "none",
    color: "#7E7E7E",
  };
  const selectedStyle = {
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold",
  };
  const categories = [
    { name: "Home", url: "/events" },
    { name: "Earth Science Series", url: "/events/earth" },
    { name: "Asian Women Series", url: "/events/women" },
    { name: "Technology and Ethnics Series", url: "/events/tech" },
    { name: "Discussion on Surrogacy Serie", url: "/events/discussion" },
  ];
  const router = useRouter();
  const { pathname } = router;

  return (
    <div style={{ display: "felx", flexDirection: "column" }}>
      {categories.map((each) => (
        <div style={{ marginTop: "12px" }}>
          <Link
            href={each.url}
            style={pathname === each.url ? selectedStyle : unSelectedStyle}
          >
            {each.name}
          </Link>
        </div>
      ))}
    </div>
  );
};
