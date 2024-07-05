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

export default function Register(props) {

    const { switchToSignin } = useContext(AccountContext);
    return (
        <BoxContainer>
            <FormContainer>
                <Input type="text" placeholder="Full name" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="Confirm password" />
                {/* <Input type="text" placeholder="Enter your address" />
                <Input type="number" placeholder="Phone number" /> */}
            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <SubmitButton type="submit">Signup</SubmitButton>
            <Marginer direction="vertical" margin="5px" />
            <LineText>
                Already have an account?{" "}
                <BoldLink onClick={switchToSignin} href="#">
                    Signin
                </BoldLink>
            </LineText>
        </BoxContainer>
    );
}