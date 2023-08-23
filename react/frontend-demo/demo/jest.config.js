module.exports = {
  preset: 'react-native',
  // moduleNameMapper: {
  //   'createIconSet':"<rootDir>/node_modules/react-native-vector-icons/MaterialCommunityIcons"
  // },
  transformIgnorePatterns: ["node_modules/(?!(react-native-vector-icons|@react-native|react-native|my-project|react-native-button)/)"]
};
