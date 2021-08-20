import Head from "next/head"
import Header from "../components/Header"
import HeaderOptions from "../components/HeaderOptions"
function search({results}) {
    console.log(results)
    return (
        <div>
            <Head>
                <title>search results</title>
            </Head>
            <Header/>
            <HeaderOptions/>
        </div>
    )
}

export default search

export async function getServerSideProps(context){
    const useDummyData = false 

    const data = await fetch (`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}`)
    .then(res=>res.json())
    return{
        props:{
            results:data
        }
    }
}
