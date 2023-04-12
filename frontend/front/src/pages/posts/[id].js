import { useRouter } from 'next/router'

export async function getStaticPaths(){ // Gera páginas estáticas

//const FETCH = await fetch(`http://localhost:3000/posts/${query}`)
//const resp = await FETCH.json()

  return{
   paths:[{  // paths = rotas

    params:{
      id:"1" ,// localhost:3000/posts/1
    },
    params:{
      id:'2'
    }

   }],
   fallback: false //Caso não listado nesse array, retorna 404

  }
}

export async function getStaticProps(context){
    const { id } = context.params; 

    return{
      props:{
        post: id
      }
    }
}

export default function Post({ post })  {
  return (
<>
  <p>Post: {post}</p>
</>
  )}
