export interface ByLine {
  json: {
    type: string;
    tagname: string;
    parameters: {
      xmlns: string;
      'xmlns:xlink': string;
    };
    children: Array<{
      type: string;
      tagname: string;
      children: Array<{
        type: string;
        content: string;
      }>;
    }>;
  };
}

export interface Media {
  image: {
    primary: {
      complete: Array<{
        cropHeight: number;
        cropWidth: number;
        height: number;
        ratio?: string;
        url: string;
        width: number;
        x?: number;
        y?: number;
      }>;
    };
  };
}

export interface DataItem {
  alt?: string;
  byLine: ByLine;
  canonicalURL: string;
  caption: string;
  dates: {
    displayPublished: string;
    published: string;
    updated: string;
  };
  docType: string;
  id: string;
  media: Media;
  source: string;
  sourceURL: string;
  title: string;
  titleAlt: {
    lg: string;
    md: string;
    sm: string;
  };
}
export type DataArray = DataItem[];
export const getUrlById = (data: DataArray, id: string): object | any => {
  const item = data.find(element => element.id === id);
  return {
    url: item ? item?.media?.image?.primary?.complete?.[0]?.url : '',
    width: item ? item?.media?.image?.primary?.complete?.[0]?.width : 0,
    height: item ? item?.media?.image?.primary?.complete?.[0]?.height : 0,
    caption: item ? item?.caption : ''
  }
};