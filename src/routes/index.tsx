import { createFileRoute } from "@tanstack/react-router";
import logoPrefeitura from "../assets/logo.avif";
export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      {/* div suprema */}
      <div className="flex min-h-screen h-auto border-b-blue-600">1</div>
    </>
  );
}
