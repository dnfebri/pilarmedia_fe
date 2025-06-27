import { Suspense } from "react";

export default function Home() {
  return (
    <div className="panel mt-6">
      <Suspense>{/* <ComponentListUser /> */}</Suspense>
    </div>
  );
}
