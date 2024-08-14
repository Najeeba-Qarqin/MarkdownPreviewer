import { useState } from "react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";

function MarkdownPerivewer() {
  const [markdownText, setMarkdownText] = useState(defaultMarkdown);

  return (
    <>
      <div>
        <h1>Markdown Preveiwer</h1>
        <div className="boxes-container">
          <textarea name="editor" id="editor" cols='30' rows='3' value={markdownText} onChange={(e) => setMarkdownText(e.target.value)}></textarea>
          <div id="preview">
          <Markdown
              remarkPlugins={[remarkGfm, remarkBreaks]}
            >
              {markdownText}
            </Markdown>
          </div>
        </div>
      </div>
    </>
  )
}

export default MarkdownPerivewer;