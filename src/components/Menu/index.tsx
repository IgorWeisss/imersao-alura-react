import { Logo } from "./components/Logo";
import { Search } from "./components/Search";
import { DarkModeSwitch } from "./components/DarkModeSwitch";

export interface SearchFilterProps {
  setFilter: Function
}

export function Menu ({ setFilter }:SearchFilterProps) {
  return (
    <div className="flex w-full h-14 px-4 fixed bg-backgroundLevel1 items-center justify-between gap-2">
      <Logo />
      <Search setFilter={setFilter}/>
      <DarkModeSwitch />
    </div>
  )
}