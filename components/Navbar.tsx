import MobileSearch from "./MobileSearch";
import Searchbox from "./Searchbox";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className='flex justify-between h-11 w-full items-center mx-auto px-[10%] my-5 '>
      <Link href={"/"}>
        <div className='text-white text-4xl font-extrabold'>MovieBank</div>
      </Link>
      <div className='flex gap-10 items-center'>
        <div className='hidden md:block'>
          <Searchbox />
        </div>
        <div className='md:hidden block'>
          <MobileSearch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
