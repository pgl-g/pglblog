
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useRouter } from 'next/router';
import { Button, Input, message } from 'antd';

import Styles from './index.module.scss';

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor"),
  { ssr: false }
);

const Editor = () => {
  const [title, setTitle] = useState('');

  const [content, setContent] = useState('');

  const router = useRouter();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleOnPublish = () => {
    if (!title) {
      message.warning('请输入文章标题');
    }

    // 跳到首页
    router.replace('/')
  }

  const handleContentChange = (content) => {
    setContent(content);
  }

  return (
    <div className={Styles.container}>

      <div className={Styles.operation}>
        <Input className={Styles.title} onChange={handleTitleChange} placeholder="请输入文章标题" value={title} />
        <Button className={Styles.button} type="primary" onClick={handleOnPublish}>发布</Button>
      </div>

      <MDEditor value={content} height={1080} onChange={handleContentChange} />
    </div>
  );
}

Editor.layout = null;

export default Editor;
