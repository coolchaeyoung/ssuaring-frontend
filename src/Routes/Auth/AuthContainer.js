import React, { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import useInput from "../../Hooks/useInput";
import AuthPresenter from "./AuthPresenter";
import { /*CREATE_ACCOUNT,*/ CONFIRM_SECRET, LOCAL_LOG_IN, LOG_IN } from "./AuthQueries";
import { toast } from "react-toastify";



export default () => {
    const [action, setAction] = useState("logIn");
    const fullname = useInput("");
    const nickname = useInput("");
    const email = useInput("");
    const phoneNumber = useInput("");
    const secret = useInput("");

    const [requestSecretMutation] = useMutation(LOG_IN, {
        variables: {phoneNumber: phoneNumber.value}
    });

    /*const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
        variables: {
            
        }
    })*/

    const [confirmSecretMutation] = useMutation(CONFIRM_SECRET, {
        variables: {
            phoneNumber: phoneNumber.value,
            secret: secret.value
        }
    });

    const [localLogInMutation] = useMutation(LOCAL_LOG_IN);

    const onSubmit = async e => {
        e.preventDefault();
        if (action === "logIn") {
            if(phoneNumber.value !== "") {
                try {
                    const { data: { requesetSecret } } = await requestSecretMutation();
                    if(!requesetSecret) {
                        toast.error("fuck you");
                        setTimeout(() => setAction("signUp"), 3000);
                    //    setAction("confirm");
                    } else {
                        toast.success("인증번호를 확인하세요");
                        setAction("confirm");
                    }
                } catch {
                    toast.error("인증번호를 요청할 수 없습니다. 다시 시도해주세요");
                }
            } else {
                toast.error("전화번호를 다시 입력해주세요");
            }
        } else if(action === "confirm") {
            if(secret.value) {
                try {
                    const { 
                        data:{ confirmSecret: token }
                    } = await confirmSecretMutation();
                    if (token) {
                        localLogInMutation({ variables: { token }});
                    } else {
                        throw Error();
                    }
                } catch {
                    toast.error("인증번호를 다시 입력해주세요");
                }
            }
        }
    };

    return (
        <AuthPresenter 
            action={action}
            setAction={setAction}
            fullname={fullname}
            nickname={nickname}
            email={email}
            phoneNumber={phoneNumber}
            secret={secret}
            onSubmit={onSubmit}
        />
    );
};