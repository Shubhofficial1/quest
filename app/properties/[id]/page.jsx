"use client";

import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

const PropertiesDetailsPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const name = searchParams.get("name");
  return (
    <div>
      <button onClick={() => router.push("/")}> Go back</button>
      <h1>Property Details of {id}</h1>
      <h1>Search Param : {name}</h1>
      <h1>PathName : {pathname}</h1>
    </div>
  );
};

export default PropertiesDetailsPage;
