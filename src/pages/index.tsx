/* eslint-disable @next/next/no-img-element */
import { Data } from './api/menu'
import getMenu, { alimentoItemProps } from '@/lib/menu'
import Item from '@/components/Item'

export default function Home({ menu }: { menu: Data }) {
  
  return (
    <section className='container-cardapio'>
      <div className='body-cardapio' />
      <section className='containerWhoIAm'>
        <h3><span>MADRUGAS</span> <br /><span><b>B</b><b>URGUER</b></span></h3>
        <section>
          <span><img src='/social/instagram.svg' alt='instragram' width={30} />@madrugas_oficial</span>
          <span><img src='/social/icon-pix.svg' alt='pix' width={50} />(11)958990277</span>
          <span><img src='/social/ifood.svg' alt='ifood' width={40} />Madrugas Burguer</span>
        </section>
      </section>
      <h3>Hambúrguers</h3>
      <section className='containerBurguer'>
        <section>
          <h3>90G - Comum</h3>
          {menu?.alimentos?.hamburguers?.comum.map((data: alimentoItemProps, index: number) => {
            return (<Item key={index} { ...data } />)
          })}
        </section>
        <section>
          <h3>160G - Artesanal</h3>
          {menu?.alimentos?.hamburguers?.artesanal.map((data: alimentoItemProps, index: number) => {
            return (<Item key={index} { ...data } />)
          })}
        </section>
      </section>
      <section className='sectionCombos'>
        <h3>COMBOS</h3>
        <section className='containerCombos'>
          {menu?.alimentos?.combo.map((data: alimentoItemProps, index: number) => {
            return (<Item key={index} { ...data } />)
          })}
        </section>
      </section>
      <section className='containerDogAndPotato'>      
        <section>
          <h3>HotDog</h3>
        {menu?.alimentos?.hotDog.map((data: alimentoItemProps, index: number) => {
          return (<Item key={index} { ...data } />)
        })}
        </section>
        <section>
        <h3>Batatas</h3>
        {menu?.alimentos?.batatas.map((data: alimentoItemProps, index: number) => {
          return (<Item key={index} { ...data } />)
        })}
        </section>
      </section>

      <section className='bebidas'>
          <h3>Bebidas</h3>
        {menu?.bebidas.map((data: alimentoItemProps, index: number) => {
          return (<Item key={index} { ...data } />)
        })}
      </section>
    </section>
  )
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const menu = getMenu()
  return {
    props: {
      menu,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 60 * 60, // In seconds
  }
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
// export async function getStaticPaths() {
//   const res = await fetch('https://.../posts')
//   const posts = await res.json()

//   // Get the paths we want to pre-render based on posts
//   const paths = posts.map((post) => ({
//     params: { id: post.id },
//   }))

//   // We'll pre-render only these paths at build time.
//   // { fallback: 'blocking' } will server-render pages
//   // on-demand if the path doesn't exist.
//   return { paths, fallback: 'blocking' }
// }