import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { parseISO, format } from "date-fns";

const postsDirectory = path.join(process.cwd(), "content/showcase");

// export function getSortedPostsData() {
//     // Get file names under /content/showcase
//     const fileNames = fs.readdirSync(postsDirectory);
//     const allPostsData = fileNames.map((fileName) => {
//       // Remove ".md" from file name to get slug
//       const slug = fileName.replace(/\.md$/, '');

//       // Read markdown file as string
//       const fullPath = path.join(postsDirectory, fileName);
//       const fileContents = fs.readFileSync(fullPath, 'utf8');

//     //   Use gray-matter to parse the post metadata section
//       const matterResult = matter(fileContents);

//       // Combine the data with the slug
//       return {
//         slug,
//         ...matterResult.data,
//       };
//     });
//     // Sort posts by date
//     return allPostsData.sort((a, b) => {
//       if (a.date < b.date) {
//         return 1;
//       } else {
//         return -1;
//       }
//     });
//   }

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html);
  // .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...matterResult.data,
  };
}

// get all posts
export function getPostSlugs() {
    return fs.readdirSync(postsDirectory)
  }

export function getPostBySlug(slug, fields) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });
  return items
}

export function getAllPosts(fields) {
    const slugs = getPostSlugs()
    const posts = slugs
      .map((slug) => getPostBySlug(slug, fields))
      // sort posts by date in descending order
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  
    // console.log(posts)
    return posts
  }