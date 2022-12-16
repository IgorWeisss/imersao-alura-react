import axios from "axios";
import { Trash } from "phosphor-react";
import { toast } from "react-toastify";

type DeleteFavoritePromptProps = {
  imgUrl: string | undefined
  favoriteId: string
}

async function handleDeleteFavorite(favoriteId:string) {
 
  const res = await axios.delete(`/api/deleteFavorite/${favoriteId}`)
  console.log(res.data)
  toast.success("Canal favorito excluído com sucesso")

}

export function DeleteFavoritePrompt ({imgUrl, favoriteId}:DeleteFavoritePromptProps) {
  return (
    <div className="flex flex-col items-center text-center justify-center gap-2 p-2">
      <img src={imgUrl} alt="Thumb" className="w-14 md:w-[5rem] rounded-full object-cover mb-2" />
      <p className="mb-2">Deseja realmente excluir esse canal dos seus favoritos?</p>
      <div className="flex gap-2 w-full items-center justify-center">
        <button 
          className="flex items-center justify-center gap-2 rounded bg-backgroundLevel1 text-red-600 p-4 shadow-sm hover:ring-2 hover:ring-red-500 hover:text-red-500 transition-all hover:scale-110"
          onClick={() => {handleDeleteFavorite(favoriteId)}}
        >
          <Trash />
          SIM
        </button>
      </div>
    </div>
  )
}