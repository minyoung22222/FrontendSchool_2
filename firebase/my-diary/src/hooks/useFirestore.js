import { collection } from "firebase/firestore";
import { useReducer } from "react";
import { appFireStore } from "../firebase/config";

// document : 파이어스토어에서 document 생성을 요청하면 우리가 생성한 document를 반환합니다.
// isPending : 통신이 이루어지고 있는 상태
// success : 요청에 대한 응답의 성공 유무
const initState = {
    document: null,
    isPending: false,
    error: null,
    success: false,
};

const storeReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export const useFirestore = (transaction) => {
    const [response, dispatch] = useReducer(storeReducer, initState);

    // colRef : 우리가 만들 컬랙션의 참조입니다. 우리가 따로 컬랙션을 만들지는 않지만, 원하는 컬랙션의 참조를 요구하기만 해도 자동으로 해당 컬랙션을 생성해줍니다.
    const colRef = collection(appFireStore, transaction);

    // 컬랙션에 문서를 추가합니다.
    const addDocument = (doc) => {};

    // 컬랙션에서 문서를 제거합니다.
    const deleteDocument = (id) => {};

    return { response, addDocument, deleteDocument };
};
