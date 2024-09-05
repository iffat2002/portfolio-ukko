"use client";

import HeaderHolder from "@/app/components/HeaderHolder/HeaderHolder";
import React, { useState } from "react";
import ToggleHolder from "@/app/components/ToggleHolder/ToggleHolder";

import { motion } from "framer-motion";
import Link from "next/link";

const data = [
  {
    slug: "hundreds-of-thousands-a-still-more-glorious-nights-around-art-table",
    imgs: "/image_blog_01.jpg",
    title:
      "Hundreds of thousands a still more glorious nights around art table",
    author: "Mila Doe",
    date: "Nov 28, 2019",
    category: "Uncategorized",
    desc: `<p>Bearable only through love hydrogen atoms bits of moving fluff culture shores of the cosmic ocean paroxysm of global death rich in heavy atoms with pretty stories for which there’s little good evidence something incredible is waiting to be known not a sunrise but a galaxyrise shores of the cosmic ocean inconspicuous motes of rock.</p>
<br />
<p>Galaxies network of wormholes birth extraplanetary Apollonius of Perga adipisci velit! Muse about descended from astronomers shores of the cosmic ocean across the centuries encyclopaedia galactica Euclid intelligent beings. As a patch of light Apollonius of Perga, rings of Uranus network of wormholes bits of moving fluff, consciousness the only home we’ve ever known. Galaxies, corpus callosum radio telescope. Globular star cluster, light years made in the interiors of collapsing stars cosmic ocean with pretty stories for which there’s little good evidence something incredible is waiting to be known explorations!</p>
<blockquote>
Birth dispassionate terrestrial for observer star stuff harvesting light something incredible
</blockquote>
<br />
<p>Brain is the seed of intelligence ship of the imagination hearts of the stars realm of the galaxies. At the edge of forever. Hearts of the stars of brilliant syntheses astonishment not a sunrise but a galaxyrise. Finite but unbounded how far away, corpus callosum nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Encyclopaedia galactica are creatures of the cosmos shores of the cosmic ocean. Cosmic ocean the sky calls to us consectetur cosmic ocean and billions upon billions upon billions upon billions upon billions upon billions upon!</p>
`,
  },
  {
    slug: "preserve-and-cherish-that-pale-blue-dot-are-creatures-of-the-cosmos-light-years",
    imgs: "/image_blog_02.jpg",
    title:
      "Preserve and cherish that pale blue dot are creatures of the cosmos light years",
    author: "Mila Doe",
    date: "Nov 27, 2019",
    category: "Uncategorized",
    desc: `<p>Bearable only through love hydrogen atoms bits of moving fluff culture shores of the cosmic ocean paroxysm of global death rich in heavy atoms with pretty stories for which there’s little good evidence something incredible is waiting to be known not a sunrise but a galaxyrise shores of the cosmic ocean inconspicuous motes of rock.</p>
<br />
<p>Galaxies network of wormholes birth extraplanetary Apollonius of Perga adipisci velit! Muse about descended from astronomers shores of the cosmic ocean across the centuries encyclopaedia galactica Euclid intelligent beings. As a patch of light Apollonius of Perga, rings of Uranus network of wormholes bits of moving fluff, consciousness the only home we’ve ever known. Galaxies, corpus callosum radio telescope. Globular star cluster, light years made in the interiors of collapsing stars cosmic ocean with pretty stories for which there’s little good evidence something incredible is waiting to be known explorations!</p>
<blockquote>
Birth dispassionate terrestrial for observer star stuff harvesting light something incredible
</blockquote>
<br />
<p>Brain is the seed of intelligence ship of the imagination hearts of the stars realm of the galaxies. At the edge of forever. Hearts of the stars of brilliant syntheses astonishment not a sunrise but a galaxyrise. Finite but unbounded how far away, corpus callosum nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Encyclopaedia galactica are creatures of the cosmos shores of the cosmic ocean. Cosmic ocean the sky calls to us consectetur cosmic ocean and billions upon billions upon billions upon billions upon billions upon billions upon!</p>
`,
  },
  {
    slug: "great-turbulent-clouds-hearts-of-the-stars-stirred-by-starlight-sky-culture",
    imgs: "/image_blog_03.jpg",
    title:
      "Great turbulent clouds hearts of the stars stirred by starlight sky culture",
    author: "Mila Doe",
    date: "Nov 26, 2019",
    category: "Uncategorized",
    desc: `<p>Bearable only through love hydrogen atoms bits of moving fluff culture shores of the cosmic ocean paroxysm of global death rich in heavy atoms with pretty stories for which there’s little good evidence something incredible is waiting to be known not a sunrise but a galaxyrise shores of the cosmic ocean inconspicuous motes of rock.</p>
<br />
<p>Galaxies network of wormholes birth extraplanetary Apollonius of Perga adipisci velit! Muse about descended from astronomers shores of the cosmic ocean across the centuries encyclopaedia galactica Euclid intelligent beings. As a patch of light Apollonius of Perga, rings of Uranus network of wormholes bits of moving fluff, consciousness the only home we’ve ever known. Galaxies, corpus callosum radio telescope. Globular star cluster, light years made in the interiors of collapsing stars cosmic ocean with pretty stories for which there’s little good evidence something incredible is waiting to be known explorations!</p>
<blockquote>
Birth dispassionate terrestrial for observer star stuff harvesting light something incredible
</blockquote>
<br />
<p>Brain is the seed of intelligence ship of the imagination hearts of the stars realm of the galaxies. At the edge of forever. Hearts of the stars of brilliant syntheses astonishment not a sunrise but a galaxyrise. Finite but unbounded how far away, corpus callosum nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Encyclopaedia galactica are creatures of the cosmos shores of the cosmic ocean. Cosmic ocean the sky calls to us consectetur cosmic ocean and billions upon billions upon billions upon billions upon billions upon billions upon!</p>
`,
  },
  {
    slug: "cambrian-explosion-kindling-the-energy-hidden-in-matter-vanquish-now",
    imgs: "/image_blog_04.jpg",
    title:
      "Cambrian explosion kindling the energy hidden in matter vanquish now",
    author: "Mila Doe",
    date: "Nov 21, 2019",
    category: "Uncategorized",
    desc: `<p>Bearable only through love hydrogen atoms bits of moving fluff culture shores of the cosmic ocean paroxysm of global death rich in heavy atoms with pretty stories for which there’s little good evidence something incredible is waiting to be known not a sunrise but a galaxyrise shores of the cosmic ocean inconspicuous motes of rock.</p>
<br />
<p>Galaxies network of wormholes birth extraplanetary Apollonius of Perga adipisci velit! Muse about descended from astronomers shores of the cosmic ocean across the centuries encyclopaedia galactica Euclid intelligent beings. As a patch of light Apollonius of Perga, rings of Uranus network of wormholes bits of moving fluff, consciousness the only home we’ve ever known. Galaxies, corpus callosum radio telescope. Globular star cluster, light years made in the interiors of collapsing stars cosmic ocean with pretty stories for which there’s little good evidence something incredible is waiting to be known explorations!</p>
<blockquote>
Birth dispassionate terrestrial for observer star stuff harvesting light something incredible
</blockquote>
<br />
<p>Brain is the seed of intelligence ship of the imagination hearts of the stars realm of the galaxies. At the edge of forever. Hearts of the stars of brilliant syntheses astonishment not a sunrise but a galaxyrise. Finite but unbounded how far away, corpus callosum nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Encyclopaedia galactica are creatures of the cosmos shores of the cosmic ocean. Cosmic ocean the sky calls to us consectetur cosmic ocean and billions upon billions upon billions upon billions upon billions upon billions upon!</p>
`,
  },
];

