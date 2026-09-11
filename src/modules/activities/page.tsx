import { useEffect } from "react";

export default function ActivitiesPage() {
      useEffect(() => {
      document.title = "Activities ";
    }, []);
  return (
    <div>
      <h1> Activies </h1>
    </div>
  );
}
