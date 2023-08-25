import React from "react";
import { MockedProvider } from '@apollo/client/testing';
import { PaperProvider } from 'react-native-paper';
import AddHorsePage from "../Components/AddHorsePage";
import { allRaceQuery, allHorseQuery } from "../graphql/query"
import { loginMutation } from '../graphql/mutation';
import { fireEvent, cleanup, render } from "@testing-library/react-native";

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
    {
        request: {
            query: allRaceQuery,
        },
        result: {
            data: {
                races: {
                    id: '84',
                    no: "#1",
                    startTime: "2023-08-12",
                    venue: "Shat Tin"
                }
            },
        },
    },
    {
        request: {
            query: allHorseQuery,
        },
        result: {
            data: {
                horses: {
                    id: '103',
                    name: "Test Horse",
                    rank: "123"
                }
            },
        },
    },
];

beforeEach(() => {
    jest.useFakeTimers();
});

describe('Add Horse Page', () => {
    it('Snapshot Test', () => {
        const addHorsePage = render(
            <MockedProvider mocks={mocks} addTypename={false} >
                <PaperProvider>
                    <AddHorsePage />
                </PaperProvider>
            </MockedProvider>
        );
        expect(addHorsePage).toMatchSnapshot();
    })
})