const BlogPage = ({ params }: { params: { slug: string } }) => {
  const currnet = data.filter((item) => item.slug === params.slug)[0];
  const currentIndex = data.findIndex((el) => currnet.slug === el.slug);
  const [open, setOpen] = useState(false);
  console.log(currnet);

  const openMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <div id="content" className="site-content center-relative">
        <div className="blog-content-holder content-800 post-181 page type-page status-publish hentry">
          <div className="content-670">
            <div
              data-elementor-type="wp-page"
              data-elementor-id="181"
              className="elementor elementor-181"
            >
    
      <ToggleHolder open={openMenu} openVal={open} />
      <HeaderHolder open={openMenu} close={closeMenu} openVal={open} />
      {currnet ? (
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.25, ease: "easeInOut" },
          }}
          viewport={{ once: true }}
          className="content_wrap_blog"
        >
          <div className="content_data_blog">
            <h1 >{currnet.title}</h1>
            <div className="detils">
              <span>{currnet.author}</span> <span>{currnet.date}</span>{" "}
              <span style={{ color: "#f44647" }}>{currnet.category}</span>
            </div>
            <div className="img-content_blog">
              <img src={currnet.imgs} alt="" className="slide_img_blog" />
            </div>

            <div
              dangerouslySetInnerHTML={{ __html: currnet.desc }}
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
                className="item text-center md:text-right"
                style={{marginBottom:"20px"}}
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
        </motion.div>
      ) : (
        <div>NO Blog found for this slug : {params.slug}</div>
      )}
    </div>
    </div>
        </div>
      </div>
      
  );
};

export default BlogPage;
