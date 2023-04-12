import Image from 'next/image'

export default function Home({ number }) {
  return (
    <>
    <h1>Valor randômico: {number}</h1>

    </>
  )
}

export async function getStaticProps(){
  const date = await fetch(`http://localhost:3001/api/hello`)
  const response = await date.json()

  return{
    props:{
      number: response.value,
  
    },
    revalidate: 10
  }
}