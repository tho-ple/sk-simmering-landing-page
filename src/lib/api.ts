import { Post } from "@/interfaces/post";
import { GalleryImage } from "@/interfaces/gallery-image";
import fs from "fs";
import matter from "gray-matter";
import { join, extname, parse } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getRecentPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post) => !IsOlderThanOneMonth(post.date))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

function IsOlderThanOneMonth(date: string): boolean {
  const inputDate = new Date(date);
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

  return inputDate < oneMonthAgo;
}

const galleryDirectory = join(process.cwd(), "public/assets/gallery");
const SUPPORTED_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);

function filenameToAlt(filename: string): string {
  return parse(filename).name.replace(/[-_]+/g, " ").trim();
}

export function getAllGalleryImages(): GalleryImage[] {
  if (!fs.existsSync(galleryDirectory)) return [];
  return fs
    .readdirSync(galleryDirectory)
    .filter((f) => SUPPORTED_EXTENSIONS.has(extname(f).toLowerCase()))
    .map((filename) => ({
      filename,
      src: `/assets/gallery/${filename}`,
      alt: filenameToAlt(filename),
      mtime: fs.statSync(join(galleryDirectory, filename)).mtimeMs,
    }))
    .sort((a, b) => b.mtime - a.mtime)
    .map(({ filename, src, alt }) => ({ filename, src, alt }));
}

export function getCarouselGalleryImages(count = 5): GalleryImage[] {
  return getAllGalleryImages().slice(0, count);
}
