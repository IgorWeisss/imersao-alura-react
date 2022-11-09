import config from '../../config.json'

export function Header () {
  return (
    <div className='mt-14'>
      <div className='banner'>
        <img 
          src={config.banner} alt="Banner"
          className='w-full object-cover object-center max-h-32 md:max-h-56'
        />
      </div>
      <div className='profile-info flex items-center gap-3 py-4 px-4 md:py-3 md:px-3'>
        <div>
          <img
            className='rounded-full w-14 md:w-[5rem]'
            src={`https://github.com/${config.github}.png`} 
            alt="Foto de perfil" 
          />
        </div>
        <div>
          <h2 className='font-bold text-base md:text-2xl'>{config.name}</h2>
          <h3 className='text-gray-500 text-xs md:text-base'>{config.job}</h3>
        </div>
      </div>
    </div>
  )
}