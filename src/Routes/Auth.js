import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Components/Button";
import Input from "../Components/Input";
import useInput from "../Hooks/useInput";

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

export default () => {
    const [action, setAction] = useState("logIn");
    const fullname = useInput("");
    const nickname = useInput("");
    const email = useInput("");
    const phoneNumber = useInput("");
    return (
        <Wrapper>
            <Form>
                {action === "logIn" ? (
                    <form>
                        <Input placeholder="Phone Number" {...phoneNumber} />
                        <Button text={"Log in"}/>
                    </form>
                ) : (
                    <form>
                        <Input placeholder="Full Name" {...fullname} />
                        <Input placeholder="Nickname" {...nickname} />
                        <Input placeholder="Email" {...email} type="email" />
                        <Input placeholder="Phone Number" {...phoneNumber} />
                        <Button text={"Sign up"} />
                    </form>
                )}
            </Form>
            <StateChanger>
                {action === "logIn" ? (
                    <>
                        Don't have an account?{" "}
                        <Link onClick={() => setAction("signUp")}>Sign up</Link>
                    </>
                ) : (
                    <>
                        Have an account?{" "}
                        <Link onClick={() => setAction("logIn")}>Log in</Link>
                    </>
                )}
            </StateChanger>
        </Wrapper>
    )
}