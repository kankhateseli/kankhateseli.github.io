import Link from "next/link";
import { useRouter } from "next/router";
const MobileMenu = ({ menu }) => {
  const router = useRouter();
  return (
    <div className="fixed left-2 right-2 top-8 bg-[#59ad89] px-6 grid items-center">
      <header className="w-full rounded-2xl flex items-center justify-center p-5 h-24   bg-[#002b36]">
        <div>
          <ul className="flex">
            {menu.map(({ path, name }, key) => (
              <li
                key={key}
                className={
                  "font-fredoka-one text-white mx-2.5 laptop:text-lg mobile:text-2xl "
                }
              >
                <Link href={path}>{name}</Link>
                {path === router.asPath && (
                  <div className="rounded-3xl w-2 h-2 bg-violet m-auto border-b-4 border-black"></div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
};
export default MobileMenu;
