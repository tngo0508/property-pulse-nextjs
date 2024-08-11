import Link from "next/link";

const HomePage = () => {
  return (
    <div className="text-3xl">
      <h1>Welcome</h1>
      <Link
        href={{
          pathname: "properties",
          query: { name: "test" },
        }}
      >
        Go to Properties
      </Link>
    </div>
  );
};

export default HomePage;
