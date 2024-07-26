"use client";

import React from "react";

import { motion } from "framer-motion";

import { cn } from "@fitm-elite/libs/merger";

interface AnimatedGridPatternProps {
    width?: number;
    height?: number;

    x?: number;
    y?: number;

    strokeDasharray?: any;
    numSquares?: number;
    className?: string;
    maxOpacity?: number;
    duration?: number;
    repeatDelay?: number;
}

export default function AnimatedGridPattern({
    width = 40,
    height = 40,

    x = -1,
    y = -1,

    strokeDasharray = 0,
    numSquares = 50,
    className,
    maxOpacity = 0.5,
    duration = 4,
    repeatDelay = 0.5,

    ...props
}: AnimatedGridPatternProps) {
    const id = React.useId();
    const containerRef = React.useRef(null);

    const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });

    const getPos = React.useCallback(() => {
        return [
            Math.floor((Math.random() * dimensions.width) / width),
            Math.floor((Math.random() * dimensions.height) / height)
        ]
    }, [dimensions.height, dimensions.width, height, width]);

    const generateSquares = React.useCallback((count: number) => {
        return Array.from({ length: count }, (_, id) => ({
            id: id,
            pos: getPos()
        }));
    }, [getPos]);

    const [squares, setSqures] = React.useState(() => generateSquares(numSquares));

    function updateSquarePosition(id: number) {
        setSqures((currentSquares) => currentSquares.map((sq) => sq.id === id ? { ...sq, pos: getPos() }: sq));
    }

    React.useEffect(() => {
        if (dimensions.width && dimensions.height) {
            setSqures(generateSquares(numSquares));
        }

        return () => {};
    }, [dimensions.height, dimensions.width, generateSquares, numSquares]);

    React.useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                setDimensions({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height
                });
            }
        })

        const currentRef = containerRef.current;

        if (currentRef) {
            resizeObserver.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                resizeObserver.unobserve(currentRef);
            }
        };
    }, [containerRef]);

    return (
        <svg
            ref={containerRef}
            aria-hidden="true"
            className={cn(
                "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
                className
            )}
            {...props}
        >
            <defs>
                <pattern
                    id={id}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    x={x}
                    y={y}
                >
                    <path
                        d={`M.5 ${height}V.5H${width}`}
                        fill="none"
                        strokeDasharray={strokeDasharray}
                    />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${id})`} />
            <svg x={x} y={y} className="overflow-visible">
                {squares.map(({ pos: [x, y], id }, index) => (
                    <motion.rect
                        initial={{ opacity: 0 }}
                        animate={{ opacity: maxOpacity }}
                        transition={{
                            duration,
                            repeat: 1,
                            delay: index * 0.1,
                            repeatType: "reverse",
                        }}
                        onAnimationComplete={() => updateSquarePosition(id)}
                        key={`${x}-${y}-${index}`}
                        width={width - 1}
                        height={height - 1}
                        x={x * width + 1}
                        y={y * height + 1}
                        fill="currentColor"
                        strokeWidth="0"
                    />
                ))}
            </svg>
        </svg>
    );
}
