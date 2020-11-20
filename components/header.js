import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed w-full bg-white z-10 border-b border-solid border-grey-2 h-16 md:h-20">
      <div className="container mx-auto flex items-center justify-between h-full px-4">
        <div className="flex items-center ">
          <Link href="/" as="/">
            <a className="h-full">
              <div className="flex items-center mt-2">
                <img src="/icons/be-hiring.svg" alt="be" />
              </div>
            </a>
          </Link>
        </div>
        <Link href={`/about`} as={`/about`}>
          <a>
            <span className="text-base font-display font-bold">About Us</span>
          </a>
        </Link>
      </div>
    </header>
  )
}
