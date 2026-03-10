import { portfolioData } from "@/lib/portfolioData";
import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";

type DevToArticle = {
  id: number;
  title: string;
  url: string;
  published_at: string;
};

type PostItem = {
  title: string;
  date: string;
  link: string;
};

type PostsCache = {
  key: string;
  items: PostItem[];
  fetchedAt: number;
};

const devToUsername = portfolioData.config?.pages?.posts?.devToUsername ?? "recurpixel";
const maxPosts = Math.max(1, portfolioData.config?.pages?.posts?.maxPosts ?? 3);
const devToUrl = portfolioData.config?.social?.devto ?? `https://dev.to/${devToUsername}`;
const cacheKey = `${devToUsername}:${maxPosts}`;
const CACHE_TTL_MS = 10 * 60 * 1000;

let postsCache: PostsCache | null = null;

const formatPublishedDate = (publishedAt: string) => {
  const parsedDate = new Date(publishedAt);
  if (Number.isNaN(parsedDate.getTime())) {
    return "Recent";
  }

  return parsedDate.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });
};

const PostsSection = () => {
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUsingStaleCache, setIsUsingStaleCache] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    const isCacheFresh =
      postsCache &&
      postsCache.key === cacheKey &&
      Date.now() - postsCache.fetchedAt < CACHE_TTL_MS;

    if (isCacheFresh) {
      setPosts(postsCache.items);
      setIsUsingStaleCache(false);
      setIsLoading(false);
      return () => {
        abortController.abort();
      };
    }

    const fetchPosts = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `https://dev.to/api/articles?username=${encodeURIComponent(devToUsername)}&per_page=${maxPosts}`,
          { signal: abortController.signal },
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch dev.to posts: ${response.status}`);
        }

        const articles = (await response.json()) as DevToArticle[];
        const mappedPosts = articles.map((article) => ({
          title: article.title,
          date: formatPublishedDate(article.published_at),
          link: article.url,
        }));

        postsCache = {
          key: cacheKey,
          items: mappedPosts,
          fetchedAt: Date.now(),
        };

        setPosts(mappedPosts);
        setIsUsingStaleCache(false);
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          const staleCacheForProfile =
            postsCache &&
            postsCache.key === cacheKey &&
            postsCache.items.length > 0;

          if (staleCacheForProfile) {
            setPosts(postsCache.items);
            setIsUsingStaleCache(true);
          } else {
            setPosts([]);
            setIsUsingStaleCache(false);
          }
        }
      } finally {
        if (!abortController.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    void fetchPosts();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <section>
      <SectionHeading title="Writing" id="posts" />
      <div className="space-y-3">
        {isLoading && (
          <p className="text-xs text-muted-foreground">Loading latest posts...</p>
        )}

        {!isLoading && posts.map((post) => (
          <a
            key={post.link}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-baseline justify-between gap-4 group py-1"
          >
            <div className="flex items-baseline gap-2 min-w-0">
              <ExternalLink size={10} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 relative top-[1px]" />
              <span className="text-sm text-foreground group-hover:text-primary transition-colors truncate">{post.title}</span>
            </div>
            <span className="text-xs font-mono text-muted-foreground shrink-0">{post.date}</span>
          </a>
        ))}

        {!isLoading && isUsingStaleCache && posts.length > 0 && (
          <p className="text-xs text-muted-foreground">Showing cached posts.</p>
        )}

        {!isLoading && posts.length === 0 && (
          <p className="text-xs text-muted-foreground">Unable to load posts right now.</p>
        )}
      </div>
      <a href={devToUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 font-mono text-xs text-muted-foreground hover:text-primary transition-colors">
        → all posts on dev.to
      </a>
    </section>
  );
};

export default PostsSection;
