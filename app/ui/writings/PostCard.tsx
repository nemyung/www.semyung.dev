import Link from "next/link";
import type { MDXMetadata } from "~/app/writings/page";

const formatter = new Intl.DateTimeFormat("ko-KR", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

function PostCard({ title, publishDateMS }: MDXMetadata) {
  return (
    <article className="border-b border-b-sage-light-6 dark:border-b-sage-dark-6 px-[12px] py-[16px]">
      <Link href={`/writings/${title}`}>
        <h2 className="text-grass-light-12 dark:text-sage-dark-12 text-body-2-bold">
          {title}
        </h2>
        <p className="text-body-1-regular text-sage-light-11 dark:text-sage-dark-11 mt-[8px]">
          {formatter.format(publishDateMS)}
        </p>
      </Link>
    </article>
  );
}

export default PostCard;
