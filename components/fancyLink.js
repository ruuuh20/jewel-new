import Link from 'next/link'

export default function FancyLink( {destination, a11yText, label, extraClasses} ) {
  return (
    <Link href={destination}>
      <a aria-label={a11yText} className={`text-[#242b2d] hover:text-black focus:text-black ${extraClasses}`}>
        {label}
      </a>
    </Link>
  )
}