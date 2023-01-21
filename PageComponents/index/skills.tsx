import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

const Skills = () => {
    const [shown, setShown] = useState(false);

    return (
        <>
            <div className="relative flex justify-between w-full h-screen">
                <div className="absolute top-0 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl -left-4 w-72 h-72"></div>
                <div className="absolute bg-red-300 rounded-full mix-blend-multiply filter blur-2xl top-12 left-64 w-72 h-72"></div>
                <div className="absolute bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl top-48 left-48 w-72 h-72"></div>
                <div className="absolute top-0 rounded-full bg-color-500 mix-blend-multiply filter blur-2xl left-68 w-72 h-72"></div>
                <div className="z-20 px-5 mr-5 transition-all ease-in-out w-96 bg-slate-700 opacity-90 h-max hover:opacity-70 hover:w-full hover:mr-5 hover:self-start rounded-xl group" onMouseEnter={() => setShown(true)} onMouseLeave={() => setShown(false)}>
                    <h1 className="items-center py-2 m-2 text-center bg-[#41a1b9] rounded-xl font-extrabold text-white">
                        {shown ?
                            (
                                <h1>
                                    This site was built with React, Typescript, and NextJS
                                </h1>
                            )
                            :
                            "React developer"
                         }
                    </h1>
                    <div className="flex">
                        <div className="transition-all duration-300 ease-in-out opacity-0 mockup-code group-hover:opacity-100 group-hover:mt-10 sele">
                            <pre data-prefix=""><code>{"import useState from React"}</code></pre>
                            <pre data-prefix=""><code>{""}</code></pre>
                            <pre data-prefix=""><code>{"export default function Hello() {"}</code></pre>
                            <pre data-prefix=""><code>{"const [shown, setShown] = useState(true)"}</code></pre>
                            <pre data-prefix=""><code>{"const showHandler = () => {"}</code></pre>
                            <pre data-prefix=""><code>{"    setShown(!shown)"}</code></pre>
                            <pre data-prefix=""><code>{"}"}</code></pre>
                            <pre data-prefix=""><code>{"    return ("}</code></pre>
                            <pre data-prefix=""><code>{"        <div>"}</code></pre>
                            <pre data-prefix=""><code>{"            {shown ? 'This is really cool!' : 'Still pretty cool'}"}</code></pre>
                            <pre data-prefix=""><code>{"        </div>"}</code></pre>
                            <pre data-prefix=""><code>{"        <button onClick={showHandler}/>"}</code></pre>
                            <pre data-prefix=""><code>{"    )"}</code></pre>
                            <pre data-prefix=""><code>{"}"}</code></pre>
                        </div>
                    </div>
                    <div className="flex">
                        <Image src="/images/React-icon.svg" className="pb-5 transition-all duration-300 ease-in-out opacity-0 motion-reduce:animate-spin group-hover:opacity-100 group-hover:mt-10" alt="React" width={'100'} height={'100'}/>
                        <h4 className="text-3xl font-extrabold text-white transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:mt-10">ReactJS</h4>
                        <div className="mt-5 ml-10">
                            <Image src="/next.svg" className="ml-10 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:mt-10" alt="NextJS" width={'300'} height={'200'}/>
                        </div>
                    </div>
                </div>
                <div className="z-20">
                    <Image src="/images/port.png" className="transition-all duration-300 ease-in-out rounded-xl hover:scale-150 hover:mt-20" alt="Port" width={'300'} height={'100'}/>
                    <h1 className="mx-24 text-2xl font-extrabold text-black">Emerson</h1>
                    <h1 className="text-2xl font-extrabold text-black mx-28">Belfon</h1>
                </div>
                <div className="z-20 px-5 ml-5 transition-all ease-in-out w-96 bg-slate-700 opacity-60 h-5/6 hover:w-full hover:ml-5 hover:self-start rounded-xl">
                    <h3 className="items-center py-2 m-2 text-center bg-[#f05340] rounded-xl font-extrabold text-white">
                        Laravel Developer
                    </h3>
                </div>
            </div>

            <div className="justify-between h-10 mt-auto align-bottom transition-all duration-500 ease-in-out rounded-full group">
                <Link href={'https://github.com/Git-fanual'} className="mx-5 text-white transition-all duration-500 ease-in-out btn hover:scale-150 hover:bg-red-300 hover:border-red-300">
                    Github
                </Link>
                <Link href={'https://vercel.com/'} className="mx-5 text-white transition-all duration-500 ease-in-out btn hover:scale-150 hover:bg-blue-300 hover:border-blue-300">
                    Vercel
                </Link>
            </div>
        </>
    )
}

export default Skills;
