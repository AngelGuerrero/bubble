import Head from 'next/head'

function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Bubble app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen container flex justify-center items-center">
        <header className="container flex flex-col justify-center items-center">
          <h1 className={`font-sans font-bold text-6xl text-gray-800`}>
            Working on it!
          </h1>
          <p className="text-gray-600 font-sans text-2xl">
            Platform to offer and receive service proposals!
          </p>
        </header>
      </main>
    </div>
  )
}

export default Home
