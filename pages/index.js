import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import 

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>税税</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div> <img src="/me.jpg" className="avatar"/> </div>
      <div style={{backgroundColor:'#fff',fontSize:'1.5em'}}>👩‍🦰 <strong>Hi 我是税税</strong> ✌</div>
    </div>
  )
}
