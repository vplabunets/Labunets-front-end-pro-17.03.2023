import React, {useEffect, useState} from 'react';
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const MarkdownEditor = ({onContentChange}) => {
    const editorRef = React.createRef()
    const [editor, setEditor] = useState(null)


    useEffect(() => {
        if (!editor) {
            const editor = new Editor({
                el: editorRef.current,
                height: '800px',
                hideModeSwitch: true,
                initialEditType: 'markdown',
                previewStyle: 'vertical',
            });

            setEditor(editor);

            editor.addHook('change', () => {
                const content = editor.getMarkdown();
                if (onContentChange) {
                    onContentChange(content);
                }
            });
  
        }
    }, [onContentChange, editor]);

    return <div ref={editorRef}/>;

}

export default MarkdownEditor;