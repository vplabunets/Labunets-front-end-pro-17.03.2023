import React, {useState} from 'react';
import MarkdownEditor from './components/MarkdownEditor';

const App = () => {
    const [markdownContent, setMarkdownContent] = useState("")


    const handleContentChange = (content) => {
        console.log(content)
        return setMarkdownContent(content)
    };

    return (
        <div>
            <MarkdownEditor onContentChange={handleContentChange}/>
            <div dangerouslySetInnerHTML={{__html: markdownContent}}/>
        </div>
    );

}

export default App;