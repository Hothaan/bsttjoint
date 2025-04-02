"use client";
/** @jsxImportSource @emotion/react */
import { CustomTheme } from "@/styles/theme";
import { css, useTheme } from "@emotion/react";
import { SetStateAction } from "react";
import Link from "next/link";
import Pagination from "../pagination/Pagination";
import { useWindowSizeContext } from "@/components/ui/provider/WindowSizeProvider";

interface ISearchResultTypeA {
  data: {
    img: string;
    title: string;
    desc: string;
    link: string;
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

export default function SearchResultTypeA(prop: ISearchResultTypeA) {
  const { data, pagination } = prop;
  const { width } = useWindowSizeContext();
  if (width === null) {
    return;
  }

  return (
    <div css={wrap}>
      <p css={title_text}>검색결과</p>
      <div css={result_wrap}>
        <ul css={result_item_wrap}>
          {width > 960 &&
            data.map((item, idx) => (
              <li key={idx + `search result item`}>
                <Link href={item.link} css={result_item}>
                  <div css={content_wrap}>
                    <div css={profile_wrap}>
                      <div css={profile_inner_wrap}>
                        <div css={profile_img_container}>
                          <img src={item.profile.img} alt={item.profile.who} />
                        </div>
                        <p css={where_who_text}>{item.profile.where}</p>
                      </div>
                      <span css={stroke}></span>
                      <p css={where_who_text}>{item.profile.who}</p>
                    </div>

                    <div css={post_wrap}>
                      <p css={post_title_text}>{item.title}</p>
                      <p css={post_desc_text}>{item.desc}</p>
                    </div>
                  </div>
                  <div css={img_container}>
                    <img src={item.img} alt="result post" />
                  </div>
                </Link>
              </li>
            ))}
          {width < 960 &&
            data.map((item, idx) => (
              <li key={idx + `search result item`}>
                <Link href={item.link} css={result_item}>
                  <div css={content_wrap}>
                    <div css={profile_title_wrap}>
                      <div css={profile_wrap}>
                        <div css={profile_inner_wrap}>
                          <div css={profile_img_container}>
                            <img
                              src={item.profile.img}
                              alt={item.profile.who}
                            />
                          </div>
                          <p css={where_who_text}>{item.profile.where}</p>
                        </div>
                        <span css={stroke}></span>
                        <p css={where_who_text}>{item.profile.who}</p>
                      </div>
                      <p css={post_title_text}>{item.title}</p>
                    </div>
                  </div>
                  <div css={post_img_wrap}>
                    <div css={post_wrap}>
                      <p css={post_desc_text}>{item.desc}</p>
                    </div>
                    <div css={img_container_under_960}>
                      <img src={item.img} alt="result post" />
                    </div>
                  </div>
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
    </div>
  );
}

const result_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 94px;

  @media (max-width: 1600px) {
    gap: 80px;
  }
  @media (max-width: 1200px) {
    gap: 60px;
  }
  @media (max-width: 960px) {
    gap: 24px;
  }
`;

const profile_title_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 374px) {
    gap: 10px;
  }
`;

const post_img_wrap = css`
  height: auto;
  display: flex;
  align-items: start;

  gap: 40px;

  @media (max-width: 480px) {
    width: 100%;
    gap: 0;
    justify-content: space-between;
  }
  @media (max-width: 375px) {
  }
`;

const content_wrap = css`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 960px) {
    width: 100%;
  }
`;
const profile_wrap = css`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;

  @media (max-width: 960px) {
    gap: 4px;
  }
  @media (max-width: 374px) {
    flex-direction: column;
    align-items: start;

    border-bottom: 1px solid #d9d9d9;
    padding-bottom: 10px;
  }
`;

const profile_inner_wrap = css`
  display: flex;
  gap: 4px;
  align-items: center;
`;
const profile_img_container = css`
  height: 34px;
  width: 34px;
  aspect-ratio: 20 / 20;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1600px) {
    height: 24px;
    width: 24px;
  }
  @media (max-width: 960px) {
    height: 22px;
    width: 22px;
  }
  @media (max-width: 374px) {
    display: none;
  }
`;
const where_who_text = css`
  color: var(--Black-title, #131313);
  leading-trim: both;
  text-edge: cap;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.32px;

  @media (max-width: 1600px) {
    font-size: 14px;
  }
  @media (max-width: 960px) {
    font-size: 12px;
    white-space: nowrap;
  }
`;
const stroke = css`
  display: block;
  width: 1px;
  height: 0.5em;
  background-color: #acacac;

  @media (max-width: 374px) {
    display: none;
  }
`;

const post_wrap = css`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 960px) {
    width: 70%;
    flex-shrink: 0;
  }
  @media (max-width: 375px) {
    gap: 0;
  }
`;
const post_title_text = css`
  color: #3c3c3c;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;

  @media (max-width: 1800px) {
    font-size: 30px;
  }
  @media (max-width: 1600px) {
    font-size: 28px;
  }
  @media (max-width: 1400px) {
    font-size: 26px;
  }
  @media (max-width: 1200px) {
    font-size: 24px;
  }
  @media (max-width: 960px) {
    font-size: 20px;
    -webkit-line-clamp: 2;
  }
`;

const post_desc_text = css`
  color: var(--text, #3c3c3c);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;

  @media (max-width: 1800px) {
    font-size: 18px;
  }
  @media (max-width: 1600px) {
    font-size: 16px;
  }
  @media (max-width: 960px) {
    font-size: 14px;
  }
  @media (max-width: 374px) {
    font-size: 12px;
  }
`;
const img_container = css`
  height: 144px;
  width: auto;
  aspect-ratio: 153 / 144;

  border-radius: 15px;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1600px) {
    height: 133px;
  }
  @media (max-width: 1200px) {
    height: 122px;
  }
  @media (max-width: 960px) {
    border-radius: 10px;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: auto;
      width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  }
  @media (max-width: 680px) {
  }
  @media (max-width: 480px) {
    border-radius: 5px;
  }
  @media (max-width: 375px) {
  }
`;

const img_container_under_960 = css`
  width: calc(25% - 40px);
  height: auto;

  aspect-ratio: 1 / 1;

  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 480px) {
    width: calc(25% - 20px);
    border-radius: 5px;
  }
  @media (max-width: 375px) {
    width: calc(25% - 10px);
  }
`;

const wrap = css`
  display: flex;
  width: 100%;
  padding: 64px 150px;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 34px;

  border-radius: 30px;
  background: #fff;

  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.1);

  @media (max-width: 1800px) {
    padding: 50px 100px;
  }
  @media (max-width: 1600px) {
    padding: 40px 80px;
  }
  @media (max-width: 1400px) {
    padding: 35px 70px;
  }
  @media (max-width: 1200px) {
    padding: 30px 60px;
    border-radius: 20px;
  }
  @media (max-width: 960px) {
    width: calc(100% - 40px);
    margin: 0 auto;
    padding: 24px 20px;
    border-radius: 15px;
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

  @media (max-width: 480px) {
    font-size: 17px;
  }
`;

const result_item_wrap = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 44px;

  @media (max-width: 480px) {
    gap: 24px;
  }
`;

const result_item = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: end;

  padding-bottom: 44px;
  border-bottom: 1px solid #d9d9d9;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 16px;
    padding-bottom: 24px;
  }
`;
