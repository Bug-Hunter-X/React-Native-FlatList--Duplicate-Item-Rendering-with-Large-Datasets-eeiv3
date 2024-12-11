# React Native FlatList Duplicate Item Rendering

This repository demonstrates a common bug in React Native's `FlatList` component where duplicate items are rendered when dealing with large datasets. The problem arises from incorrect or missing key management in the `keyExtractor` prop.

## Bug Description:

When rendering a large number of items with a `FlatList`, the same item might appear multiple times in the list.  This causes performance issues and visual glitches.

## Solution:

The key to resolving this is implementing a reliable `keyExtractor` function.  This function ensures that each item in the list is uniquely identified.   The provided solution demonstrates best practices for key management.