import Head from 'next/head'
import LoginForm from '../components/LoginForm'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Mon Informaticien</title>
      </Head>

      <main className="">
        <h1>Bonjour tout le monde</h1>
      </main>
    </div>
  )
}
