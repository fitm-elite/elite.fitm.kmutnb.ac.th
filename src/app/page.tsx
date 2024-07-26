"use client";

import React from "react";

import Image from "next/legacy/image";

import { motion } from 'framer-motion';

import { AnimatedGridPattern, AnimatedShinyText, Meteors, SparklesText } from "@fitm-elite/components/decorator/decorator";

import { cn } from "@fitm-elite/libs/merger";

import { IconArrowRight } from "@tabler/icons-react";

import CreativeLabImage from "/public/creative_lab.jpg";
import FITMImage from "/public/fitm.jpg";

export default function Home() {
    return (
        <main className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
            <AnimatedGridPattern
                numSquares={128}
                maxOpacity={0.2}
                duration={2}
                repeatDelay={1}

                className={cn(
                    "[mask-image:radial-gradient(720px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-50%] h-[200%] z-0",
                  )}
            />

            <div
                className={cn(
                    "relative",
                    "p-4 w-auto h-auto rounded-md",
                    "flex flex-col justify-start items-center",
                    "min-w-[360px] max-w-min bg-neutral-900 z-50",
                    "sm:min-w-[480px]",
                    "overflow-hidden"
                )}
            >
                <Meteors number={20} />

                <a
                    href="https://github.com/fitm-elite"
                    target="_blank"
                    className={cn(
                        "mb-6 group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in",
                        "hover:cursor-pointer border-white/5 bg-neutral-900 hover:bg-neutral-800 z-10"
                    )}
                >
                    <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:duration-300 hover:text-neutral-400">
                        <span>✨ Introducing our Github</span>
                        <IconArrowRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                    </AnimatedShinyText>
                </a>

                <div className="mb-6 flex flex-col justify-center items-center space-y-2">
                    <SparklesText
                        text="FITM ELITE"
                        className="text-5xl"
                        sparklesCount={2}
                    />
                    <span className="text-neutral-400">The official website of the fitm elite group.</span>
                </div>

                <div className="p-4 w-full h-auto min-h-[inherit] flex flex-col justify-start items-start space-y-5 rounded-lg bg-neutral-800 z-10">
                    <div className="py-3 w-full h-auto flex flex-col justify-center items-center space-y-2">
                        <h1 className="font-semibold leading-5 text-2xl text-yellow-500">Announcement</h1>
                        <span className="text-center text-neutral-300">We are developing our group website to bring together students and organize authentic learning activities.</span>
                    </div>

                    <motion.a
                        whileHover={{ scale: 1.020 }}
                        whileTap={{ scale: 0.920 }}

                        href="https://www.facebook.com/groups/fitmelite/"
                        target="_blank"

                        className="relative w-full h-48 rounded-lg overflow-hidden"
                    >
                        <Image
                            alt="Assoc. Prof. Anirach Mingkhawn writing about their research."
                            src={CreativeLabImage}
                            blurDataURL={CreativeLabImage.blurDataURL}
                            placeholder="blur"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center rounded-lg bg-black bg-opacity-40 backdrop-blur-sm">
                            <h1 className="font-bold text-3xl">FITM Elite</h1>
                            <h2 className="font-medium text-neutral-300">Click here to visit our group</h2>
                        </div>
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.020 }}
                        whileTap={{ scale: 0.920 }}

                        href="https://www.facebook.com/FITM.KMUTNB"
                        target="_blank"

                        className="relative w-full h-48 rounded-lg overflow-hidden"
                    >
                        <Image
                            alt="Faculty of Industrial and Technology Management"
                            src={FITMImage}
                            blurDataURL={FITMImage.blurDataURL}
                            placeholder="blur"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center rounded-lg bg-black bg-opacity-40 backdrop-blur-sm">
                            <h1 className="font-bold text-3xl">FITM</h1>
                            <h2 className="font-medium text-neutral-300">Click here to visit our faculty</h2>
                        </div>
                    </motion.a>
                </div>
            </div>
        </main>
    );
}
