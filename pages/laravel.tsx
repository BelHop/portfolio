import Image from 'next/image';
import Link from 'next/link';

export default function laravel() {
    return (
        <main className="relative flex justify-between w-full h-screen bg-gray-50">
            <div className="absolute top-0 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl -left-4 w-72 h-72 animate-pulse"></div>
            <div className="absolute bg-red-300 rounded-full mix-blend-multiply filter blur-2xl top-12 left-64 w-72 h-72 animate-pulse"></div>
            <div className="absolute bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl top-48 left-48 w-72 h-72 animate-pulse"></div>
            <div className="absolute bg-purple-300 rounded-full top-64 mix-blend-multiply filter blur-2xl right-56 w-72 h-72 animate-pulse"></div>
            <div className="absolute bg-red-300 rounded-full mix-blend-multiply filter blur-2xl top-80 -right-8 w-72 h-72 animate-pulse"></div>
            <div className="min-h-screen bg-transparent hero">
                <div className='text-center hero-content'>
                    <div className='max-w-md'>
                        <div className="flex">
                            <Link href={"https://laravel.com/"}>
                                <Image src={'/images/Laravel.svg'} alt="react-icon" className="" width={300} height={300}/>
                            </Link>
                        </div>
                        <h1 className="font-extrabold text-red-600">*THIS PAGE IS UNDER CONSTRUCTION*</h1>
                    </div>
                </div>
            </div>
        </main>
    )
}
