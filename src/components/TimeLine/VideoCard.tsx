export interface VideoCardProps {
  title: string,
  url: string,
  thumb: string
}

export function VideoCard({ thumb, title, url }: VideoCardProps) {
  return (
    <li>
      <a href={url} target="blank">
        <img className="min-w-[210px] h-[118px] object-cover mb-2" src={thumb} alt="Thumbnail" />
        <p className="text-base font-normal">
          {title}
        </p>
      </a>
    </li>
  )
}