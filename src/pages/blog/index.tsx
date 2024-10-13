import React, { useState } from "react";
import HeaderHolder from "../../components/HeaderHolder/HeaderHolder";
import ToggleHolder from "../../components/ToggleHolder/ToggleHolder";
import { motion } from "framer-motion";
import Head from "next/head";
import data from "../../blog.json";
const index = () => {
  const [open, setOpen] = useState(false);
  const openMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);
  return (
    <>
      <Head>
        <title>Blog - Ukko</title>
        <meta name="description" content="A designer portfolio page" />
        <meta name="keywords" content="Next.js, SEO, React" />
      </Head>
      <main>
        <div id="content" className="site-content center-relative">
          <div
            className="blog-content-holder content-800 post-181 page type-page status-publish hentry"
          style={{padding: '85px 0px'}}>
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

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{
                    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      delay: index * 0.2 },
                  }}
                  viewport={{ once: true }}
                  className="content_wrap_blog"
                >
                 
                 {data.map((current, index) => (
  index === 0 ? (

    <div
      key={index}
      className="content_data_blog articles"
    >
      <div
        className="img-content_blog"
       
      >
        <img
          src={current.imgs}
          alt=""
          className="slide_img_blog"
        />
      </div>
      <div
        className="detils"
        style={{ marginTop: "15px", marginBottom: "0px" }}
      >
        <span>{current.author}</span>{" "}
        <span>{current.date}</span>{" "}
        <span style={{ color: "#f44647" }}>
          {current.category}
        </span>
      </div>
      <h1 className="entry-title" style={{ paddingTop: "0px" }}>
        <a href={`/blog/${current.slug}`}>{current.title}</a>
      </h1>
    </div>
  ) : (
    // Apply motion.div for items with index greater than 0
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: "easeInOut" },
      }}
      viewport={{ once: true }}
      className="content_data_blog articles"
    >
      <div
        className="img-content_blog"
      
      >
        <img
          src={current.imgs}
          alt=""
          className="slide_img_blog"
        />
      </div>
      <div
        className="detils"
        style={{ marginTop: "15px", marginBottom: "0px" }}
      >
        <span>{current.author}</span>{" "}
        <span>{current.date}</span>{" "}
        <span style={{ color: "#f44647" }}>
          {current.category}
        </span>
      </div>
      <h1 className="entry-title" style={{ paddingTop: "0px" }}>
        <a href={`/blog/${current.slug}`}>{current.title}</a>
      </h1>
    </motion.div>
  )
))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default index;
