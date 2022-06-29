import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const QuillExample = ({}) => {
    const [value, setValue] = useState('');

    return  <>
            <ReactQuill theme="snow" value={value} onChange={setValue}/>
              {value}
            </>;
}

export default QuillExample;
