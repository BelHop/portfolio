import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaHome, FaLaravel } from 'react-icons/fa';

export default function React() {
    return (
        <main className="relative flex justify-between w-full h-screen bg-gray-50">
            <div className="absolute top-0 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl -right-56 w-72 h-72 animate-pulse"></div>
            <div className="absolute bg-red-300 rounded-full mix-blend-multiply filter blur-2xl top-12 right-64 w-72 h-72 animate-pulse"></div>
            <div className="absolute bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl top-56 right-52 w-72 h-72 animate-pulse"></div>
            <div className="absolute top-0 rounded-full bg-color-500 mix-blend-multiply filter blur-2xl left-68 w-72 h-72 animate-pulse"></div>
            <div className="min-h-screen bg-transparent hero">
                <div className="text-center hero-content">
                    <div className="max-w-md">
                        <div className="flex duration-700 animate-fade-in-down">
                            <Link href={"https://reactjs.org/"}>
                                <Image src={'/images/React-icon.svg'} alt="react-icon" className="mr-10 -ml-20 duration-1000 animate-spin-slow" width={300} height={300}/>
                            </Link>
                            <Link href={'https://www.typescriptlang.org/'}>
                                <Image src={'/images/Typescript.svg'} alt="typescript-icon" className="ml-10" width={250} height={200} />
                            </Link>
                        </div>
                        <p className="py-6 font-medium text-blue-600 duration-700 animate-slide-in-right">I have used react since my beginnings as a frontend web developer, and I have used typescript for most of that time as well.</p>
                        <div className="divider"></div>
                        <h2 className="font-medium text-blue-600 duration-700 animate-slide-in-left">What have I built with React + Typescript?</h2>
                        <Link href={'https://github.com/Git-fanual/portfolio'} className="mt-6 transition-all duration-500 ease-in-out btn btn-outline btn-primary btn-block hover:scale-125 animate-fade-in-down">This Website! &nbsp; <FaGithub className="scale-150"/></Link>
                        <div className="flex">
                            <Link href={'/'} className="mt-6 transition-all duration-500 ease-in-out btn btn-outline btn-primary hover:scale-125 animate-slide-in-right">Back to home &nbsp; <FaHome className="mb-1 scale-150"/></Link>
                            <Link href={'/'} className="mt-6 transition-all duration-500 ease-in-out ml-36 btn btn-outline btn-error hover:scale-125 animate-slide-in-left">Laravel/PHP &nbsp; <FaLaravel className="mb-1 scale-150"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
