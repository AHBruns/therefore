import { client, dataset, projectId } from "../../utils/sample-data";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Layout from "../../components/Layout";
import { useRouter } from "next/dist/client/router";
// @ts-ignore
import BlockContent from "@sanity/block-content-to-react";

export default function Post(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const router = useRouter();
  return (
    <Layout title={props.post?.title ?? "Therefore"}>
      {router.isFallback ? (
        <p>loading...</p>
      ) : (
        <div className=" md:max-w-4xl lg:max-w-5xl xl:max-w-6xl w-full mx-auto px-4 py-12 md:py-32 space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-wider leading-tight text-orange-500">
              {props.post.title ?? "Untitled"}
            </h1>
            <p className="text-sm tracking-wider leading-tight text-gray-600">
              By {props.post.author ?? "Anonymous"}
              <span className="hidden md:inline"> &middot; </span>
              <br className="inline md:hidden" />
              Created on {new Date(props.post._createdAt).toLocaleDateString()}
              <span className="hidden md:inline"> &middot; </span>
              <br className="inline md:hidden" />
              Last updated on{" "}
              {new Date(props.post._updatedAt).toLocaleDateString()}
            </p>
          </div>
          <BlockContent
            renderContainerOnSingleChild
            className="prose-sm md:prose prose-orange max-w-none min-w-full"
            blocks={props.post.body ?? []}
            projectId={projectId}
            dataset={dataset}
            serializers={{
              types: {
                table: (props: any) => (
                  <table>
                    {props.node.rows.map((row: any) => (
                      <tr>
                        {row.cells.map((text: string) => (
                          <td className="border border-gray-300 py-1 px-2">
                            {text}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </table>
                  // <pre>{JSON.stringify(props, null, 2)}</pre>
                ),
              },
            }}
          />
        </div>
      )}
    </Layout>
  );
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async (
  context: GetStaticPropsContext<{ id: string }>
) => {
  console.log(context);
  if (!context.params?.id) throw new Error("invalid id");

  let post = await client.get("post", context.params.id);

  return {
    props: {
      post: {
        ...post,
        tags: await Promise.all((post.tags ?? []).map(client.expand)),
      },
    },
    revalidate: 15,
  };
};
