import NavLinkItem from "./navLinkItem";

export default function Navbar() {
  return (
    <div className="mt-4">
      <nav className="flex justify-content-start items-center gap-6">
        <NavLinkItem routeDescription="Create New" route="/"></NavLinkItem>
        <NavLinkItem
          routeDescription="My Flashcards"
          route="/flashcrads"
        ></NavLinkItem>
      </nav>
      <hr className="relative bottom-1"></hr>
    </div>
  );
}
