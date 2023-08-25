import React from "react";
import { MockedProvider } from '@apollo/client/testing';
import { PaperProvider } from 'react-native-paper';
import AllRaceHorsePage from "../Components/AllRaceHorsePage";
import { allRaceQuery, allHorseQuery } from "../graphql/query"
import { loginMutation } from '../graphql/mutation';
import { render } from "@testing-library/react-native";

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

describe('All Race / Horse Page', () => {
    it('Snapshot Test', () => {
        const allRaceHorsePage = render(
            <MockedProvider mocks={mocks} addTypename={false} >
                <PaperProvider>
                    <AllRaceHorsePage />
                </PaperProvider>
            </MockedProvider>
        );
        expect(allRaceHorsePage).toMatchSnapshot();
    })
})
