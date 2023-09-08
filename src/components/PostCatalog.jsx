import {useEffect, useState} from "react";
import {apiJsonPLaceholder} from "../api/apiJsonPLaceholder"

const PostCatalog = () => {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
            const fetchData = async () => {
                const response = await apiJsonPLaceholder();
                setPosts([...response.data]);
            };

            fetchData();
        }
        , []);

    return (<div className="posts">
        <ul className="posts__list">
            {posts.map(({id, title, body}) => <li className="posts_single-post" key={id}>
                <h3 className="posts__post-title">{title}</h3>
                <p className="posts__post-description">{body}</p>
            </li>)}
        </ul>
    </div>)
}


export default PostCatalog