import React from 'react';
import renderer from 'react-test-renderer';
import Intro1 from './Jest_SnapshotTest';
import Intro2 from './Jest_SnapshotTest_fail';
//example of UI snapshot test

test('renders correctly', () => {
  const tree = renderer.create(<Intro1 />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders fail', () => {
  const tree = renderer.create(<Intro2 />).toJSON();
  expect(tree).toMatchSnapshot();
});