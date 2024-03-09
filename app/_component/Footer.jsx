export default function Footer() {
    const date=new Date()
  return (
    <div className='text-center bg-bgPrimary py-5 border-t-2'>
      Created with love by Aya © {date.getFullYear()}
    </div>
  )
}
