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
        <ul className='flex gap-2'>
          {favorites.map((fav) => {
            return (
              <li className='w-14 md:w-[5rem] flex text-center justify-items-stretch'>
                <a href={fav.url}>
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