import axios from "axios";
import { Trash } from "phosphor-react";
import { toast } from "react-toastify";

type DeleteVideoPromptProps = {
  imgUrl: string | undefined
  videoId: string
}

async function handleDeleteVideo(videoId:string) {
 
  const res = await axios.delete(`/api/deleteVideo/${videoId}`)
  console.log(res.data)
  toast.success("Vídeo excluído com sucesso")

}

export function DeleteVideoPrompt ({imgUrl, videoId}:DeleteVideoPromptProps) {
  return (
    <div className="flex flex-col items-center text-center justify-center gap-2 p-2">
      <img src={imgUrl} alt="Thumb" className="w-full h-auto aspect-video object-cover mb-2 rounded" />
      <p className="mb-2">Deseja realmente excluir esse vídeo de seu DevTube?</p>
      <div className="flex gap-2 w-full items-center justify-center">
        <button 
          className="flex items-center justify-center gap-2 rounded bg-backgroundLevel1 text-red-600 p-4 shadow-sm hover:ring-2 hover:ring-red-500 hover:text-red-500 transition-all hover:scale-110"
          onClick={() => {handleDeleteVideo(videoId)}}
        >
          <Trash />
          SIM
        </button>
      </div>
    </div>
  )
}