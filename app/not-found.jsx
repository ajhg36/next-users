import Link from "next/link"

export default function NotFound() {
return (
  <section id="cheems_page">

           <h1>404</h1>

    <img src="~/public/cheems_nps.jpeg" alt="cheems-nps"/>
    <h1 class="cheems">Page Not Found</h1>
    <p class="cheems">La página sufrio amsieda por no encontrar lo que buscas,
      vuelve a intentarlo 404</p>

           <Link href="/">

               Volver

           </Link>

       </section>
      )

}