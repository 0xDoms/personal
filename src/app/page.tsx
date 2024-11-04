import DiscordProfile from "@/components/DiscordProfile";
import Posts from "@/components/Posts";
import { Badge } from "@/components/ui/badge"

import { Github,MessageCircle,AtSign } from 'lucide-react';



export default async function Home() {

  return (
  <div className="mt-10">
    {/*Profile*/}
    <div className="px-4">
      <DiscordProfile/>
    </div>
    {/*Socials*/}
    <div className="p-4">
      <a href="https://github.com/0xDoms" target="_blank" rel="noopener noreferrer">
        <Badge variant="outline" className="mr-2">
          <Github className="w-4 h-4 mr-1"/>Github
        </Badge>
      </a>
      <a href="https://discord.com/users/872968919294562325" target="_blank" rel="noopener noreferrer">
        <Badge variant="outline" className="mr-2">
          <MessageCircle className="w-4 h-4 mr-1"/>Discord
        </Badge>
      </a>
      <a href="hello@0xdom.dev" target="_blank" rel="noopener noreferrer">
        <Badge variant="outline" className="mr-2">
          <AtSign className="w-4 h-4 mr-1"/>Email
        </Badge>
      </a>
    </div>
    {/*About me*/}
    <div className="px-4">
      <h1 className="font-semibold">About me</h1>
      <p className="text-muted-foreground">
      Hello! I&apos;m Dominic, a 19-year-old passionate software developer.<br/> I&apos;m mostly self-taught and love building full-stack applications and exploring new technologies like React, Next.js, and Tailwind CSS.<br/> I enjoy solving complex problems and expanding my skill set every day.<br/> Feel free to check out my projects on GitHub!<br/> Let&apos;s collaborate and build the next big thing together!
      </p>
    </div>
    {/*Blogs*/}
    <div className="px-4 mt-3">
      <h1 className="font-semibold">Writings</h1>
      <div className="relative font-mono max-h-36 overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background pointer-events-none"></div>

        <div className="max-h-36 overflow-y-scroll">
          <Posts/>
        </div>
      </div>
    </div>

    {/*Credits*/}
    <div className="absolute bottom-4 left-0 right-0 text-center">
      <p className="text-sm">Made with love by dom, inspired by <a href="https://dromzeh.dev/" target="_blank" rel="noopener noreferrer">dromzeh</a></p>
    </div>
  </div>
  );
}
