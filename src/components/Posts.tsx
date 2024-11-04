"use client";

import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Post } from '@/types/posts';
import Link from 'next/link';


export default function Posts() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchPosts = async () => {
        try {
          const response = await fetch(`/api/posts`);
          const data = await response.json();
    
          if (response.status === 200) {
            setPosts(data.data); // Assuming the API response has { data: posts }
          } else {
            console.error("Error fetching post data:", data);
          }
        } catch (error) {
          console.error("Error fetching post data:", error);
        } finally {
          setLoading(false);
        }
    };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
        {loading ? (
            <Skeleton className="w-full h-full" />
        ) : (
            posts.map((post) => (
                <div key={post.title} className="flex justify-between">
                    <Link href={`/posts/${post.title}`} passHref className="">
                        <h1 className="font-medium cursor-pointer">
                            {post.title}
                        </h1>
                    </Link>
                    <p className="font-thin">{post.date}</p>
                </div>
            ))
        )}
        {!loading && posts.length === 0 && (
            <p>No posts found.</p>
        )}
    </div>
  );
}
