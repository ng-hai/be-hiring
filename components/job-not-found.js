import Link from 'next/link'

export default function JobNotFound() {
  return (
    <div className="mx-auto p-4 post" style={{ maxWidth: '70ch' }}>
      <p className="text-xl font-bold">We&apos;re so sorry! 😥</p>
      <p>
        It seems like the address is not available, which maybe caused by
        expired or non-existed document.
      </p>
      <p>No worry, there are still many other opportunities for you.</p>
      <Link href="/" as="/">
        <a>
          <button className="btn mt-4">Take me there</button>
        </a>
      </Link>
    </div>
  )
}
