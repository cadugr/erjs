//Exportamos posi vamos utilizar em outros lugares
export type PostObject = {
    title: string, 
    content: string
}

//O objetivo de criarmos esta interface é para tiparmos as nossas props.  O nome é uma convenção adotada. 
interface PostProps {
    post: PostObject,
    totalComments?: number
}

export default function Post (props: PostProps) {
    console.log('Post foi renderizado')
    return <div>
        <h1>{props.post.title}</h1>
        <p>{props.post.content}</p>
        {
            props.totalComments &&
            <span>
                Comentários: {props.totalComments}
            </span>
        }
    </div>
}