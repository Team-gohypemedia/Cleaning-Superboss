"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, GripVertical, ChevronLeft, ChevronRight } from 'lucide-react';


// MediaItemType defines the structure of a media item
export interface MediaItemType {
    id: number;
    type: string;
    title: string;
    desc: string;
    url: string;
    span: string;
}

// MediaItem component renders either a video or image based on item.type
const MediaItem = ({ item, className, onClick }: { item: MediaItemType, className?: string, onClick?: () => void }) => {
    const videoRef = useRef<HTMLVideoElement>(null); // Reference for video element
    const [isInView, setIsInView] = useState(false); // To track if video is in the viewport
    const [isBuffering, setIsBuffering] = useState(true);  // To track if video is buffering

    // Intersection Observer to detect if video is in view and play/pause accordingly
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '50px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setIsInView(entry.isIntersecting); // Set isInView to true if the video is in view
            });
        }, options);

        if (videoRef.current) {
            observer.observe(videoRef.current); // Start observing the video element
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current); // Clean up observer when component unmounts
            }
        };
    }, []);

    // Handle video play/pause based on whether the video is in view or not
    useEffect(() => {
        let mounted = true;

        const handleVideoPlay = async () => {
            if (!videoRef.current || !isInView || !mounted) return; // Don't play if video is not in view or component is unmounted

            try {
                if (videoRef.current.readyState >= 3) {
                    setIsBuffering(false);
                    await videoRef.current.play(); // Play the video if it's ready
                } else {
                    setIsBuffering(true);
                    await new Promise((resolve) => {
                        if (videoRef.current) {
                            videoRef.current.oncanplay = resolve; // Wait until the video can start playing
                        }
                    });
                    if (mounted) {
                        setIsBuffering(false);
                        await videoRef.current.play();
                    }
                }
            } catch (error) {
                console.warn("Video playback failed:", error);
            }
        };

        if (isInView) {
            handleVideoPlay();
        } else if (videoRef.current) {
            videoRef.current.pause();
        }

        return () => {
            mounted = false;
            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.removeAttribute('src');
                videoRef.current.load();
            }
        };
    }, [isInView]);

    // Render either a video or image based on item.type
    if (item.type === 'video') {
        return (
            <div className={`${className} relative overflow-hidden bg-[#111]`}>
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    onClick={onClick}
                    playsInline
                    muted
                    loop
                    preload="auto"
                    draggable="false"
                    style={{
                        opacity: isBuffering ? 0.8 : 1,
                        transition: 'opacity 0.2s',
                        transform: 'translateZ(0)',
                        willChange: 'transform',
                    }}
                >
                    <source src={item.url} type="video/mp4" />
                </video>
                {isBuffering && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    </div>
                )}
            </div>
        );
    }

    return (
        <img
            src={item.url} // Image source URL
            alt={item.title} // Alt text for the image
            className={`${className} object-cover cursor-pointer`} // Style the image
            onClick={onClick} // Trigger onClick when the image is clicked
            loading="lazy" // Lazy load the image for performance
            decoding="async" // Decode the image asynchronously
            draggable="false" // Prevent native browser dragging
        />
    );
};


