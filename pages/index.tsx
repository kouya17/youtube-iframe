import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import YouTube from '../components/youtube'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <YouTube />
    </div>
  )
}

export default Home
