import { MagnifyingGlass } from "phosphor-react";
import { SearchFilterProps } from "..";

export function Search ({ setFilter }:SearchFilterProps) {

  return (
    <div className="flex bg-backgroundBase border border-borderBase rounded-sm h-10 min-w-[8rem] w-[28.875rem] justify-between">
      <input 
        className="bg-transparent outline-none ml-3 min-w-[2rem] md:w-96 text-textColorBase" 
        type="text"
        onChange={(e) => {
          setFilter(e.target.value)
        }}
      />
      <button className="flex items-center justify-center min-w-[2.5rem] md:w-16 bg-backgroundLevel2 border-l border-borderBase">
        <MagnifyingGlass size={20}/> 
      </button>
    </div>
  )
}