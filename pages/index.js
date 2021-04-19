//@ts-nocheck
import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import Jumbotron from '../component/jumbotron'
import Article from '../component/article'
import Pagination from '../component/pagination'
import Sidebar from '../component/sidebar'
import Layout from '../component/layout'
import Post from '../data-dummy/post.json'

export default function Home({ menu, post }) {
  return (
   
<Layout  LayoutProps ={ menu} >
  <Jumbotron/>

  <div className="row">
    <div className="col-md-8">
      <h3 className="pb-4 mb-4 fst-italic border-bottom">
        From the Firehose
      </h3>
      {
        post.map(p=>(
          <Article key={p.id} post ={p} />
        ))

        
      }
      
      <Pagination />

    </div>
    <Sidebar />
  </div>
</Layout>

  )
}
export async function getStaticProps(){
  const req =  await fetch('http://localhost:3000/api/hello')
  const res = await req.json()
  return {
    props : {
      menu: res,
     post : Post
    }
  }
} 