// GalleryModal component displays the selected media item in a modal
interface GalleryModalProps {
    selectedItem: MediaItemType;
    isOpen: boolean;
    onClose: () => void;
    setSelectedItem: (item: MediaItemType | null) => void;
    mediaItems: MediaItemType[]; // List of media items to display in the modal
}
const GalleryModal = ({ selectedItem, isOpen, onClose, setSelectedItem, mediaItems }: GalleryModalProps) => {
    const [dockPosition, setDockPosition] = useState({ x: 0, y: 0 });  // Track the position of the dockable panel

    if (!isOpen) return null; // Return null if the modal is not open

    return (
        <>
            {/* Main Modal */}
            <motion.div
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.98, opacity: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30
                }}
                className="fixed inset-0 w-full h-full flex flex-col items-center justify-center backdrop-blur-xl bg-[#f8fbfe]/85 z-[100] p-4"
            >
                {/* Main Content */}
                <div className="w-full flex-1 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedItem.id}
                            className="relative w-full aspect-[16/9] max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-[#d0e4f7] bg-[#111]"
                            initial={{ y: 20, scale: 0.97, opacity: 0 }}
                            animate={{
                                y: 0,
                                scale: 1,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 30,
                                    mass: 0.5
                                }
                            }}
                            exit={{
                                y: 20,
                                scale: 0.97,
                                opacity: 0,
                                transition: { duration: 0.15 }
                            }}
                        >
                            <MediaItem item={selectedItem} className="w-full h-full object-contain" onClick={onClose} />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                <h3 className="text-white text-xl font-bold tracking-tight">
                                    {selectedItem.title}
                                </h3>
                                <p className="text-white/80 text-sm mt-1.5 font-light max-w-xl">
                                    {selectedItem.desc}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Close Button */}
                <motion.button
                    className="absolute top-6 right-6 p-3 rounded-full bg-[#08295b] text-white hover:bg-[#0d47a1] transition-colors shadow-lg cursor-pointer animate-none"
                    onClick={onClose}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <X className='w-5 h-5' />
                </motion.button>
            </motion.div>

            {/* Draggable Dock */}
            <motion.div
                drag
                dragMomentum={false}
                dragElastic={0.1}
                initial={false}
                animate={{ x: dockPosition.x, y: dockPosition.y }}
                onDragEnd={(_, info) => {
                    setDockPosition(prev => ({
                        x: prev.x + info.offset.x,
                        y: prev.y + info.offset.y
                    }));
                }}
                className="fixed z-[110] left-1/2 bottom-8 -translate-x-1/2 touch-none"
            >
                <motion.div
                    className="relative rounded-2xl bg-[#08295b]/90 backdrop-blur-xl border border-white/10 shadow-2xl cursor-grab active:cursor-grabbing"
                >
                    <div className="flex items-center -space-x-3 px-4 py-3">
                        {mediaItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedItem(item);
                                }}
                                style={{
                                    zIndex: selectedItem.id === item.id ? 30 : mediaItems.length - index,
                                }}
                                className={`
                                    relative group
                                    w-12 h-12 flex-shrink-0 
                                    rounded-xl overflow-hidden 
                                    cursor-pointer hover:z-25 transition-all
                                    ${selectedItem.id === item.id
                                        ? 'shadow-2xl'
                                        : 'hover:ring-2 hover:ring-white/40'}
                                `}
                                initial={{ rotate: index % 2 === 0 ? -12 : 12 }}
                                animate={{
                                    scale: selectedItem.id === item.id ? 1.25 : 1,
                                    rotate: selectedItem.id === item.id ? 0 : index % 2 === 0 ? -12 : 12,
                                    y: selectedItem.id === item.id ? -10 : 0,
                                }}
                                whileHover={{
                                    scale: 1.35,
                                    rotate: 0,
                                    y: -12,
                                    transition: { type: "spring", stiffness: 400, damping: 25 }
                                }}
                            >
                                <MediaItem item={item} className="w-full h-full" onClick={() => setSelectedItem(item)} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
};

