import ContentLoader from "react-content-loader";

export const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="130" cy="130" r="130" />
    <rect x="0" y="277" rx="0" ry="0" width="230" height="0" />
    <rect x="0" y="316" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="275" rx="10" ry="10" width="280" height="21" />
    <rect x="2" y="424" rx="10" ry="10" width="95" height="27" />
    <rect x="128" y="416" rx="25" ry="25" width="152" height="42" />
  </ContentLoader>
);
