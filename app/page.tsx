import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Your Personal Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="bg-gray-100 p-4 flex justify-end space-x-4">
        <a href="#home" className="text-black hover:text-blue-500">Home</a>
        <a href="#favorites" className="text-black hover:text-blue-500">Favorites</a>
        <a href="#projects" className="text-black hover:text-blue-500">Projects</a>
        <a href="/Resume.pdf" className="text-black hover:text-blue-500">Resume</a>
        <a href="#writing" className="text-black hover:text-blue-500">Writing</a>
      </nav>

      <main className="flex-grow p-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold">Hello!</h1>
        <p>I&apos;m Anthony Shuey. I love math, computer science, everything in between. I&apos;m a student at Boston University pursuing a double major in math and computer science. I love solving competitive programming/math problems, and I love learning new technologies!</p>
        <Image src="/image_for_website.jpg" alt="Your Image" width={200} height={200} className="rounded-full mt-4"/>
        <div className="flex mt-2">
          <a href="https://www.linkedin.com/in/anthonshuey">
            <Image src="/linkedin_logo.jpg" alt="LinkedIn Logo" width={30} height={30}/>
          </a>
          <a href="https://www.instagram.com/shueyjanthony/" className="ml-2">
            <Image src="/instagram_logo.jpg" alt="Instagram Logo" width={30} height={30}/>
          </a>
        </div>
      </main>

      <footer className="bg-gray-200 p-4 flex justify-around">
        <div>
          <h2 className="font-bold">I am currently exploring</h2>
          <ul>
            <li>Topic 1</li>
            <li>Topic 2</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold">Up next</h2>
          <ul>
            <li>Leetcode/Codeforces</li>
            <li>Plan 2</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}


