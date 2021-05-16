import Layout from "../components/Layout";
import { InferGetStaticPropsType } from "next";
import { client } from "../utils/sample-data";
import Link from "next/link";

const PostRow = (
  props: InferGetStaticPropsType<typeof getStaticProps>["posts"][number]
) => {
  return (
    <div className="relative">
      <Link href={`/post/${props._id}`}>
        <div className="flex flex-col p-4 hover:bg-gray-100 cursor-pointer space-y-2">
          <h1 className="tracking-wider leading-tight text-xl font-light text-gray-700">
            {props.title ?? "Untitled"}
          </h1>
          <p className="text-sm text-gray-600">
            By {props.author} &middot; Created on{" "}
            {new Date(props._createdAt).toLocaleDateString()} &middot; Last
            updated on {new Date(props._updatedAt).toLocaleDateString()}
          </p>
          {!!props.tags?.length && (
            <p>
              {props.tags
                .filter((tag) => tag.value)
                .map((tag) => (
                  <span
                    key={tag.value}
                    className="tracking-wider leading-none whitespace-nowrap text-gray-700 text-xs px-2 py-1 rounded-md bg-gray-200"
                  >
                    {tag.value}
                  </span>
                ))}
            </p>
          )}
          <button className="text-xs sm:self-start bg-orange-500 text-white tracking-wider leading-tight px-2 py-1 rounded-md">
            Is something incorrect?
          </button>
        </div>
      </Link>
    </div>
  );
};

const IndexPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Layout title="Therefore">
    <div className="divide-y divide-gray-300">
      <h1 className="text-4xl font-bold tracking-wider leading-tight text-orange-500 p-4">
        Posts
      </h1>
      {props.posts.map((props) => (
        <PostRow key={props._id} {...props} />
      ))}
      <div className="flex items-center justify-center text-sm text-gray-700 tracking-wider leading-tight font-light p-8">
        <p>That's all, for now. 🙂</p>
      </div>
    </div>
  </Layout>
);

export const getStaticProps = async () => {
  return {
    props: {
      posts: await Promise.all(
        (
          await client.getAll("post")
        ).map(async (post) => ({
          ...post,
          tags: await Promise.all((post.tags ?? []).map(client.expand)),
        }))
      ),
    },
  };
};

export default IndexPage;
