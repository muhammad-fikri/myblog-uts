//@ts-nocheck
import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import Jumbotron from '../component/jumbotron'
import Article from '../component/article'
import Pagination from '../component/pagination'
import Sidebar from '../component/sidebar'
import Layout from '../component/layout'
import Menu from '../data-dummy/menu.json'
export default function Search({ props }) {
  return (
   
<Layout  LayoutProps ={props.menu} >
 
  <div className="row">
    <div className="col-md-8">
      <h3 className="pb-4 mb-4 fst-italic border-bottom">
        Search page
      </h3>
     <form action="">
         <div className="form-group">
             <label htmlFor="">isikan kata kunci di label</label>
             <input type="text" className="form-control"/>
         </div>
         </form>     
 
    </div>
    <Sidebar />
  </div>
</Layout>

  )
}
Search.getInitialProps = () =>{
  return {
    props : {
      menu: Menu,
    }
  }
} 