/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ArrowLeft from "@/assets/components/ui/pagination/arrowLeft.svg";
import ArrowRight from "@/assets/components/ui/pagination/arrowRight.svg";
import { SetStateAction } from "react";

interface IPaginationProps {
  total: number;
  perPage: number;
  current: number;
  onPageChange: React.Dispatch<SetStateAction<number>>;
}

export default function Pagination(prop: IPaginationProps) {
  const { total, perPage, current, onPageChange } = prop;
  const totalPages = Math.ceil(total / perPage);
  const maxVisiblePages = 5; // 항상 5개 유지

  let minPage = Math.max(1, current - Math.floor(maxVisiblePages / 2));
  let maxPage = minPage + maxVisiblePages - 1;

  // maxPage가 totalPages보다 크면 조정
  if (maxPage > totalPages) {
    maxPage = totalPages;
    minPage = Math.max(1, maxPage - maxVisiblePages + 1);
  }

  const pageNumbers = Array.from(
    { length: maxPage - minPage + 1 },
    (_, i) => minPage + i
  );

  return (
    <nav css={paginationContainer}>
      <button
        css={icon_container_button}
        disabled={current === 1}
        onClick={() => onPageChange(current - 1)}
      >
        <ArrowLeft />
      </button>

      <div css={pagination_item_wrap}>
        {pageNumbers.map((page) => (
          <button
            key={page}
            css={[buttonStyle, current === page && activeButton]}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        css={icon_container_button}
        disabled={current === totalPages}
        onClick={() => onPageChange(current + 1)}
      >
        <ArrowRight />
      </button>
    </nav>
  );
}

const paginationContainer = css`
  width: 100%;
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;

  @media (max-width: 374px) {
    gap: 12px;
  }
`;

const pagination_item_wrap = css`
  display: flex;
  align-items: center;
`;

const icon_container_button = css`
  padding: 0;
  border: none;

  cursor: pointer;

  width: 18px;
  height: 18px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const buttonStyle = css`
  display: flex;
  width: 30px;
  height: 30px;

  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 50%;

  cursor: pointer;

  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;

  &:hover {
    background: #018c3b;
    color: #fff;
  }
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: 960px) {
    font-size: 13px;
  }
  @media (max-width: 374px) {
    width: 24px;
    height: 24px;
  }
`;

const activeButton = css`
  background: #018c3b;
  color: white;
`;
