import { Suspense } from "react";
import { ComponentListMedia } from "./ComponentListMedia";

export default function Home() {
  return (
    <div className="mt-6">
      <Suspense>
        <ComponentListMedia />
      </Suspense>
    </div>
  );
}
