import config from '../../config.json'

interface Favorite {
  name: string
  url: string
  avatar: string
}

interface FavoritesProps {
  favorites: Favorite[]
}

export function Favorites ({ favorites }:FavoritesProps) {
  return (
      <div className='px-4 py-4 md:py-8'>
        <h3 className='font-bold text-base mb-4'>Favoritos</h3>
        <ul className='grid grid-cols-3 sm:grid-cols-4 justify-center md:flex md:flex-wrap md:justify-start self-center gap-2'>
          {favorites.map((fav) => {
            return (
              <li key={fav.name} className='flex text-center justify-center'>
                <a href={fav.url} className="flex h-full flex-col items-center w-28 gap-2">
                  <img
                    src={fav.avatar}
                    alt={`Canal ${fav.name}`}
                    className="rounded-full w-14 md:w-[5rem]"
                  />
                  <p>
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