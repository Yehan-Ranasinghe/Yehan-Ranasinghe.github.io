import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo, PropsWithChildren, useState, useEffect} from 'react';
import {motion} from 'framer-motion';

import {HomepageMeta} from '../../data/dataDef';

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({children, title, description}) => {
  const {asPath: pathname} = useRouter();

  // Dark Mode toggle functionality
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />

        {/* SEO: Canonical Link */}
        <link href={`https://reactresume.com${pathname}`} key="canonical" rel="canonical" />

        {/* Favicon and Icons */}
        <link href="/favicon.ico" rel="icon" sizes="any" />
        <link href="/icon.svg" rel="icon" type="image/svg+xml" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/site.webmanifest" rel="manifest" />

        {/* Preload Important Resources */}
        <link rel="preload" href="/path-to-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/critical-image.jpg" as="image" />

        {/* Open Graph Meta Tags */}
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={`https://reactresume.com${pathname}`} property="og:url" />

        {/* Twitter Meta Tags */}
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
      </Head>

      {/* Dark Mode Toggle Button */}
      <button onClick={() => setDarkMode(!darkMode)} className="dark-mode-toggle">
        Toggle Dark Mode
      </button>

      {/* Smooth Scroll and Animations */}
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.5}}>
        {children}
      </motion.div>
    </>
  );
});

Page.displayName = 'Page';
export default Page;
