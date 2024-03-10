import html from "../_images/html.webp"
import css from "../_images/css.webp"
import js from "../_images/js.webp"
import typescript from "../_images/typescript.webp"
import bootstrap from "../_images/bootstrap.webp"
import mui from "../_images/mui.webp"
import react from "../_images/react.webp"
import next from "../_images/next.webp"
import sass from "../_images/sass.webp"
import github from "../_images/github.webp"
import Image from 'next/image'
export default function Skills({params}) {
  console.log("params")
  return (
    <div className={` bg-bgPrimary whitespace-nowrap overflow-hidden ${params.locale==="ar"&&"flex flex-row-reverse"}`}>
      <div className={`scroll-smooth py-11 scrollSkills inline-block w-fit ` }>
        {[html, css, js, typescript, sass, bootstrap, mui, react, next, github].map((e,index) => (
          <div className='h-20 w-20 inline-block mx-4' key={index}>
            <Image loading="lazy" className='h-full w-full' width={100} height={100} src={e} alt={e} />
          </div>
        ))}
      </div>
      <div className='scroll-smooth py-11 scrollSkills inline-block w-fit' >
        {[html, css, js, typescript, sass, bootstrap, mui, react, next, github].map((e,index) => (
          <div className='h-20 w-20 inline-block mx-4' key={index}>
            <Image loading="lazy" className='h-full w-full' width={100} height={100} src={e} alt={e} />
          </div>
        ))}
      </div>
    </div>
  )
}
