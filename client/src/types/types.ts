
export type MenuItem = {
    label: string,
    value: string,
};

export type Definition = {
    id: number, 
    title: string, 
    description: string,
};

export type StringDict = {
    [key:string] : string,
};

export type CarouselProps = {
    height?: string,
    children: any,
    auto?: boolean,
    interval?: number,
};

export type CarouselItemProps = {
    height?: string,
    children?: any,
};