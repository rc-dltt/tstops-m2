// import React from 'react';
// import { render, fireEvent, waitFor, act } from '@testing-library/react-native';
// import { MockedProvider } from '@apollo/client/testing';
// import { PaperProvider } from 'react-native-paper';
// import LoginPage from '../Components/LoginPage';
// import { loginMutation } from '../graphql/mutation';

// const mocks = [
//     {
//         request: {
//             query: loginMutation,
//             variables: {
//                 email: 'johndoe@email.com',
//                 password: 'pAsSWoRd!',
//             },
//         },
//         result: {
//             data: {
//                 login: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXIjMSIsInJvbGVzIjpbInVzZXIiLCJhZG1pbiJdLCJpYXQiOjE2OTI2NzE5NTEsImV4cCI6MTY5Mjc1ODM1MSwic3ViIjoidXNlciMxIn0.3CPT3fQqU6fLarIh8y0zFkJD7Xik5UdzBBkapqZdzSM"
//             },
//         },
//     },
// ];

// beforeEach(() => {
//     jest.useFakeTimers();
// });

// afterEach(() => {
//     jest.runOnlyPendingTimers();
//     jest.useRealTimers();
// });

// test('renders login page and allows user to login', async () => {
//     const handleLogin = jest.fn();
//     const login=jest.fn()

//     const { getByTestId, queryByTestId, debug } = render(
//         <MockedProvider mocks={mocks} addTypename={false}>
//             <PaperProvider>
//                 <LoginPage onLogin={handleLogin} />
//             </PaperProvider>
//         </MockedProvider>,
//     );
//     debug();

//     const emailInput = getByTestId('email-input');
//     const passwordInput = getByTestId('password-input');
//     const loginButton = getByTestId('login-btn');

//     fireEvent.changeText(emailInput, 'johndoe@email.com');
//     fireEvent.changeText(passwordInput, 'pAsSWoRd!');
//     fireEvent.press(loginButton);
    
//     act(() => {
        
//       });

//     // await waitFor(() => {
//     //     // Then check if onLogin was called
//     //     expect(login).toHaveBeenCalled();
//     //   });
//     //   debug();
// });