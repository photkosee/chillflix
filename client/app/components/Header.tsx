import { Button } from "../../components/ui/button";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between bg-transparent p-5">
      <div className="text-2xl font-bold uppercase text-primary">chillflix</div>

      <Button className="h-9">Sign In</Button>
    </header>
  );
};

export default Header;
