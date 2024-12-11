const DATA = Array.from({ length: 1000 }, (_, i) => ({ id: i, title: `Item ${i}` }));

// bug.js
const MyFlatList = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => <Text>{item.title}</Text>}
    />
  );
};

// bugSolution.js
const MyFlatList = () => {
  return (
    <FlatList
      data={DATA}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Text>{item.title}</Text>}
    />
  );
};