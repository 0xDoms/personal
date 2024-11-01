import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import { marked } from 'marked';


export async function GET(req: Request, { params }: { params: { filename: string } }) {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filePath = path.join(postsDirectory, `${params.filename}.md`);

  try {
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
