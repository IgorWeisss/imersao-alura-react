export interface VideoCardProps {
  title: string,
  url: string,
  thumb: string
}

export function VideoCard({ thumb, title, url }: VideoCardProps) {
  return (
    <li className="group">
      <a href={url} target="blank">
        <div className="w-full h-auto aspect-video relative transition-all group-hover:scale-110 group-hover:z-50 rounded bg-transparent group-hover:bg-radial-gradient">
          <div className="flex absolute w-full h-full rounded">

          </div>
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