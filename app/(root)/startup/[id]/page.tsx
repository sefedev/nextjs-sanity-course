import { client } from "@/sanity/client";
import { STARTUP_BY_ID_QUERY } from "@/sanity/query";
import { notFound } from "next/navigation";
import React from "react";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export const experimental_ppr = true;

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });

  if (!post) return notFound();
  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <p className="tag">{formatDate(post?._createdAt)}</p>
        <h1 className="heading">This is a Startup: {post.title}</h1>
        <p className="sub-heading !max-w-5xl">{post.description}</p>
      </section>

      <section className="section_container">
        <img
          src={post.image}
          alt="thumbnail"
          className="rounded-xl w-full h-auto"
        />

        <div className="space-y-5 mt-10 max-2-4xl mx-auto">
          <div className="flex-between gap-5">
            <Link
              href={`/user/${post.author?._id}`}
              className="flex gap-2 items-center mb-3"
            >
              <Image
                src={post.author.image}
                alt="avatar"
                className="rounded-full drop-shadow-lg"
                width={64}
                height={64}
              />
              <p className="text-20-medium">{post.author.name}</p>
              <p className="text-16-medium text-black-300">
                {post.author.username}
              </p>
            </Link>

            <p className="category-tag">{post.category}</p>
          </div>
          <h3 className="text-30-bold">Pitch Details</h3>
        </div>
      </section>
    </>
  );
};

export default Page;
