import html from "../../assets/html.webp"
import css from "../../assets/css.webp"
import js from "../../assets/js.webp"
import typescript from "../../assets/typescript.webp"
import bootstrap from "../../assets/bootstrap.webp"
import mui from "../../assets/mui.webp"
import react from "../../assets/react.webp"
import next from "../../assets/next.webp"
import sass from "../../assets/sass.webp"
import github from "../../assets/github.webp"
import Image from 'next/image'
export default function Skills({params}) {
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
