import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const projects = [
  {
    name: "Discover Events with Instagram Integration",
    description: "In Progress",
    period: "Summer 2024",
    githubLink: "https://github.com/AnthonyShuey/Events-w-Instagram"
  }
];

export default function Projects() {
    return (
      <div className="min-h-screen bg-white">
        <Head>
          <title>Projects & Portfolio</title>
          <style>{`body { margin: 0; padding: 0; background-color: white; }`}</style>
        </Head>
        <nav className="bg-white p-4 shadow-md flex justify-center space-x-4">
          <Link href="/" className="text-black hover:text-blue-500">Home</Link>
          <Link href="#favorites" className="text-black hover:text-blue-500">Favorites</Link>
          <Link href="/projects" className="text-black hover:text-blue-500">Projects</Link>
          <Link href="/Resume.pdf" className="text-black hover:text-blue-500">Resume</Link>
          
        </nav>
        <div className="text-center mt-0">
          <h1 className="text-4xl font-bold text-black">Projects</h1>
          <p className="text-lg text-black">I love creating new skills through project development. Let me know if you're interested in collaborating.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 p-8">
          {projects.map((project, index) => (
            <div key={index} className="border border-black rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 w-64 h-64 flex flex-col justify-between bg-white text-black">
              <div>
                <h2 className="text-xl font-bold">{project.name}</h2>
                <p>{project.period}</p>
                <p>{project.description}</p>
              </div>
              <a href={project.githubLink} className="text-black-500 hover:text-black-700">View on GitHub</a>
            </div>
          ))}
        </div>
      </div>
    );
  }
