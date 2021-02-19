import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>税税</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>👩‍🦰 <strong>Hi 我是税税</strong> ✌</div>
    </div>
  )
}
