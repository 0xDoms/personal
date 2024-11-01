import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import { Post } from '@/types/posts';

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-GB').format(date); // Formats as dd/mm/yyyy
}

export async function GET(req: Request) {
  const postsDirectory = path.join(process.cwd(), 'posts');

  try {
    const filenames = fs.readdirSync(postsDirectory);

    const posts: Post[] = filenames
      .filter((file) => file.endsWith('.md'))
      .map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const content = fs.readFileSync(filePath, 'utf8');


        const titleMatch = content.match(/^#\s+(.*)/m);
        const title = titleMatch ? titleMatch[1] : 'Untitled';


        const stats = fs.statSync(filePath);
        const formattedDate = formatDate(stats.mtime);

        return {
          title,
          content: content.replace(/^#\s+.*\n/, ''), 
          date: formattedDate,
        };
      });

    return NextResponse.json({ status: 200, data: posts });
  } catch (error) {
    return NextResponse.json({ status: 500, message: 'Error reading files', error });
  }
}
