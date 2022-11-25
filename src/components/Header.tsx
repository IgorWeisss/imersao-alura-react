interface HeaderProps {
  banner: string
  github: string
  name: string
  job: string
}

export function Header ({ banner, github, name, job }:HeaderProps) {
  return (
    <div className='mt-14 bg-backgroundLevel1'>
      <div className='banner'>
        <img 
          src={banner} alt="Banner"
          className='w-full object-cover object-center max-h-32 md:max-h-56'
        />
      </div>
      <div className='profile-info flex items-center gap-3 py-4 px-4 md:py-3 md:px-3'>
        <div>
          <a href={`https://github.com/${github}`} target="blank">
            <img
              className='rounded-full w-14 md:w-[5rem] ring-videoCardOverlay transition-all hover:ring-2 hover:scale-110'
              src={`https://github.com/${github}.png`}
              alt="Foto de perfil"
            />
          </a>
        </div>
        <div>
          <h2 className='font-bold text-base text-textColorBase md:text-2xl'>{name}</h2>
          <h3 className='text-textColorBase text-xs md:text-base'>{job}</h3>
        </div>
      </div>
    </div>
  )
}