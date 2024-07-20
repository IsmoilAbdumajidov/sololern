import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { instance } from "../api/api";
import toast from "react-hot-toast";
import { addToLS } from "../utils/localStorage";

export const useSignUp = ({setisSuccess,setUsername}) => {
    return useMutation((data) => instance.post("/account/register/", data, {
    }),
        {
            onSuccess: (data) => {
                console.log(data);
                setisSuccess(true)
                setUsername(data?.data?.username)

            },
            onError: (error) => {
                console.log(error);
            }
        }
    )

}
export const useSignIn = () => {
    return useMutation((data) => instance.post("/account/login/", data, {
    }),
        {
            onSuccess: (data) => {
                console.log(data);
                addToLS("access",data?.data?.access)

            },
            onError: (error) => {
                console.log(error);
            }
        }
    )

}
export const useVerify = () => {
    return useMutation((data) => instance.post("/account/verify/", data, {
    }),
        {
            onSuccess: (data) => {
                console.log(data);
                toast.success("Muvaffaqqiyatli ro'yxatdan o'tdingiz")

            },
            onError: (error) => {
                console.log(error);
            }
        }
    )

}
export const getGroup = () => {
    return useQuery(["getGroup"], () => instance.get("/account/groupsatt/"), {
        refetchOnWindowFocus: false,
        select:(data)=>data.data,
        onSuccess: (data) => console.log(data),
        onError: (error) => {
            console.log(error);
        },
    })
}



