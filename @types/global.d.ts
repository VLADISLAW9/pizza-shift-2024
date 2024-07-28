declare module '*.{ts,tsx}' {
  import 'vite/client';
}

declare module '*.svg' {
  import type React from 'react';

  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
