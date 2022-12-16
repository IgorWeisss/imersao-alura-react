import { Pencil, Trash } from "phosphor-react"
import { MouseEvent } from "react";
import { toast } from "react-toastify";
import { DeleteVideoPrompt } from "./DeleteVideoPrompt";

export interface VideoCardProps {
  title: string,
  url: string,
  thumb: string,
  videoId: string
}

interface MouseClickEventTarget extends EventTarget {
  parentElement: HTMLElement
}

interface MouseClickEvent extends MouseEvent<HTMLButtonElement> {
  target: MouseClickEventTarget
}

function handleEditVideo(event:MouseEvent) {
  event.preventDefault()
  console.log(event.target);

  alert("Modify")
}

function handleDeleteVideo(event:MouseEvent, videoId:string, thumb:string) {
  event.preventDefault()

  toast(<DeleteVideoPrompt imgUrl={thumb} videoId={videoId}/>, {
    className: "bg-red-700",
    progressClassName: "bg-white"
  })
  
}

export function VideoCard({ thumb, title, url, videoId }: VideoCardProps) {
  return (
    <li className="group">
      <a href={url} target="blank">
        <div className="w-full h-auto aspect-video relative transition-all group-hover:scale-110 group-hover:z-20 rounded bg-transparent group-hover:bg-radial-gradient">
          <button
            className="opacity-0 flex justify-center items-center absolute w-9 h-9 rounded-full bg-red-600 right-1 top-1 transition-all group-hover:opacity-50 hover:!opacity-100"
            onClick={(e) => {handleDeleteVideo(e, videoId, thumb)}}
          >
            <Trash size={28} color="white" className="pointer-events-none" />
          </button>
          <img 
            className="w-full h-auto aspect-video object-cover mb-2 rounded" 
            src={thumb} 
            alt="Thumbnail" 
          >
          </img>
          <p className="text-base text-textColorBase group-hover:text-white font-normal p-2">
            {title}
          </p>
        </div>
      </a>
    </li>
  )
}