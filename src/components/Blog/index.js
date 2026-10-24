import React from "react";
import { SectionHeading } from "../Retro";
import posts, { formatDate } from "../../blog/posts";
import {
  BlogContainer,
  BlogWrapper,
  PostList,
  PostRow,
  PostMeta,
  PostBody,
  PostTags,
  Arrow,
} from "./BlogElements";
import { DateChip } from "../About/AboutElements";

const Blog = () => {
  return (
    <BlogContainer id="blog">
      <BlogWrapper>
        <SectionHeading index="04">dev log</SectionHeading>
        <PostList>
          {posts.map((post) => (
            <li key={post.slug}>
              <PostRow to={`/blog/${post.slug}`}>
                <PostMeta>
                  <DateChip>{formatDate(post.date)}</DateChip>
                  <span>{post.readTime}</span>
                </PostMeta>
                <PostBody>
                  <h3>{post.title}</h3>
                  <p>{post.summary}</p>
                  <PostTags>
                    {post.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </PostTags>
                </PostBody>
                <Arrow className="post__arrow" aria-hidden="true">
                  →
                </Arrow>
              </PostRow>
            </li>
          ))}
        </PostList>
      </BlogWrapper>
    </BlogContainer>
  );
};

export default Blog;
