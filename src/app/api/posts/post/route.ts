import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import { marked } from 'marked';

export async function POST(req: Request) {
  try {
    const { post } = await req.json();

    if (!post) {
      return NextResponse.json({ status: 400, message: 'Post identifier is required' });
    }

    const postsDirectory = path.join(process.cwd(), 'posts');
    const filePath = path.join(postsDirectory, `${post}.md`);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ status: 404, message: 'Post not found' });
    }

    const content = fs.readFileSync(filePath, 'utf8');

    const titleMatch = content.match(/^#\s+(.*)/m);
    const title = titleMatch ? titleMatch[1] : 'Untitled';

    const contentWithoutTitle = content.replace(/^#\s+.*\n/, '');
    const markup = marked(contentWithoutTitle);


    return NextResponse.json({
      status: 200,
      data: {
        title,
        content: contentWithoutTitle,
        markup,
      },
    });
  } catch (error) {
    return NextResponse.json({ status: 500, message: 'Error reading file', error });
  }
}
