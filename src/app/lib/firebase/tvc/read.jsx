"use client";

//import { collection } from "@app/firebase/firestore";
//import { db } from "../../firebase";
import { db } from "@/app/lib/firebase";
import { collection, doc, getDoc, onSnapshot, orderBy, query } from "firebase/firestore";
import useSWRSubscription from 'swr/subscription' ;

export function useCategories(){
    const { data, error } = useSWRSubscription(['tvc'], ([path], { next }) => {
        const ref = collection(db, path);
        const q = query(ref, orderBy('timestamp', 'desc'));
        const unsub = onSnapshot(q, (snaps) => {
            next(null, snaps.docs.map((v) => v.data()))
        }, (error) => {
            next(error?.message)
        })
        return () => unsub();

    })
    return {
        data,
        error,
        isLoading: data === undefined ? true : false,
    }
}


/*s-update product*/
export const getCategory = async (id) => {
    return await getDoc(doc(db, `tvc/${id}`));
}
/*e-update product*/