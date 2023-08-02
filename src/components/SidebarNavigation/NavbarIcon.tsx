type NavbarIcon = {
  isOpen: boolean;
  svg: JSX.Element;
};
function NavbarIcon({ isOpen, svg }: NavbarIcon) {
  const lineCSS = `before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-[#f78166]`;

  const isOpenCSS = isOpen ? lineCSS : "";
  return (
    <button
      className={`w-12 h-12 flex justify-center items-center relative  ${isOpenCSS}`}
    >
      {svg}
    </button>
  );
}
export default NavbarIcon;
<svg
  width="64px"
  height="64px"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  fill="#ffffff"
>
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g
    id="SVGRepo_tracerCarrier"
    stroke-linecap="round"
    stroke-linejoin="round"
  ></g>
  <g id="SVGRepo_iconCarrier">
    <path d="M10.94 13.5l-1.32 1.32a3.73 3.73 0 0 0-7.24 0L1.06 13.5 0 14.56l1.72 1.72-.22.22V18H0v1.5h1.5v.08c.077.489.214.966.41 1.42L0 22.94 1.06 24l1.65-1.65A4.308 4.308 0 0 0 6 24a4.31 4.31 0 0 0 3.29-1.65L10.94 24 12 22.94 10.09 21c.198-.464.336-.951.41-1.45v-.1H12V18h-1.5v-1.5l-.22-.22L12 14.56l-1.06-1.06zM6 13.5a2.25 2.25 0 0 1 2.25 2.25h-4.5A2.25 2.25 0 0 1 6 13.5zm3 6a3.33 3.33 0 0 1-3 3 3.33 3.33 0 0 1-3-3v-2.25h6v2.25zm14.76-9.9v1.26L13.5 17.37V15.6l8.5-5.37L9 2v9.46a5.07 5.07 0 0 0-1.5-.72V.63L8.64 0l15.12 9.6z"></path>
  </g>
</svg>;
