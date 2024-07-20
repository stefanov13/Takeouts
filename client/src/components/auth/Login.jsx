import React, { useContext } from "react";

import {
    BoldLink,
    BoxContainer,
    FormContainer,
    Input,
    LineText,
    MutedLink,
    SubmitButton,
} from "./Common";
import Marginer from "./Marginer";
import { AccountContext } from './accountContext';

export default function Login() {
    const { switchToSignup } = useContext(AccountContext);

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <MutedLink to="/forgot-password">Forget your password?</MutedLink>
            <Marginer direction="vertical" margin="1.6em" />
            <SubmitButton type="submit">Signin</SubmitButton>
            <Marginer direction="vertical" margin="5px" />
            <LineText>
                Don't have an account?{" "}
                <BoldLink onClick={switchToSignup} href="#">
                    Signup
                </BoldLink>
            </LineText>
        </BoxContainer>
    );
}