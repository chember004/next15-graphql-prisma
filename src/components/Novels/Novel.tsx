import { DELETE_NOVEL } from "@/graphql/mutations";
import { GET_NOVELS } from "@/graphql/queries";
import { INovel } from "@/typings";
import { useMutation } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  novel: INovel;
};

export const Novel = ({ novel }: Props) => {
  const [deleteNovel] = useMutation(DELETE_NOVEL, {
    refetchQueries: [{ query: GET_NOVELS }],
  });
  return (
    <article className="flex flex-col p-4  bg-slate-200 dark:bg-zinc-800 hover:scale-110 shadow-sm hover:shadow-lg hover:bg-slate-300 transition duration-300 ease-out text-white ">
      {/* image */}
      {novel.image && (
        <div>
          <Image
            src={novel.image}
            alt={novel.title}
            className="h-56 w-full object-contain rounded-t-lg shadow-md"
          />
        </div>
      )}

      {/*title  */}
      <h1 className="font-bold text-xl my-2">{novel.title}</h1>
      {/* description */}
      <p className="text-xs my-2 line-clamp-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ab
        recusandae repudiandae ratione quia voluptatibus tempora dolores,
        veritatis cum, soluta numquam voluptatum earum obcaecati illum dolor.
        Fuga incidunt maxime culpa.
      </p>
      {/* source and date */}
      <div className="flex justify-between italic	 ß text-xs mt-auto  text-slate-500">
        <p className="text-white text-lg">Authors :{novel?.authors.length}</p>
      </div>
      <Link
        href={`/novel/${novel.id}`}
        className="bg-orange-500 mt-5 p-2 rounded-lg"
      >
        Read More
      </Link>

      <button
        onClick={() => deleteNovel({ variables: { id: novel.id } })}
        className="bg-red-500 mt-5 p-2 rounded-lg"
      >
        Delete
      </button>
    </article>
  );
};
