import { useState } from 'react';
import Markdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

const defaultMarkdown = `
## 1. Title Headings

This is what headings will look like:

# H1 Heading
## H2 Heading
### H3 Heading
#### H4 Heading
##### H5 Heading
###### H6 Heading

---

## 2. Horizontal Rules

Three different ways to write the rule element:

___
---
***
---

## 3. Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'

---

## 3. Blocks of text

This is what a couple of paragraphs will look like:

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae dui in velit bibendum aliquet nec vitae ex. Vivamus tincidunt porttitor est a lacinia. Nulla finibus tortor at nibh efficitur aliquam. Quisque tincidunt pharetra fermentum. Suspendisse et est eget dolor molestie tristique quis quis ex. Aenean ultricies sapien vel mi laoreet finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Morbi egestas, enim a scelerisque lobortis, ipsum ex scelerisque velit, ut convallis massa urna non nisi. Duis tempor enim ut lectus porta semper. Vestibulum nec est vitae turpis mollis volutpat at sit amet magna. Aenean non sem euismod, sodales est a, iaculis magna. Praesent molestie ex sed erat bibendum, id blandit orci venenatis.

---

## 4. Emphasis

**This is bold text**

__This is also bold text__

*This is italic text*

_This is also italic text_

**_This is both bold and italic text_**

~~This is strikethrough text~~

---

## 5. Blockquotes

This is how blockquotes will display:

> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between the arrows.
---


## 6. Lists

This is how unordered lists will look like:

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

---

## 7. Links

[This is what linked text looks like](http://github.com)

[This is a link with a title](http://github.com "title text!")

## 8. Code


Inline code example: \`console.log('Hello, world!')\`

\`\`\`javascript
// This is a code block
function greet() {
  console.log('Hello, world!');
}
\`\`\`

---

## 9 Quote

> This is a block quote

This is **bolded text**

A GIF image:

*[GIF]: Graphics Interchange Format

![Daftpunktocat-Guy](https://octodex.github.com/images/daftpunktocat-guy.gif)

A JPG image with a title:

*[JPG]: Joint Photographic Experts Group

![Octocat De Los Muertos](https://octodex.github.com/images/octocat-de-los-muertos.jpg "Octocat De Los Muertos")

Like links, images also have a footnote style syntax

---
## 10 Line Break


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
