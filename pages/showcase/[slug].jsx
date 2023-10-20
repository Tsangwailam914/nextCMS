import { useRouter } from 'next/router'
import { getAllPostSlugs, getPostData } from '../../lib/posts'
import { parseISO, format } from 'date-fns'

export default function ShowcasePost({postData}) {
    const router = useRouter()

    return (
        <>
        <h1>{postData.title}</h1>
        <h2>{postData.category}</h2>
        <span>{postData.date}</span>
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
    // postData.date = format(parseISO(postData.date), 'LLLL d,yyyy')
    const test = parseISO('2023-10-18T17:16:22.002Z')
    postData.date = format(test, 'MM/dd/yyyy')
    return {
        props: {
            postData
        }
    }
}