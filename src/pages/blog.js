import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import SimpleHeader from "../components/SimpleHeader";
import { Window } from "../components/Retro";
import { Prose } from "../components/BlogPost/Prose";
import {
  BackLink,
  Article,
  ArticleHead,
  MetaRow,
  Kicker,
  EndOfFile,
} from "../components/BlogPost/BlogPostElements";
import { DateChip, Tags } from "../components/About/AboutElements";
import posts, { getPost, formatDate } from "../blog/posts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPost(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    const previousTitle = document.title;
    document.title = post ? `${post.title} | jar` : "Post not found | jar";
    return () => {
      document.title = previousTitle;
    };
  }, [post]);

  return (
    <>
      <SimpleHeader backTo="/#blog" backLabel="← all posts" />

      <Article>
        {post ? (
          <>
            <ArticleHead>
              <Kicker>[dev log]</Kicker>
              <h1>{post.title}</h1>
              <MetaRow>
                <DateChip>{formatDate(post.date)}</DateChip>
                <span>{post.readTime}</span>
                <span>by Jay Anton Roblico</span>
              </MetaRow>
              <Tags>
                {post.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </Tags>
            </ArticleHead>

            <Window title={`${post.slug}.md`}>
              <Prose>
                <post.Content />
              </Prose>
            </Window>

            <EndOfFile>
              <span>&gt; EOF. thanks for reading :)</span>
              <BackLink to="/#blog">← all posts</BackLink>
            </EndOfFile>
          </>
        ) : (
          <Window title="error.log" accent="var(--orange)">
            <Prose>
              <h2>404: post not found</h2>
              <p>
                That post doesn't exist (yet). There{" "}
                {posts.length === 1 ? "is" : "are"} {posts.length}{" "}
                {posts.length === 1 ? "post" : "posts"} in the dev log.
              </p>
              <p>
                <BackLink to="/#blog">← back to the dev log</BackLink>
              </p>
            </Prose>
          </Window>
        )}
      </Article>

      <Footer />
    </>
  );
};

export default BlogPost;
