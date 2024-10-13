"use client";
import Head from "next/head";
import HeaderHolder from "../../components/HeaderHolder/HeaderHolder";
import React, { useState, useEffect } from "react";
import ToggleHolder from "../../components/ToggleHolder/ToggleHolder";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";
import data from "../../components/Blog/blog.json";

const BlogPage = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const currentIndex = data.findIndex((el) => router?.query?.slug === el.slug);
  const current = data[currentIndex];
  if (!router?.query?.slug) {
    return <div>Blog not found</div>;
  }
  const openMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <>
      {" "}
      <Head>
        {/* Page-Specific Meta Tags */}
        <title>{current.title}</title>
        <meta name="description" content="A designer portfolio page" />
        <meta name="keywords" content="Next.js, SEO, React" />
      </Head>{" "}
      <main>
        {" "}
        <motion.div
          id="content"
          className="site-content center-relative"
        >
          <div className="blog-content-holder content-800 post-181 page type-page status-publish hentry">
            <div className="content-670">
              <div
                data-elementor-type="wp-page"
                data-elementor-id="181"
                className="elementor elementor-181"
              >
                <ToggleHolder open={openMenu} openVal={open} />
                <HeaderHolder
                  open={openMenu}
                  close={closeMenu}
                  openVal={open}
                />
                {current ? (
                  <div className="content_wrap_blog">
                    <div className="content_data_blog">
                      <h1>{current.title}</h1>
                      <div className="details">
                        <span>{current.author}</span>{" "}
                        <span>{current.date}</span>{" "}
                        <span className="global-color ">
                          {current.category}
                        </span>
                      </div>
                      <div className="img-content_blog">
                        <img
                          src={current.imgs}
                          alt=""
                          className="slide_img_blog"
                        />
                      </div>

                      <div
                        dangerouslySetInnerHTML={{ __html: current.desc }}
                        className="body_blog elementor-widget-container"
                      ></div>
                      <div className="bottom_nav">
                        <Link
                          href={`/blog/${data[currentIndex + 1]?.slug}`}
                          className="item text-center md:text-left"
                        >
                          {data[currentIndex + 1] && (
                            <>
                              <span className="top">Previous Story</span>
                              <span className="title">
                                {data[currentIndex + 1].title}
                              </span>
                            </>
                          )}
                        </Link>
                        <div className="divider">.</div>
                        <Link
                          href={`/blog/${data[currentIndex - 1]?.slug}`}
                          className="item text-center md:text-right mb-20"
                         
                        >
                          {data[currentIndex - 1] && (
                            <>
                              <span className="top">Next Story</span>
                              <span className="title">
                                {data[currentIndex - 1].title}
                              </span>
                            </>
                          )}
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>NO Blog found for this slug : {router?.query?.slug}</div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default BlogPage;
