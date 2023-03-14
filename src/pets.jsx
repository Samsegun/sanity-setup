import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import { configuredClient } from "./sanity";
import imageUrlBuilder from "@sanity/image-url";
import { fetchPet } from "./petsUtils";

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
    const petsQuery = useQuery(["pets"], fetchPet);
    // const petsQuery = useQuery({
    //     queryKey: ["pets"],
    //     queryFn: ({ queryKey }) =>
    //         fetchPet(queryKey).then(res => {
    //             console.log(queryKey);
    //             return res;
    //         }),
    // });

    console.log(petsQuery.data);

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

    if (petsQuery.isLoading) return <p>Loading...</p>;

    if (petsQuery.isError) {
        return <p>{petsQuery.error.message}</p>;
    }

    return (
        <>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>

                <li>
                    <Link to='pet'>Pet</Link>
                </li>
            </ul>

            <ul>
                {/* <button
                    disabled={newPostMutation.isLoading}
                    onClick={() =>
                        newPostMutation.mutate(
                            "New post added " + new Date().getTime()
                        )
                    }>
                    Add New Post
                </button> */}
                {petsQuery.data.result.map(pet => {
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
                })}
            </ul>
        </>
    );
};

export default Pets;