const DragInstructionOverlay = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-[#08295b]/30 backdrop-blur-md flex flex-col items-center justify-center pointer-events-none z-40 select-none rounded-[24px]"
        >
            <motion.div
                initial={{ scale: 0.9, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 15 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="flex flex-col items-center gap-4 bg-[#f8fbfe] border border-[#d0e4f7] px-8 py-6 rounded-[24px] shadow-[0_10px_45px_rgba(0,0,0,0.2)] pointer-events-none select-none text-[#08295b] max-w-[85%] text-center"
            >
                {/* Hand Palm Icon Grabbing & Dragging Animation */}
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#e3f2fd] border border-[#d0e4f7]">
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#0d47a1"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-8 h-8 text-[#0d47a1]"
                        animate={{
                            x: [-18, 18, -18],
                            rotate: [0, -12, 0]
                        }}
                        transition={{
                            duration: 1.6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                        <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                        <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                        <path d="M6 11V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                        <path d="M18 11a4 4 0 0 1 4 4v3a6 6 0 0 1-6 6H9.5a5.5 5.5 0 0 1-4-2.5L2 14.5a1.5 1.5 0 0 1 2.2-2.2l2.3 2.3V11" />
                    </motion.svg>
                </div>
                <div className="space-y-1">
                    <h4 className="text-base font-black tracking-wider uppercase text-[#08295b]">
                        Drag to Reorder
                    </h4>
                    <p className="text-xs text-[#08295b]/60 font-light">
                        Hold and swipe left/right to arrange production items
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};


const MobileSlider = ({ items, setSelectedItem }: { items: MediaItemType[], setSelectedItem: (item: MediaItemType | null) => void }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const handlePrev = () => {
        setDirection(-1);
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    const handleNext = () => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % items.length);
    };

    const currentItem = items[activeIndex];

    const slideVariants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 120 : -120,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (dir: number) => ({
            x: dir < 0 ? 120 : -120,
            opacity: 0
        })
    };

    return (
        <div className="w-full flex flex-col gap-6 px-1 md:hidden">
            {/* Media Card Container */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[#d0e4f7]/60 shadow-lg bg-[#111]">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={activeIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 28 },
                            opacity: { duration: 0.15 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.4}
                        onDragEnd={(e, info) => {
                            const swipeThreshold = 50;
                            if (info.offset.x < -swipeThreshold) {
                                handleNext();
                            } else if (info.offset.x > swipeThreshold) {
                                handlePrev();
                            }
                        }}
                        className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing select-none touch-pan-y"
                        onClick={() => setSelectedItem(currentItem)}
                    >
                        <MediaItem item={currentItem} className="w-full h-full object-cover pointer-events-none select-none" />
                    </motion.div>
                </AnimatePresence>

                {/* Floating Chevron navigation buttons overlapping bottom right corner */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2 z-10">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handlePrev();
                        }}
                        className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-[#d0e4f7] text-[#08295b] shadow-md active:scale-95 transition-all cursor-pointer"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleNext();
                        }}
                        className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-[#d0e4f7] text-[#08295b] shadow-md active:scale-95 transition-all cursor-pointer"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Title & Description Section */}
            <div className="flex flex-col gap-2 min-h-[90px] px-1">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                    >
                        <h3 className="text-xl font-bold tracking-tight text-[#08295b]">
                            {currentItem.title}
                        </h3>
                        <p className="text-sm text-[#08295b]/70 mt-1 font-light leading-relaxed">
                            {currentItem.desc}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Progress indicator bar at the bottom */}
            <div className="w-full h-0.5 bg-[#d0e4f7]/50 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-[#08295b]"
                    initial={{ width: "0%" }}
                    animate={{ width: `${((activeIndex + 1) / items.length) * 100}%` }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                />
            </div>
        </div>
    );
};


interface InteractiveBentoGalleryProps {
    mediaItems: MediaItemType[]
    title: string
    description: string
}

export const InteractiveBentoGallery: React.FC<InteractiveBentoGalleryProps> = ({ mediaItems, title, description }) => {
    const [selectedItem, setSelectedItem] = useState<MediaItemType | null>(null);
    const [items, setItems] = useState(mediaItems);
    const [isDragging, setIsDragging] = useState(false);
    const [hasDragged, setHasDragged] = useState(false);
    const [showOnboarding, setShowOnboarding] = useState(false);
    const [hasTriggeredOnboarding, setHasTriggeredOnboarding] = useState(false);
    const galleryRef = useRef<HTMLDivElement>(null);

    // Run timer to fade out onboarding after 3 seconds when the gallery enters view
    useEffect(() => {
        const currentRef = galleryRef.current;
        if (!currentRef) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasTriggeredOnboarding) {
                    setShowOnboarding(true);
                    setHasTriggeredOnboarding(true);
                    setTimeout(() => {
                        setShowOnboarding(false);
                    }, 3000); // Pops up for exactly 3 seconds!
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(currentRef);
        return () => {
            observer.disconnect();
        };
    }, [hasTriggeredOnboarding]);

    // Sync state if initial props change
    useEffect(() => {
        setItems(mediaItems);
    }, [mediaItems]);

    return (
        <div ref={galleryRef} className="w-full px-4 sm:px-6 md:px-10 lg:px-14 py-16 md:py-24 max-w-[1440px] mx-auto">
            <div className="mb-12 md:mb-16 flex flex-col items-center text-center gap-3">
                <div>
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#08295b] leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        className="mt-3 text-sm sm:text-base md:text-lg text-[#08295b]/70 font-light max-w-[650px] mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {description}
                    </motion.p>
                </div>
            </div>
            
            <div className="relative min-h-[400px]">
                <AnimatePresence mode="wait">
                    {selectedItem ? (
                        <GalleryModal
                            selectedItem={selectedItem}
                            isOpen={true}
                            onClose={() => setSelectedItem(null)}
                            setSelectedItem={setSelectedItem}
                            mediaItems={items}
                        />
                    ) : (
                        <>
                            {/* Bento Grid Container (Shown on all screen sizes) */}
                            <div className="relative w-full h-full">
                                <motion.div
                                    className="grid grid-cols-4 gap-2 sm:gap-4 auto-rows-[45px] xs:auto-rows-[60px] sm:auto-rows-[100px] md:auto-rows-[130px] lg:auto-rows-[145px]"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                exit="hidden"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: { staggerChildren: 0.05 }
                                    }
                                }}
                            >
                                {items.map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        layoutId={`media-${item.id}`}
                                        layout
                                        className={`relative group overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing border border-[#d0e4f7]/50 shadow-md ${item.span}`}
                                        onTap={() => setSelectedItem(item)}
                                        variants={{
                                            hidden: { y: 30, scale: 0.96, opacity: 0 },
                                            visible: {
                                                y: 0,
                                                scale: 1,
                                                opacity: 1,
                                                transition: {
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 25,
                                                }
                                            }
                                        }}
                                        whileHover={{ scale: 1.015, y: -4 }}
                                        drag
                                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                                        dragElastic={0.4}
                                        onDragStart={() => {
                                            setIsDragging(true);
                                            setHasDragged(true);
                                        }}
                                        onDragEnd={(e, info) => {
                                            setIsDragging(false);
                                            const moveDistance = info.offset.x + info.offset.y;
                                            if (Math.abs(moveDistance) > 60) {
                                                const newItems = [...items];
                                                const draggedItem = newItems[index];
                                                const targetIndex = moveDistance > 0 ?
                                                    Math.min(index + 1, items.length - 1) :
                                                    Math.max(index - 1, 0);
                                                newItems.splice(index, 1);
                                                newItems.splice(targetIndex, 0, draggedItem);
                                                setItems(newItems);
                                            }
                                        }}
                                    >
                                        {/* Subtle drag grip indicator that fades in on hover */}
                                        <div className="absolute top-4 right-4 p-1.5 rounded-xl bg-[#f8fbfe]/90 backdrop-blur-md border border-[#d0e4f7] text-[#08295b]/60 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none select-none z-10 shadow-sm scale-95 group-hover:scale-100">
                                            <GripVertical className="w-3.5 h-3.5" />
                                        </div>

                                        <MediaItem
                                            item={item}
                                            className="absolute inset-0 w-full h-full pointer-events-none select-none"
                                        />
                                         <div className="absolute inset-0 flex flex-col justify-end p-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
                                             <div className="absolute inset-0 flex items-center justify-center">
                                                 <div className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wider uppercase scale-90 group-hover:scale-100 transition-all duration-300 opacity-0 group-hover:opacity-100">
                                                     View Full
                                                 </div>
                                             </div>
                                             <h3 className="relative text-white text-sm md:text-base font-bold tracking-tight line-clamp-1">
                                                 {item.title}
                                             </h3>
                                             <p className="relative text-white/85 text-xs mt-1 font-light line-clamp-2 leading-relaxed">
                                                 {item.desc}
                                             </p>
                                         </div>
                                    </motion.div>
                                ))}
                                </motion.div>

                                {/* Global Onboarding Overlay centering on entire grid */}
                                <AnimatePresence>
                                    {showOnboarding && !hasDragged && (
                                        <DragInstructionOverlay />
                                    )}
                                </AnimatePresence>
                            </div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default InteractiveBentoGallery;
