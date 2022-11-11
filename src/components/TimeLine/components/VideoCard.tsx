export interface VideoCardProps {
  title: string,
  url: string,
  thumb: string
}

export function VideoCard({ thumb, title, url }: VideoCardProps) {
  return (
    <li className="">
      <a href={url} target="blank">
        <img 
          className="w-full h-auto aspect-video object-cover mb-2" 
          src={thumb} 
          alt="Thumbnail" 
        />
        <p className="text-base text-textColorBase font-normal">
          {title}
        </p>
      </a>
    </li>
  )
}