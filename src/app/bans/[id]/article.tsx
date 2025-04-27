"use client"
import React from 'react'
import NotFound from '@/app/not-found';
import { HashLoader } from 'react-spinners';
import { MarkdownHooks } from 'react-markdown';
import rehypeStarryNight from 'rehype-starry-night'
import { motion } from 'motion/react';
import { useLanguage } from '@/context/language';

import "@/app/markdown.css"
import { TabMenu } from 'primereact/tabmenu';

export interface BansRes {
    message: string;
    languages: {
        language: string;
        createdAt: string;
        type: string;
        content: string;
    }[]
}

function Article({ id }: { id: string }) {
    const { language } = useLanguage();
    const [loading, setLoading] = React.useState(true);
    const [article, setArticle] = React.useState<BansRes | null>(null);
    const [lang, setLang] = React.useState<string>('');

    const targetArticleLang = article?.languages.filter(reportlang => reportlang.language === language.code || reportlang.language === lang);
    const items = article ? article.languages.map(reportlang => ({
        label: reportlang.language.toUpperCase(),
        value: reportlang.language,
        command: () => setLang(reportlang.language)
    })) : [];

    React.useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await fetch(`/api/bans/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const text = await response.json();
                setArticle(text as BansRes);
                setLang((text as BansRes).languages[0].language);
            } catch (error) {
                console.error('Error fetching article:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, []);

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
                            ><span className="material-symbols-rounded !text-base opacity-60">schedule</span> {new Date(targetArticleLang[0].createdAt).toLocaleDateString(language.code, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</motion.h1>
                            <motion.h1
                                initial={{ opacity: 0, y: -32 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -32 }}
                                transition={{ duration: 0.42, delay: 0.16 }}
                                className="text-7xl my-6 font-bold text-white max-sm:text-4xl uppercase text-center max-w-4xl"
                            >{
                                language.data.bans_report[targetArticleLang[0].type as keyof typeof language.data.bans_report] ?
                                language.data.bans_report[targetArticleLang[0].type as keyof typeof language.data.bans_report] :
                                language.data.bans_report['game_rule']
                            }</motion.h1>
                            <motion.strong
                                initial={{ opacity: 0, y: -32 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -32 }}
                                transition={{ duration: 0.42, delay: 0.32 }}
                                className="text-base font-bold text-white uppercase text-center"
                            >{language.data.bans_report.caseid} {id}</motion.strong>
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
                        <motion.img
                            initial={{ scale: 1.3, opacity: 0 }}
                            animate={{scale: 1.1, opacity: 1 }}
                            transition={{ duration: 0.24, delay: 0.24 }}
                            className="w-full h-full object-cover" src="/Base-ArtboardSuper-Hero-Artwork-_3840x2160.png" />
                    </motion.div>
                    <div className="dark-bar-pattern absolute bottom-0 left-0 !bg-background translate-y-8 w-full !z-20" style={{top:'unset !important'}}></div>
                </motion.div>
                <div className='mt-[36rem]'></div>
                <div className='w-full max-w-[980px] mt-12 -mb-16'>
                    <TabMenu 
                        model={items} 
                        className='w-full bg-transparent [&_.p-tabmenu-nav]:!bg-transparent [&_.p-tabmenu-nav]:!border-foreground/10 [&_.p-tabmenu-nav]:gap-2 [&_.p-menuitem-link]:!bg-zinc-900 [&_.p-tabmenuitem:not(.p-highlight)_.p-menuitem-link]:!border-foreground/10' 
                    />
                </div>
                <div className='w-full max-w-2xl mb-8 markdown-body'>
                    <MarkdownHooks rehypePlugins={[rehypeStarryNight]}>{targetArticleLang[0].content}</MarkdownHooks>
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