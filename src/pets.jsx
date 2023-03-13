import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { configuredClient } from "./sanity";
import imageUrlBuilder from "@sanity/image-url";
import { URL } from "./petsUtils";

const builder = imageUrlBuilder(configuredClient);

function urlFor(source) {
    return builder.image(source);
}

const POSTS = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
];

function wait(duration) {
    return new Promise(resolve => setTimeout(resolve, duration));
}

const Pets = () => {
    const queryClient = useQueryClient();
    const postsQuery = useQuery({
        queryKey: ["pets"],
        queryFn: ({ queryKey }) =>
            wait(1000).then(() => {
                console.log(queryKey);
                return [...POSTS];
            }),
        staleTime: 1000 * 60 * 1,
    });

    // const newPostMutation = useMutation({
    //     mutationFn: title => {
    //         return wait(1000).then(() =>
    //             POSTS.push({ id: crypto.randomUUID(), title })
    //         );
    //     },
    //     onSuccess: () => {
    //         queryClient.invalidateQueries(["pets"]);
    //     },
    // });

    console.log(POSTS);

    if (postsQuery.isLoading) return <p>Loading...</p>;

    if (postsQuery.isError)
        return <pre>{JSON.stringify(postsQuery.error)}</pre>;

    return (
        <>
            <ul>
                {postsQuery.data?.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}

                {/* <button
                    disabled={newPostMutation.isLoading}
                    onClick={() =>
                        newPostMutation.mutate(
                            "New post added " + new Date().getTime()
                        )
                    }>
                    Add New Post
                </button> */}
                {/* {data.result.map(pet => {
                    return (
                        <li key={pet.name} className='list-item'>
                            Name - {pet.name} <br /> Age - {pet.age}
                            <div className='img-wrapper'>
                                <img
                                    src={urlFor(pet.image).auto("format").url()}
                                />
                            </div>
                        </li>
                    );
                })} */}
            </ul>

            {/* <div>
                <pre>{JSON.stringify(pets, null, 2)}</pre>
            </div> */}
        </>
    );
};

export default Pets;
