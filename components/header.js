import FancyLink from '@/components/fancyLink'
import Container from '@/components/container'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="py-4 mb-4 md:mb-6 xl:mb-8 border-b border-gray-50 ">
      <Container>
        <div className="flex flex-wrap">
        
          <Link href="/">
            <a className='="font-bold text-2xl uppercase font-semibold'>Jewel</a>
          </Link>

          <nav className="flex w-full ml-auto space-x-3 text-sm md:text-base md:w-auto justify-center items-center">
            <FancyLink destination="/" a11yText="Navigate to the home page" label="Home" />

            <FancyLink destination="/about" a11yText="Navigate to the about page" label="About" />
            <FancyLink destination="/programs" a11yText="Navigate to the programs page" label="Programs" />
            <FancyLink destination="/programs" a11yText="Navigate to the projects page" label="Projects" />
            <FancyLink destination="/" a11yText="Navigate to the events page" label="Events" />
            <FancyLink destination="/" a11yText="Navigate to the media page" label="Media" />
            
            <FancyLink destination="/contact" a11yText="Navigate to the contact page" label="Contact" />
            <FancyLink destination="/about" a11yText="Navigate to the donate page" label="Donate" extraClasses="border-1 py-2 px-4 bg-blue-dark text-white" />
          </nav>
        </div>
      </Container>
    </header>
  )
}