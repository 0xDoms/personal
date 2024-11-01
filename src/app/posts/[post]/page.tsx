'use client';
import { use,useEffect, useState } from 'react';
import { Post } from '@/types/posts';
import { useRouter } from 'next/router';


type Params = {
    post: string;
};

const PostPage = ({ params }: { params: Promise<Params> }) => {
    const unwrappedParams = use(params); 
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`/api/posts/${unwrappedParams.post}`);
            const data = await response.json();
            setPost(data.data);
        };

        if (unwrappedParams.post) { 
            fetchPost();
        }
    }, [unwrappedParams.post]);


    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className='prose mt-12 font-sans'>
            <div dangerouslySetInnerHTML={{ __html: post.markup }} />
        </div>
    );
};

export default PostPage;
