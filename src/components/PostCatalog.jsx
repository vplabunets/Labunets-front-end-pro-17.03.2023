import {Component} from "react";

export default class PostCatalog extends Component {
    state = {
        posts: [],
    };

    async componentDidMount() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await response.json();
        this.setState({posts: [...posts]});

    }

    render() {

        return (<div className="posts">
            <ul className="posts__list">
                {this.state.posts.map(({id, title, body}) => <li className="posts_single-post" key={id}>
                    <h3 className="posts__post-title">{title}</h3>
                    <p className="posts__post-description">{body}</p>
                </li>)}
            </ul>
        </div>)

    }
}
