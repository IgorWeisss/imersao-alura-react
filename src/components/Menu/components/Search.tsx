import {  MagnifyingGlass, X } from "phosphor-react";
import React from "react";
import { SearchFilterProps } from "..";

interface TargetProps extends EventTarget {
  previousElementSibling?: HTMLInputElement
  value?: string
}

interface MouseClickEvent extends React.MouseEvent {
  target: TargetProps
}

interface KeyboardKeyProps extends React.KeyboardEvent<HTMLInputElement> {
  target: TargetProps
}

export function Search ({ setFilter, filter }:SearchFilterProps) {

  function handleButtonClick ({target}:MouseClickEvent) {
        
    const searchInput = target.previousElementSibling
    if (searchInput) {
      searchInput.value = ''
      setFilter(searchInput.value)
    }
  }

  return (
    <div className="flex bg-backgroundBase border border-borderBase rounded-full h-10 min-w-[8rem] w-[28.875rem] justify-between">
      <div className="flex items-center justify-center px-2 ml-2">
        <MagnifyingGlass size={20} color='var(--textInput)'/>
      </div>
      <input 
        className="bg-transparent outline-none w-full text-textColorBase"
        id="searchInput"
        type="text"
        placeholder="Pesquisar"
        onChange={(e) => {
          setFilter(e.target.value)
        }}
        onKeyUp={(e:KeyboardKeyProps) => {
          if (e.key == "Escape") {
            e.target.value = ''
            setFilter(e.target.value)
          }
        }}
      />
      {
        filter !== '' && (
          <button 
            className="flex items-center justify-center rounded-r-full min-w-[2.5rem] md:w-16 bg-backgroundLevel2 border-l border-borderBase"
            onClick={handleButtonClick}
          >
            <X className="pointer-events-none" size={20}/> 
          </button>
        )
      }
    </div>
  )
}