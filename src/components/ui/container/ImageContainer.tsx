/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface IImageContainer extends Container {
  maxWidth: string;
}

export default function ImageContainer(prop: IImageContainer) {
  const { children, maxWidth } = prop;
  return (
    <div css={wrap(maxWidth)} className="image_container">
      {children}
    </div>
  );
}

const wrap = (maxWidth: string) => css`
  width: 100%;
  max-width: ${maxWidth};
  position: relative;

  img {
    width: 100%;
    object-fit: cover;
  }
`;
