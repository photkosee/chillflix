import { Button } from "../../components/ui/button";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center p-5 bg-transparent">
      <div className="uppercase text-2xl font-bold text-primary">
        chillflix
      </div>

      <Button className="h-9">
        Sign In
      </Button>
    </header>
  );
};

export default Header;
