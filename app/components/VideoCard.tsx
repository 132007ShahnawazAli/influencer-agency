import React from 'react'

interface VideoCardProps {
    image?: string
    avatar?: string
    name?: string
    followers?: string
    className?: string
    style?: React.CSSProperties
}

function VideoCard({
    image = "/videoframe.png",
    avatar = "/madam.jpg",
    name = "Name",
    followers = "10k followers",
    className = "",
    style,
}: VideoCardProps) {
    return (
        <div
            className={`relative aspect-10/16 w-48 rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex shrink-0 ${className}`}
            style={style}
        >
            <img
                src={image}
                alt="video thumbnail"
                className="h-full w-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center">
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 1.75276C0 0.3837 1.5012 -0.45516 2.66717 0.26236L12.7591 6.47279C13.8696 7.15619 13.8696 8.77029 12.7591 9.45359L2.66717 15.664C1.5012 16.3816 0 15.5427 0 14.1736V1.75276Z" fill="#F1F2F4"/>
                    </svg>
                </div>
            </div>
            {/* Creator info */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                <img
                    src={avatar}
                    alt={name}
                    className="h-8 w-8 rounded-full border border-white/40 object-cover shrink-0"
                />
                <div className="flex flex-col min-w-0">
                    <p className="text-white text-xs font-semibold truncate">{name}</p>
                    <p className="text-white/60 text-[10px] truncate">{followers}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard