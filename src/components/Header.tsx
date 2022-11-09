import config from '../../config.json'

export function Header () {
  return (
    <div>
      <div className='banner'>
        <img src="" alt="" />
      </div>
      <div className='profile-info flex items-center gap-3 py-3 px-3'>
        <div>
          <img className='rounded-[40px] w-10' src={`https://github.com/${config.github}.png`} alt="Foto de perfil" />
        </div>
        <div>
          <h2 className=''>{config.name}</h2>
          <h3 className=''>{config.job}</h3>
        </div>
      </div>
    </div>
  )
}