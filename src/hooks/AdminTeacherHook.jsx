import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { instance } from "../api/api";
import toast from "react-hot-toast";

// export const AddTopic = () => {
//     const queryClient = useQueryClient()
//     return useMutation((data) => instance.post("api/topics/", data, {
//     }),
//         {
//             onSuccess: (data) => {
//                 queryClient.invalidateQueries({ queryKey: ["getmytopic"] });
//                 // console.log(data);
//                 toast.success("Yangi fan qo'shildi")

//             },
//             onError: (error) => {
//                 console.log(error);
//             }
//         }
//     )

// }
export const AddTopic = () => {
    const queryClient = useQueryClient()
    return useMutation((data) => instance.post("/api/my_topics/", data, {
    }),
        {
            onSuccess: (data) => {
                queryClient.invalidateQueries({ queryKey: ["getmytopic"] });
                // console.log(data);
                toast.success("Yangi fan qo'shildi")

            },
            onError: (error) => {
                console.log(error);
            }
        }
    )

}
export const EditTopic = () => {
    const queryClient = useQueryClient()
    return useMutation((data) => instance.patch(`/api/topics/${data.id}/`, data, {
    }),
        {
            onSuccess: (data) => {
                queryClient.invalidateQueries({ queryKey: ["getmytopic"] });
                // console.log(data);
                toast.success("Fan tahrirlandi")

            },
            onError: (error) => {
                console.log(error);
            }
        }
    )

}
export const DeleteTopic = () => {
    const queryClient = useQueryClient()
    return useMutation((id) => instance.delete(`/api/topics/${id}/`, {
    }),
        {
            onSuccess: (data) => {
                queryClient.invalidateQueries({ queryKey: ["getmytopic"] });
                // console.log(data);
                toast.success("Fan o'chirildi")

            },
            onError: (error) => {
                console.log(error);
            }
        }
    )

}
export const getTopic = () => {
    return useQuery(["gettopic"], () => instance.get("/api/topics/"), {
        refetchOnWindowFocus: false,
        select: (data) => data.data,
        // onSuccess: (data) => console.log(data),
        onError: (error) => {
            console.log(error);
        },
    })
}
export const getMytopic = () => {
    return useQuery(["getmytopic"], () => instance.get("/api/my_topics/"), {
        refetchOnWindowFocus: false,
        select: (data) => data.data,
        // onSuccess: (data) => console.log(data),
        onError: (error) => {
            console.log(error);
        },
    })
}


export const EditLesson = () => {
    const queryClient = useQueryClient()
    return useMutation((data) => instance.patch(`/api/lessons/${data.id}/`, data, {
    }),
        {
            onSuccess: (data) => {
                queryClient.invalidateQueries({ queryKey: ["getmytopic"] });
                // console.log(data);
                toast.success("Dars tahrirlandi")

            },
            onError: (error) => {
                console.log(error);
            }
        }
    )

}

export const AddLesson = () => {
    const queryClient = useQueryClient()
    return useMutation((data) => instance.post("/api/lessons/", data, {
    }),
        {
            onSuccess: (data) => {
                queryClient.invalidateQueries({ queryKey: ["getmytopic"] });
                // console.log(data);
                toast.success("Yangi dars qo'shildi")

            },
            onError: (error) => {
                console.log(error);
            }
        }
    )

}
export const DeleteLesson = () => {
    const queryClient = useQueryClient()
    return useMutation((id) => instance.delete(`/api/lessons/${id}/`, {
    }),
        {
            onSuccess: (data) => {
                queryClient.invalidateQueries({ queryKey: ["getmytopic"] });
                // console.log(data);
                toast.success("Dars o'chirildi")

            },
            onError: (error) => {
                console.log(error);
            }
        }
    )

}



