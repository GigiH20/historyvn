import React, { useRef, useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";


type EditorFormItemProps = {
    value?: string
    onChange?: (value: string) => void
};


const EditorFormItem: React.FC<EditorFormItemProps> = ({ value, onChange }) => {
    const [editorHtml, setEditorHtml] = useState('');
    const editorRef = useRef(null);

    useEffect(() => {
        if (value && value != editorHtml) {
            setEditorHtml(value)
        }
    }, [value])


    return (
    <>
    <input id="my-file" type="file" name="my-file" style={{display:"none"}}  />
    <Editor
        apiKey="guty43qdrsah6uhdublyngx2sxmnsisrcaee5ly06tfcm3gg"
        onInit={(evt: any, editor: any) => editorRef.current = editor}
        value={editorHtml}
        init={{
            height: 500,
            menubar: false,
            plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
            ],
            toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | code | ' +
                "table  image media  wordcount |" +
                'removeformat | help fullscreen',
            image_title: true,
            automatic_uploads: true,
            file_picker_types: 'image',
            file_picker_callback: (callback: any, value: any, meta: any) => {
                if (meta.filetype == 'image') {
                    const input = document.getElementById('my-file') as HTMLInputElement;
                    input.click();
                    input.onchange = () => {
                        const file = input.files![0];
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            console.log('name', e.target!.result);
                            callback(e.target!.result, {
                                alt: file.name
                            });
                        };
                        reader.readAsDataURL(file);
                    };
                }
            },
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
        onEditorChange={(newValue, editor) => {
            setEditorHtml(newValue);
            if (onChange) {
                onChange(newValue)
            }
        }}
    />
</>
)
}

export default EditorFormItem