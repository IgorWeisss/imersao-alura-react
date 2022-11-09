import { Logo } from "../Logo";
import { DarkModeSwitch } from "./components/DarkModeSwitch";
import { Search } from "./components/Search";

export function Menu () {
  return (
    <div className="flex w-full h-14 px-4 fixed bg-backgroundLevel1 items-center justify-between gap-2">
      <Logo />
      <Search />
      <DarkModeSwitch />
    </div>
  )
}