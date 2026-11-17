declare module '*.jpg'
declare module '*.png'
declare module '*.mdx' {
  const MDXComponent: (props: Record<string, unknown>) => JSX.Element;
  export default MDXComponent;
}
declare module 'url:*' {
  const url: string;
  export default url;
}
