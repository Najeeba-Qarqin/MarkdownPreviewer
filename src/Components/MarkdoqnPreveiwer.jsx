import { useState } from "react";

function MarkdownPerivewer() {
  const [markdownText, setMarkdownText] = useState(defaultMarkdown);

  return (
    <>
      <div>
        <h1>Markdown Preveiwer</h1>
        <div className="boxes-container">
          <textarea name="editor" id="editor" cols='30' rows='3' value={markdownText} onChange={(e) => setMarkdownText(e.target.value)}></textarea>
          <div id="preview">

          </div>
        </div>
      </div>
    </>
  )
}

export default MarkdownPerivewer;