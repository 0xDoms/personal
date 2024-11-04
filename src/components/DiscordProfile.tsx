"use client";

import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";


interface DiscordUser {
  global_name: string;
  avatar: {
    link: string;
  };
}

export default function DiscordProfile() {
  const [discord, setDiscord] = useState<DiscordUser | null>(null);

  const fetchDiscord = async () => {
    try {
      const response = await fetch(`https://discordlookup.mesalytic.moe/v1/user/872968919294562325`);
      const data = await response.json();

      if (response.status === 200) {
        setDiscord(data);
      } else {
        console.error("Error fetching Discord data:", data);
      }
    } catch (error) {
      console.error("Error fetching Discord data:", error);
    }
  }

  useEffect(() => {
    fetchDiscord();
  }, []);

  return (
    <div className="flex">
      <div className='w-20 h-20 rounded-xl mt-2'>
        {discord && discord.avatar && discord.avatar.link ? (
          <img src={discord.avatar.link} alt="Discord Avatar" className='rounded-xl' />
        ) : (
          <div className="w-20 h-20 rounded-xl flex items-center justify-center">
            <Skeleton className="w-full h-full rounded-xl" />
          </div>
        )}
      </div>

      <div className='w-1/2 h-24 p-4'>
        {discord && discord.global_name ? (
          <div>
            <p className='font-semibold'>{discord.global_name}</p>
            <p className='text-muted-foreground'>Do not distrube on discord</p>
          </div>
        ) : (
          <div>
            <Skeleton className="w-2/4 h-5" />
            <Skeleton className="w-4/4 h-5 mt-4" />
          </div>
        )}
      </div>
    </div>
  );
}
