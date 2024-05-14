import React from 'react';
import { DataArray, getUrlById } from '../../../helpers/dataHelper';
// import styles from './ArticleContent.module.css';


interface ElementProps {
  content: {
    json: {
      type: string;
      tagname: string;
      children: any[];
      parameters?: { [key: string]: any };
    }
  }
  mediaEmbedded?: object[];
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
const mediaList:object | any = []
const Element: React.FC<ElementProps> = ({ content, mediaEmbedded}) => {
  const { tagname, children, parameters } = content.json || content;
  if(mediaEmbedded) mediaEmbedded.forEach(x => mediaList.push(x))
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
        <div className="pullquote text-center p-[30px] text-[18px] font-semibold">
          {children.map((child: any, index: number) => (
            <Element key={index} content={child} />
          ))}
        </div>
      );
    case 'a':
      const data: DataArray = [
        ...mediaList
      ];
      const media = getUrlById(data, parameters?.ref);
      return <div className={`media-content pt-5 pb-8 w-[${media.width}]`}>
        <img className='bg-gray-200' src={media.url} width={media.width} height={media.height} alt={parameters?.alt || 'Image'} />
        <span className='text-gray-600 text-[14px] italic'>{media.caption}</span>
      </div>;
    default:
      return null;
  }
};

export default Element;