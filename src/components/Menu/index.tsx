import { Logo } from "./components/Logo";
import { Search } from "./components/Search";
import { DarkModeSwitch } from "./components/DarkModeSwitch";

export interface SearchFilterProps {
  setFilter: Function
  filter: string
}

export function Menu ({ setFilter, filter }:SearchFilterProps) {
  return (
    <div className="flex w-full h-14 px-4 fixed bg-backgroundLevel1 items-center justify-between gap-2 z-50">
      <Logo />
      <Search setFilter={setFilter} filter={filter}/>
      <DarkModeSwitch />
    </div>
  )
}