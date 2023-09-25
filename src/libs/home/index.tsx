"use client";
import { useState, useEffect, useCallback } from "react";
import { fetchAPI } from "../../app/fetch-api";
import TopBar from "../../components/topBar";
import { EventCarousel } from "../../components/carousel";

import Loader from "../../components/loader";
import PostList from "../../components/post-list";
import PageHeader from "../../components/page-header";
import { Meta } from "../types";

const HomePage = () => {
  const [meta, setMeta] = useState<Meta | undefined>();
  const [data, setData] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);

  const fetchData = useCallback(async (start: number, limit: number) => {
    setLoading(true);
    try {
      const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
      const path = `/events`;
      const urlParamsObject = {
        sort: { createdAt: "desc" },
        pagination: {
          start: start,
          limit: limit,
        },
      };
      const options = { headers: { Authorization: `Bearer ${token}` } };
      const responseData = await fetchAPI(path, urlParamsObject, options);
      console.log(responseData);
      if (start === 0) {
        setData(responseData.data);
      } else {
        setData((prevData: any[]) => [...prevData, ...responseData.data]);
      }

      setMeta(responseData.meta);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);
  const { start = 0, limit = 0, total = 0 } = meta?.pagination || {};
  function loadMorePosts(): void {
    const nextPosts = start + limit;
    fetchData(nextPosts, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
  }

  useEffect(() => {
    fetchData(0, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
  }, [fetchData]);

  if (isLoading) return <Loader />;

  return (
    <div>
      <head>
        <title>Baccs | Home</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://baccs.org/wp-content/uploads/2020/07/Logo-final.svg"
        />
      </head>
      <TopBar />
      <EventCarousel />
      <div>
        <PageHeader heading="Our Blog" text="Checkout Something Cool" />
        <PostList data={data}>
          {start + limit < total && (
            <div className="flex justify-center">
              <button
                type="button"
                className="px-6 py-3 text-sm rounded-lg hover:underline dark:bg-gray-900 dark:text-gray-400"
                onClick={loadMorePosts}
              >
                Load more posts...
              </button>
            </div>
          )}
        </PostList>
      </div>
    </div>
  );
};
export default HomePage;
