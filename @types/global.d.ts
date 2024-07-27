declare module '*.{ts,tsx}' {
  import 'vite/client';
}

declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}
