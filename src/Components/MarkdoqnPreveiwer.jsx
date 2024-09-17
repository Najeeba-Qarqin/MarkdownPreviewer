import { useState } from 'react';
import Markdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

const defaultMarkdown = `
## 1. Title Headings

# H1 Heading
## H2 Heading
---

## 2. Blockquotes

This is how blockquotes will display:

> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between the arrows.
---


## 3. Lists

This is how unordered lists will look like:

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

---

## 4. Links

[This is what linked text looks like](http://github.com)

[This is a link with a title](http://github.com "title text!")


## 5. Code

Inline code example: \`console.log('Hello, world!')\`

Block code example:

\`\`\`javascript
// This is a code block
function greet() {
  console.log('Hello, world!');
}
\`\`\`

---

## 6 Quote

> This is a block quote

This is **bolded text**

A GIF image:

![Daftpunktocat-Guy](https://octodex.github.com/images/daftpunktocat-guy.gif)

A JPG image with a title:

![Octocat De Los Muertos](https://octodex.github.com/images/octocat-de-los-muertos.jpg "Octocat De Los Muertos")

Like links, images also have a footnote style syntax

---
## 7 Line Break


---
`;

function MarkdownPerivewer() {
  const [markdownText, setMarkdownText] = useState(defaultMarkdown);

  return (
    <>
      <div>
        <h1 id="title">Markdown Preveiwer</h1>
        <div className="boxes-container">
          <div className="container" id="container">
            <h1>Editor</h1>
            <textarea className="box" name="editor" id="editor" value={markdownText} onChange={(e) => setMarkdownText(e.target.value)} />
          </div>
          <div className="container">
            <h1>Preview</h1>
            <div id="preview" className="box">
              <Markdown
                remarkPlugins={[remarkGfm, remarkBreaks]}
              >
                {markdownText}
              </Markdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MarkdownPerivewer;
