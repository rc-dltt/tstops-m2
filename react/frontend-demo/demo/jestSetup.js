jest.mock('@react-native-async-storage/async-storage', () => require('@react-native-async-storage/async-storage/jest/async-storage-mock'));
jest.mock('react-native/Libraries/Animated/src/Animated', () => {
    const ActualAnimated = jest.requireActual('react-native/Libraries/Animated/src/Animated');
    return {
      ...ActualAnimated,
      timing: () => ({
        start: callback => callback && callback(),
      }),
      spring: () => ({
        start: callback => callback && callback(),
      }),
      decay: () => ({
        start: callback => callback && callback(),
      }),
      sequence: animations => ({
        start: callback => callback && callback(),
      }),
      parallel: animations => ({
        start: callback => callback && callback(),
      }),
    };
  });
  jest.mock('@react-native-async-storage/async-storage', () => ({
    setItem: jest.fn(() => Promise.resolve()),
  }));