import * as fs from "node:fs/promises";
import PostCard from "../ui/writings/PostCard";

export type MDXMetadata = {
  title: string;
  publishDateMS: number;
};

async function Page() {
  const directories = (
    await fs.readdir("./app/writings/(slugs)", {
      withFileTypes: true,
    })
  ).filter((dirent) => dirent.isDirectory());

  // Retrive Metadata from .mdx file
  const metadatas: MDXMetadata[] = (
    await Promise.all(
      directories.map(async (directory) => {
        const { metadata } = await import(
          `./(slugs)/${directory.name}/page.mdx`
        );
        return { slug: directory.name, ...metadata };
      })
    )
  )
    // order by publishDateMS DESC
    .sort((a, b) => b.publishDateMS - a.publishDateMS);

  if (metadatas.length === 0) {
    return (
      <div className="mt-[40px]">
        <h2 className="text-sage-light-12 dark:text-sage-dark-12 text-body-2-bold">
          Will be released.... soon!!
        </h2>
      </div>
    );
  }

  return (
    <section className="mt-[40px]">
      {metadatas.map((metadata) => {
        return <PostCard key={metadata.publishDateMS} {...metadata} />;
      })}
    </section>
  );
}

export default Page;
