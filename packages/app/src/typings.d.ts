declare module '*.less' {
  const content: { readonly [className: string]: string };
  export default content;
}
