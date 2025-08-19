import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/">Home</Link>
        <p>Sla</p>
        <p>AAAAAAAAAAAAAAAAAAAAAA</p>
      </div>
      <hr />
      <Outlet />
    </>
  ),
});
