type StaticImageData = {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
};

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg'
{
  const content: StaticImageData;
  export default content;
}

declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}
