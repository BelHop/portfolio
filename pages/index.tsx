import Image from "next/image";
import Link from "next/link";

export default function Home() {
    let date = Date();

    return (
        <main className="relative flex justify-between w-full h-screen bg-gray-50">
            <div className="absolute top-0 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl -left-4 w-72 h-72 animate-pulse"></div>
            <div className="absolute bg-red-300 rounded-full mix-blend-multiply filter blur-2xl top-12 left-64 w-72 h-72 animate-pulse"></div>
            <div className="absolute bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl top-48 left-48 w-72 h-72 animate-pulse"></div>
            <div className="absolute top-0 rounded-full bg-color-500 mix-blend-multiply filter blur-2xl left-68 w-72 h-72 animate-pulse"></div>
            <div className="absolute bg-purple-300 rounded-full top-64 mix-blend-multiply filter blur-2xl right-56 w-72 h-72 animate-pulse"></div>
            <div className="absolute bg-red-300 rounded-full mix-blend-multiply filter blur-2xl top-80 -right-8 w-72 h-72 animate-pulse"></div>
            <div className="min-h-screen bg-transparent hero">
                <div className="flex-col hero-content lg:flex-row">
                    <Image src="/images/port.png" alt={'portfolioImage'} width={'300'} height={'100'} className="z-30 max-w-sm mr-6 transition-all duration-700 ease-in-out shadow-2xl rounded-xl animate-fade-in-down hover:mb-12" />
                    <div>
                        <h1 className="text-5xl font-bold text-black duration-500 animate-slide-in-right">Web developer extraordinaire</h1>
                        <p className="py-6 text-black duration-700 animate-slide-in-right"><strong>Bonjour!</strong> My name is Emerson Belfon, and I am a <strong>frontend web developer</strong> learning backend development with experience in:</p>
                        <div className="flex">
                            <Link href={'/react'} className="mr-2 transition-all duration-1000 ease-in-out btn btn-info btn-outline animate-slide-in-right hover:scale-125 hover:mx-8">React/TS</Link>
                            <h2 className="mt-3 text-lg text-black">&</h2>
                            <Link href={'/laravel'} className="ml-2 transition-all duration-1000 ease-in-out btn btn-error btn-outline animate-slide-in-right hover:scale-125 hover:mx-8">Laravel/PHP</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
