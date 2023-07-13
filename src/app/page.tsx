import Image from 'next/image'
import Cover from './components/Cover'
import Login from './components/svg/Login'
import Dumbbell from './components/svg/Dumbbell'
import Link from 'next/link'

export default function Home(): JSX.Element {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <nav className='fixed top-0 z-[200] flex w-full min-w-[300px] flex-col items-center gap-2 p-5 sm:flex-row sm:justify-between'>
        <div className='flex items-center'>
          <Image alt='Gym Machala' src='/favicon.ico' width={50} height={50} />
          <h1 className='text-3xl font-bold text-[#FEB3C2]'>SuperSayaGym</h1>
        </div>
        <ul className='flex items-center gap-4'>
          <li className='flex items-center'>
            <Link href='#' className='bg-[#FEB3C2] p-2 text-slate-800'>
              Iniciar sesión
            </Link>
            <Login color='#FEB3C2' />
          </li>
          <li className='flex items-center'>
            <Link href='#' className='bg-[#FEB3C2] p-2 text-slate-800'>
              Máquinas
            </Link>
            <Dumbbell color='#FEB3C2' />
          </li>
        </ul>
      </nav>
      <Cover />
    </main>
  )
}
