import React from "react";
import { MockedProvider } from '@apollo/client/testing';
import { PaperProvider } from 'react-native-paper';
import LoginPage from "../Components/LoginPage";
import { loginMutation } from '../graphql/mutation';
import { fireEvent, cleanup, render, screen, renderHook } from "@testing-library/react-native";
import { act } from "react-test-renderer";

const mocks = [
    {
        request: {
            query: loginMutation,
            variables: {
                email: 'johndoe@email.com',
                password: 'pAsSWoRd!',
            },
        },
        result: {
            data: {
                login: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXIjMSIsInJvbGVzIjpbInVzZXIiLCJhZG1pbiJdLCJpYXQiOjE2OTI2NzE5NTEsImV4cCI6MTY5Mjc1ODM1MSwic3ViIjoidXNlciMxIn0.3CPT3fQqU6fLarIh8y0zFkJD7Xik5UdzBBkapqZdzSM"
            },
        },
    },
];

beforeEach(() => {

    jest.useFakeTimers();
});

describe('Login Page', () => {
    it('Snapshot', () => {
        const handleLogin = jest.fn();

        const loginPage = render(
            <MockedProvider mocks={mocks} addTypename={false} >
                <PaperProvider>
                    <LoginPage onLogin={handleLogin} />
                </PaperProvider>
            </MockedProvider>
        );
        expect(loginPage).toMatchSnapshot();
    })

    it('Login Input Change', () => {

        const handleLogin = jest.fn();

        const { getByTestId, getByDisplayValue } = render(
            <MockedProvider mocks={mocks} addTypename={false} >
                <PaperProvider>
                    <LoginPage onLogin={handleLogin} />
                </PaperProvider>
            </MockedProvider>
        );

        const email = 'johndoe@email.com';
        const pw = 'pAsSWoRd!';

        const emailInput = getByTestId('email-input');
        const passwordInput = getByTestId('password-input');
        fireEvent.changeText(emailInput, email);
        fireEvent.changeText(passwordInput, pw);

        const emailInputChanged = getByDisplayValue(email);
        const pwInputChanged = getByDisplayValue(pw);

        expect(emailInputChanged).toBeTruthy();
        expect(pwInputChanged).toBeTruthy();
    })

    it('Login Submit', async () => {

        const handleLogin = jest.fn();

        const { getByTestId, getByDisplayValue } = render(
            <MockedProvider mocks={mocks} addTypename={false} >
                <PaperProvider>
                    <LoginPage onLogin={handleLogin} />
                </PaperProvider>
            </MockedProvider>
        );

        const email = 'johndoe@email.com';
        const pw = 'pAsSWoRd!';
        const emailInput = getByTestId('email-input');
        const passwordInput = getByTestId('password-input');
        const loginButton = getByTestId('login-btn');
        fireEvent.changeText(emailInput, email);
        fireEvent.changeText(passwordInput, pw);
        const emailInputChanged = getByDisplayValue(email);
        const pwInputChanged = getByDisplayValue(pw);
        expect(emailInputChanged).toBeTruthy();
        expect(pwInputChanged).toBeTruthy();
        act(()=> {
            fireEvent.press(loginButton);
        })

    })
})
