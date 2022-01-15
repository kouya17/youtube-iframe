import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import YouTube from '../components/youtube'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <YouTube />
      <br/>
      <a href="https://github.com/kouya17/youtube-iframe">Source code</a>
    </div>
  )
}

export default Home
