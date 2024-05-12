import Head from 'next/head';
import Image from 'next/image';
import styles from './Home.module.css';  // Make sure this path is correct

export default function Home() {
    return (
        <div className={`${styles.flexContainer} flex-col min-h-screen bg-white text-black`}>
            <Head>
                <title>Your Personal Website</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <nav className={`${styles.flexContainer} bg-white p-4 justify-end space-x-4`}>
                <a href="#home" className="text-black hover:text-blue-500">Home</a>
                <a href="#favorites" className="text-black hover:text-blue-500">Favorites</a>
                <a href="#projects" className="text-black hover:text-blue-500">Projects</a>
                <a href="/Resume.pdf" className="text-black hover:text-blue-500">Resume</a>
                <a href="#writing" className="text-black hover:text-blue-500">Writing</a>
            </nav>

            <main className={`${styles.flexContainer} flex-grow p-6 flex-col items-center justify-center text-center`}>
                <h1 className="text-4xl font-bold">Hello!</h1>
                <p>I&apos;m Anthony Shuey. I love math, computer science, and everything in between. I&apos;m a student at Boston University pursuing a double major in math and computer science. I love solving competitive programming/math problems, and I love learning new technologies!</p>
                <Image src="/image_for_website.jpg" alt="Your Image" width={200} height={200} className="rounded-full mt-4"/>
                <div className={`${styles.flexContainer} mt-2 items-center`}>
                    <a href="https://www.linkedin.com/in/anthonshuey" target="_blank" rel="noopener noreferrer" className={styles.logoLink}>
                        <Image src="/linkedin_logo.jpg" alt="LinkedIn Logo" width={30} height={30} className="mx-1"/>
                    </a>
                    <a href="https://www.instagram.com/shueyjanthony/" target="_blank" rel="noopener noreferrer" className={styles.logoLink}>
                        <Image src="/instagram_logo.jpg" alt="Instagram Logo" width={48} height={48} className="mx-1"/>
                    </a>
                    <a href="https://twitter.com/AnthonyShu22260" target="_blank" rel="noopener noreferrer" className={styles.logoLink}>
                        <Image src="/twitter_logo.jpg" alt="Twitter Logo" width={48} height={48} className="mx-1"/>
                    </a>
                    <a href="https://github.com/yourGitHubUsername" target="_blank" rel="noopener noreferrer" className={styles.logoLink}>
                        <Image src="/github_logo.jpg" alt="GitHub Logo" width={48} height={48} className="mx-1"/>  <!-- Update yourGitHubUsername -->
                    </a>
                </div>
            </main>

            <footer className={`${styles.flexContainer} bg-white p-4 justify-around`}>
                <div className="w-1/2 p-4">
                    <h2 className="font-bold">I am currently exploring</h2>
                    <ul>
                        <li>Topic 1</li>
                        <li>Topic 2</li>
                    </ul>
                </div>
                <div className="w-1/2 p-4">
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















