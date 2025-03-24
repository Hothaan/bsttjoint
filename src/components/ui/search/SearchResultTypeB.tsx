"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import Link from "next/link";
import { SetStateAction } from "react";
import Pagination from "../pagination/Pagination";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";
import Post from "@/components/pages/bstt/index/section16/Post";
interface ISearchResultTypeB {
  data: {
    img: string;
    title: string;
    link: string;
    view: string;
    date: string;
    profile: {
      img: string;
      where: string;
      who: string;
    };
  }[];
  pagination: {
    total: number;
    perPage: number;
    current: number;
    onPageChange: React.Dispatch<SetStateAction<number>>;
  };
}

export default function SearchResultTypeB(prop: ISearchResultTypeB) {
  const { data, pagination } = prop;
  const { width } = useWindowSizeContext();
  return (
    <div css={wrap}>
      <p css={title_text}>검색결과</p>
      <ul css={result_item_wrap}>
        {data.map((item, idx) => (
          <li key={idx}>
            <Link href={item.link}>
              <Post
                post={{
                  img: item.img,
                  title: item.title,
                  where: item.profile.where,
                  who: item.profile.who,
                  date: item.date,
                  view: item.view,
                }}
                logo={item.profile.img}
              />
            </Link>
          </li>
        ))}
      </ul>
      <Pagination
        total={pagination.total}
        perPage={pagination.perPage}
        current={pagination.current}
        onPageChange={pagination.onPageChange}
      />
    </div>
  );
}

const wrap = css`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 34px;

  border-radius: 30px;
  background: #fff;

  @media (max-width: 960px) {
    padding: 0 20px;
  }
`;
const title_text = css`
  color: var(--Color-primary, #018c3b);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.48px;
`;

const result_item_wrap = css`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 44px;
  flex-wrap: wrap;

  li {
    width: calc(33.3% - 44px * 2 / 3);
  }

  @media (max-width: 960px) {
    gap: 36px;

    li {
      width: calc(50% - 36px / 2);
      padding-bottom: 36px;
    }
  }
  @media (max-width: 880px) {
    flex-direction: column;
    gap: 24px;

    li {
      width: 100%;
      border-bottom: 1px solid #d9d9d9;
      padding-bottom: 24px;
    }
  }
`;
