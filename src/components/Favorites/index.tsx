import { useSWRGetFavorites } from "../../hooks/useSWRGetFavorites"

interface Favorite {
  name: string
  url: string
  avatar: string
}

interface FavoritesProps {
  data: Favorite[]
}

export function Favorites ({ data }:FavoritesProps) {
  
  const { favorites } = useSWRGetFavorites(data)
  
  return (
      <div className='px-4 py-4 md:py-8 bg-backgroundBase'>
        <h3 className='font-bold text-base mb-4 text-textColorBase'>Canais Favoritos</h3>
        <ul className='grid grid-cols-3 sm:grid-cols-4 justify-center md:flex md:flex-wrap md:justify-start self-center gap-2'>
          {favorites.map((fav:Favorite) => {
            return (
              <li key={fav.name} className='flex text-center justify-center'>
                <a href={fav.url} className="flex h-full flex-col items-center w-28 gap-2">
                  <img
                    src={fav.avatar}
                    alt={`Canal ${fav.name}`}
                    className="rounded-full w-14 md:w-[5rem] transition-all hover:scale-110 hover:ring-2 ring-videoCardOverlay"
                  />
                  <p className="text-textColorBase">
                    {fav.name}
                  </p>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
  )
}