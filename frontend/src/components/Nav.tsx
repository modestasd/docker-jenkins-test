'use client';
import Link from 'next/link'

const Nav = () => {
    return (
        <nav className='flex justify-between items-center w-full py-3 px-4 bg-neutral-800'>
            <Link href='/' className='flex gap-2 flex-center'>
                <p>Docker test</p>
            </Link>

            <div className='sm:flex hidden'>
                <button
                    type='button'
                    onClick={() => () => {}}
                    className='rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm flex items-center justify-center'
                    >
                    Sign in
                </button>
            </div>
        </nav>
    )
}

export default Nav