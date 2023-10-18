import { useRouter } from 'next/router'
import { getAllPostSlugs, getPostData } from '../../lib/posts'

export default function ShowcasePost({postData}) {
    const router = useRouter()

    return (
        <>
        <h1>{postData.title}</h1>
        <h2>{postData.category}</h2>
        </>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostSlugs();
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({params}) {
    const postData = await getPostData(params.slug);
    console.log(postData)
    return {
        props: {
            postData
        }
    }
}