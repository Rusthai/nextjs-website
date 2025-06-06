"use client"
import React from 'react'
import NotFound from '@/app/not-found';
import { HashLoader } from 'react-spinners';
import { MarkdownHooks } from 'react-markdown';
import rehypeStarryNight from 'rehype-starry-night'
import { News } from '@/utils/makeMd';
import { motion } from 'motion/react';
import { useLanguage } from '@/context/language';

import "@/app/markdown.css"
import { NewsResponse } from '@/app/api/news/[id]/route';
import { useRouter } from 'next/navigation';

function Article({ id }: { id: string }) {
    const router = useRouter();
    const { language } = useLanguage();
    const [loading, setLoading] = React.useState(true);
    const [article, setArticle] = React.useState<News | NewsResponse[] | null>(null);
    const targetArticleLang = article
        ? typeof Object.values(article)[0] !== 'string' ?
            (article as NewsResponse[]).filter(news=>news.language === language.code)[0] ?
            (article as NewsResponse[]).filter(news=>news.language === language.code)[0].content :
            (article as NewsResponse[]).filter(news=>news.language === "en")[0] ?
            (article as NewsResponse[]).filter(news=>news.language === "en")[0].content :
            (article as NewsResponse[])[0].content :
            (article as News)
        : null;

    React.useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await fetch(`/api/news/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const text = await response.json();
                setArticle(text as News | NewsResponse[]);
            } catch (error) {
                console.error('Error fetching article:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, []);

    React.useEffect(()=>{
        if ( targetArticleLang )
        {
            const overrideRedirectRegex = /\[redirect:[^\]]+\]/g;
            const overrideRedirectMatch = targetArticleLang.content.match(overrideRedirectRegex);
            const overrideRedirect = overrideRedirectMatch ? overrideRedirectMatch[0].replace(/\[redirect:/, "").replace("]", "") : null;
            if ( overrideRedirect )
                router.replace(overrideRedirect);
        }
    }, [targetArticleLang])

    if ( loading )
        return <div className='flex flex-col items-center justify-center min-h-screen p-24 max-sm:p-12'><HashLoader color="#a0d3f1" size={32} /></div>

    if ( !loading && !article )
        return <NotFound />

    return (
        <div className='flex flex-col items-center justify-center min-h-screen p-24 max-sm:p-12'>
        {
            article && targetArticleLang ? (
            <>
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute top-0 left-0 overflow-hidden w-full h-[42rem] z-10"
                >
                    <div className="absolute w-full h-full bg-gradient-to-t from-zinc-900 to-transparent left-0 bottom-0 z-10 flex flex-col gap-6 justify-center items-center">
                        {
                        (!loading) ? <>
                            <motion.h1
                            initial={{ opacity: 0, y: -32 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -32 }}
                            transition={{ duration: 0.42 }}
                            className="text-sm text-white py-1 px-3 bg-black/40 tracking-wider flex justify-center items-center gap-3 rounded-full"
                            ><span className="material-symbols-rounded !text-base opacity-60">schedule</span> {new Date(targetArticleLang.createdAt).toLocaleDateString(language.code, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</motion.h1>
                            <motion.h1
                                initial={{ opacity: 0, y: -32 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -32 }}
                                transition={{ duration: 0.42, delay: 0.16 }}
                                className="text-7xl my-6 font-bold text-white max-sm:text-4xl uppercase text-center max-w-4xl"
                            >{targetArticleLang.title}</motion.h1>
                            <motion.p
                            initial={{ opacity: 0, y: -32 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -32 }}
                            transition={{ duration: 0.42, delay: 0.32 }}
                            className="text-base text-white/60 text-center"
                            >{targetArticleLang.description}</motion.p>
                        </>:<HashLoader color="#a0d3f1" size={32} />
                        }
                    </div>
                    <motion.div
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1.1 }}
                        exit={{ scale: 0 }}
                        style={{ transitionDuration: "0.64s" }}
                        className="absolute top-0 left-0 overflow-hidden w-screen h-full hero-animate"
                    >
                        {
                        !loading && targetArticleLang.banner &&
                        <motion.img
                            initial={{ scale: 1.3, opacity: 0 }}
                            animate={{scale: 1.1, opacity: 1 }}
                            transition={{ duration: 0.24, delay: 0.24 }}
                            className="w-full h-full object-cover" src={targetArticleLang.banner} />
                        }
                    </motion.div>
                    <div className="dark-bar-pattern absolute bottom-0 left-0 !bg-background translate-y-8 w-full !z-20" style={{top:'unset !important'}}></div>
                </motion.div>
                <div className='mt-[36rem]'></div>
                <div className='w-full max-w-2xl mb-8 markdown-body'>
                {
                    typeof targetArticleLang.content === 'string' ? (
                        <MarkdownHooks rehypePlugins={[rehypeStarryNight]}>
                            {targetArticleLang.content}
                        </MarkdownHooks>
                    ) : (
                        <div className="text-red-500">Invalid content format</div>
                    )
                }
                </div>
            </>
            ) : (
                <div className="text-red-500">Error loading article</div>
            )
        }
        </div>
    )
}

export default Article