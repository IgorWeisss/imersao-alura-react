import axios from "axios"
import { Plus, Trash } from "phosphor-react"
import { MouseEvent } from "react"
import { toast } from "react-toastify"
import { useSWRGetFavorites } from "../../hooks/useSWRGetFavorites"
import { DeleteFavoritePrompt } from "./components/DeleteFavoritePrompt"

interface Favorite {
  name: string
  url: string
  avatar: string
  id: string
}

interface FavoritesProps {
  data: Favorite[]
}

// PRECISA ALTERAR ESSA FUNÇÃO INCLUINDO UM MODAL PARA ADD FAVORITOS
async function handleCreateFavorite() {
  const res = await axios.post('/api/createFavorite',{
      name: "Filipe Deschamps",
      avatar: "https://yt3.ggpht.com/ytc/AMLnZu9fwc9E-G17B2vMnbYzZBp_NYs4AmCE802y8x08=s88-c-k-c0x00ffffff-no-rj",
      url: "https://www.youtube.com/c/FilipeDeschamps",
      userId: "9c956367-559b-4f7f-9c24-3076fa9f7813"
  })
  console.log(res.data)
  toast.success("Canal favorito cadastrado com sucesso!")
}

function handleDeleteFavorite(event:MouseEvent, favoriteId:string, avatar:string) {
  event.preventDefault()

  toast(<DeleteFavoritePrompt imgUrl={avatar} favoriteId={favoriteId}/>, {
    className: "bg-red-700",
    progressClassName: "bg-white"
  })
  
}

export function Favorites ({ data }:FavoritesProps) {
  
  const { favorites } = useSWRGetFavorites(data)
  
  return (
      <div className='px-4 py-4 md:py-8 bg-backgroundBase'>
        <h3 className='font-bold text-base mb-4 text-textColorBase'>Canais Favoritos</h3>
        <ul className='grid grid-cols-3 sm:grid-cols-4 justify-center md:flex md:flex-wrap md:justify-start self-center gap-2'>
          {favorites.map((fav:Favorite) => {
            return (
              <li key={fav.name} className='flex relative text-center justify-center'>
                <a href={fav.url} className="flex h-full flex-col items-center w-28 gap-2">
                  <img
                    src={fav.avatar}
                    alt={`Canal ${fav.name}`}
                    className="peer rounded-full w-14 md:w-[5rem] transition-all hover:scale-110 hover:ring-2 ring-videoCardOverlay"
                  />
                  <button 
                    className="absolute flex items-center justify-center bg-red-600 text-white w-8 h-8 rounded-full -top-2 right-0 opacity-0 transition-all peer-hover:opacity-50 hover:!opacity-100"
                    onClick={(e) => {handleDeleteFavorite(e, fav.id, fav.avatar)}}
                  >
                    <Trash size={22} />
                  </button>
                  <p className="text-textColorBase">
                    {fav.name}
                  </p>
                </a>
                
              </li>
            )
          })}
          <li className="flex justify-center w-28">
            <button 
              className="group flex items-center justify-center w-14 h-14 md:w-[5rem] md:h-[5rem] bg-backgroundLevel1 rounded-full transition-all hover:scale-110 hover:ring-2 ring-videoCardOverlay"
              // onClick={handleCreateFavorite}
              onClick={() => alert("Em desenvolvimento")}
            >
              <Plus className="transition-all opacity-50 group-hover:opacity-100" color={"var(--textColorBase)"} size={32}/>
            </button>
          </li>
        </ul>
      </div>
  )
}