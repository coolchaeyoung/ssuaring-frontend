import React from "react";
import styled from "styled-components";
import Button from "../../Components/Button";
import Input from "../../Components/Input";

const Wrapper = styled.div`
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
`;

const Box = styled.div`
    ${props => props.theme.whiteBox}
    border-radius: 0px;
    width: 100%;
    max-width: 350px;
`;

const StateChanger = styled(Box)`
    text-align: center;
    padding: 20px 0px;
`;

const Link = styled.span`
    color:${props => props.theme.blueColor};
    cursor:pointer;
`;

const Form = styled(Box)`
    padding: 40px;
    padding-bottom: 30px;
    margin-bottom: 15px;
    form {
        width: 100%;
        input {
            width: 100%;
            &:not(:last-child) {
                margin-bottom: 7px;
            }
        }
        button {
            margin-top: 10px;
        }
    }
`;

export default ({
    action,
    setAction,
    fullname,
    nickname,
    email,
    phoneNumber,
    secret,
    onSubmit
}) => {
    return (
        <Wrapper>
            <Form>
                {action === "logIn" && (
                    <form onSubmit={onSubmit}>
                        <Input placeholder="전화번호 입력" {...phoneNumber} />
                        <Button text={"인증문자 받기"}/>
                    </form>
                )}
                {action === "signUp" && ( 
                    <form onSubmit={onSubmit}>
                        <Input placeholder="Full Name" {...fullname} />
                        <Input placeholder="Nickname" {...nickname} />
                        <Input placeholder="Email" {...email} type="email" />
                        <Input placeholder="Phone Number" {...phoneNumber} />
                        <Button text={"Sign up"} />
                    </form>
                )}
                {action === "confirm" && (
                    <form onSumbit={onSubmit}>
                        <Input placeholder="인증번호 입력" {...secret} />
                        <Button text={"시작하기"} />
                    </form>
                )}
            </Form>
            {action !== "confirm" && (
                <StateChanger>
                    {action === "logIn" ? (
                        <>
                            계정이 없으신가요?{" "}
                            <Link onClick={() => setAction("signUp")}>회원가입</Link>
                        </>
                    ) : (
                        <>
                            계정이 있으신가요?{" "}
                            <Link onClick={() => setAction("logIn")}>로그인</Link>
                        </>
                    )}
                </StateChanger>
            )}
        </Wrapper>
    )
};