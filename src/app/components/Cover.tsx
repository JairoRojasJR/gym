export default function Cover(): JSX.Element {
  return (
    <div className='h-[100vh] w-full'>
      <video
        className='absolute h-full w-full object-cover'
        autoPlay={true}
        loop={true}
        preload='auto'
        muted
      >
        <source src='motivacion-deportiva.webm' type='video/mp4' />
      </video>
      <section className='relative z-[100] flex h-full w-full items-center justify-center'>
        <div className='flex flex-col gap-6'>
          <p className='text-center text-2xl'>
            Por una vida saludable y un cuerpo mamado
            <br />
            <b className='text-6xl'>Supérate</b>
          </p>
          <button className='bg-[#5DC1B9] text-3xl'>OBTENER MEMBRESÍA</button>
        </div>
      </section>
    </div>
  )
}
