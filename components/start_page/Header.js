import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react"
import Nav from "./Nav"

function Header() {
    const currentScrollY = 0;
    const [show, handleShow] = useState(true);

    const nav = useRef(null);

    const scroll_height = () => {
        // window.scroll(0, window.innerHeight);
        window.scroll({
            top: window.innerHeight,
            behavior: 'smooth'
        })
    }

    const transitionNavBar = () => {
        if (nav.current.className.includes('animation-delay-1500')) {
            console.log('here', nav.current.className, typeof (nav.current.className));
            nav.current.className = nav.current.className.replace('animation-delay-1500', '');
        }

        const scrollY = window.scrollY;
        if (scrollY < window.innerHeight / 2 || scrollY < currentScrollY) {
            handleShow(true);
        }
        else {
            handleShow(false);
        }

        currentScrollY = scrollY;
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);

        nav.current.className = nav.current.className + " animation-delay-1500";

        return () => window.removeEventListener('scroll', transitionNavBar);
    }, [])

    const logo_link_list = [
        "https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-circle-png.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/336px-Spotify_logo_without_text.svg.png?20160123212544",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Discovery_Plus_logo.svg/1600px-Discovery_Plus_logo.svg.png?20210813152657",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Amazon_Prime_Logo.svg/160px-Amazon_Prime_Logo.svg.png?20180411213910",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/DisneyPlus_Oct2021.svg/1024px-DisneyPlus_Oct2021.svg.png?20211028221104",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Audible_logo.svg/1024px-Audible_logo.svg.png?20180705221416",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/PlayStationPlus.svg/1024px-PlayStationPlus.svg.png?20210922041101",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Nintendo_Switch_Online_logo.svg/1000px-Nintendo_Switch_Online_logo.svg.png?20200123075948",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Microsoft_Office_2013-2019_logo_and_wordmark.svg/400px-Microsoft_Office_2013-2019_logo_and_wordmark.svg.png?20121225214912"
    ]

    return (
        // <div className="h-screen bg-[url('https://www.phoneworld.com.pk/wp-content/uploads/2020/10/seo-watch-free-link-preview.jpg')]
        // bg-cover bg-opacity-0">
        <div className="h-screen relative flex justify-center items-center flex-col">

            {/* Background div */}
            <div className="h-screen w-full bg-gradient-to-r from-purple-500 to-pink-500 
            absolute top-0 left-0 -z-50"/>

            {/* LOGO and nav bar */}
            <div className={`opacity-0 animation-forwards bg-black fixed top-0 left-0 h-[8vh] w-screen
                            flex justify-between items-center px-10 sm:px-20 md:px-40 ${show ? 'animate-fade-appear' : "animate-fade"}
                            ${show && 'z-50'} a-d-500`} ref={nav}>
                <h1 className="text-white font-gideon text-xl">LOGO</h1>
                <Nav />
            </div>

            <div className="flex flex-col w-screen items-center justify-center pt-20">
                <h1 className="text-white text-7xl 2xl:text-9xl leading-relaxed 2xl:leading-loose font-fjalla 
                break-words w-full text-center">
                    <span className={`animate-fade-appear a-d-750}`}>Perché pagare</span><br />
                    <span className={`animate-fade-appear a-d-750 animation-forwards animation-delay-750 opacity-0`}>Quando puoi farti le seghe</span>
                </h1>

                {/* Buttons */}
                <div className={`opacity-0 pt-10 w-full text-center animate-fade-appear animation-delay-1500 animation-forwards relative`}>
                    <Link href={'/register'}>
                        <button
                            className="py-3 px-10 rounded-full group w-48
                            transition duration-150 hover:text-white relative mr-10 overflow-hidden bg-transparent bg-red-500"
                        >
                            <span
                                className="bg-red-500 -z-10 h-full w-0 absolute top-0 left-0 rounded-full group-hover:w-full 
                            transition-all duration-500 hover:w-full"
                            ></span>
                            Sign up
                        </button>
                    </Link>

                    <button
                        className="border-white border-2 py-3 px-10 rounded-full group w-48
                                transition duration-150 hover:text-white relative mr-10 overflow-hidden bg-transparent"
                        onClick={scroll_height}
                    >
                        <span
                            className="bg-red-500 -z-10 h-full w-0 absolute top-0 left-0 rounded-full group-hover:w-full 
                                transition-all duration-500 hover:w-full"
                        ></span>
                        Learn More
                    </button>
                </div>

                {/* LOGO */}
                <div className="overflow-hidden pt-10">
                    <div className="animate-flow flex animation-delay-2000 opacity-0">
                        {logo_link_list.map((link, i) => (
                            <div className="pr-5" key={i}>
                                <Image
                                    src={link}
                                    height={60}
                                    width={60}
                                    objectFit="contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* ICONS */}
            {/* <div className="bg-red-500flex justify-evenly">
                    <Image 
                    src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-circle-png.png"
                    height={100}
                    width={100}
                    />
                    <Image 
                    src="https://www.edigitalagency.com.au/wp-content/uploads/Spotify-icon-png-rgb-green.png"
                    height={100}
                    width={100}
                    />
                </div> */}

        </div>
    )
}

export default Header