import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Hero = () => {
    const heroRef = useRef(null)
    const textRef = useRef(null)
    const subTextRef = useRef(null)
    const buttonRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        tl.fromTo(textRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 0.2 }
        )
            .fromTo(subTextRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.5"
            )
            .fromTo(buttonRef.current,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.5 },
                "-=0.3"
            )
    }, [])

    return (
        <div ref={heroRef} className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <h2
                ref={textRef}
                className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-500"
            >
                Experience the Future
            </h2>
            <p
                ref={subTextRef}
                className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl"
            >
                A seamless blend of performance and aesthetics, powered by the latest web technologies.
            </p>
            <button
                ref={buttonRef}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30 cursor-pointer"
            >
                Get Started
            </button>
        </div>
    )
}

export default Hero
