import React, {useRef } from 'react';
// import styles from './ArticleContent.module.css';


interface ElementProps {
  content: {
    json: {
      type: string;
      tagname: string;
      children: any[];
      parameters?: { [key: string]: any };
    }
  };
}
function checkXmlFormat(val:any) {
  const convertedParams: { [key: string]: any } = {};
  for (const key in val) {
    if (val.hasOwnProperty(key)) {
      // Convert keys with ':' to camelCase
      const newKey = key.replace(/:(.)/, (_, char) => char.toUpperCase());
      convertedParams[newKey] = val[key];
    }
  }
  return convertedParams
}
const Element: React.FC<ElementProps> = ({ content }) => {
  const { tagname, children, parameters } = content.json || content;
  switch (tagname) {
    case 'div':
      return (
        <div {...checkXmlFormat(parameters)}>
          {children.map((child: any, index: number) => (
            <Element key={index} content={child} />
          ))}
        </div>
      );
    case 'p':
      return <p>{children[0].content}</p>;
    case 'h1':
      return <h1>{children[0].content}</h1>;
    case 'pullquote':
      return (
        <div className="pullquote">
          {children.map((child: any, index: number) => (
            <Element key={index} content={child} />
          ))}
        </div>
      );
    // case 'a':
    //   return (
    //     <a {...parameters}>
    //       {children.map((child: any, index: number) => (
    //         <Element  key={index} content={child} />
    //       ))}
    //     </a>
    //   );
    default:
      return null;
  }
};

export default Element;