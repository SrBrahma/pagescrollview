
<h1 align="center">
  <!-- <img src=".logo.png" alt=pagescrollview/><br/> -->
  pagescrollview
</h1>

<div align="center">

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![TypeScript](https://badgen.net/npm/types/env-var)](http://www.typescriptlang.org/)
[![npm](https://img.shields.io/npm/v/pagescrollview)](https://www.npmjs.com/package/pagescrollview)
[![npm](https://img.shields.io/npm/dm/pagescrollview)](https://www.npmjs.com/package/pagescrollview)
</div>

React Native ScrollView component interface that fills all the available area and has a working scrolling (!).

It fixes some very common issues with ScrollView: [1](https://github.com/facebook/react-native/issues/4099#issuecomment-307541206), [2](https://stackoverflow.com/questions/34880660/react-native-children-of-scrollview-wont-fill-full-height), [3](https://stackoverflow.com/questions/46805135/scrollview-with-flex-1-makes-it-un-scrollable), [4](https://github.com/facebook/react-native/issues/3825)

### 2.0.0! - 2022-06-17
It now uses a FlatList instead of the ScrollView under the hoods, as [FlatLists/SectionLists aren't allowed inside a ScrollView](https://stackoverflow.com/q/58243680/10247962). This doesn't change other behaviors or performance.



It also includes those commonly used props as default:

* `overScrollMode='never'` - Won't allow over scrolling.
* `bounces={false}` - Won't bounce when reaching an extreme.
* `keyboardShouldPersistTaps='handled'` - [Allows pressing pressables when Keyboard is open. Pressing a non-pressable area will dismiss the keyboard.](https://stackoverflow.com/a/57941568/10247962) - [You will still need to Keyboard.dismiss() to hide the keyboard when pressing a pressable.](https://stackoverflow.com/a/39772206/10247962)
* `nestedScrollEnabled={true}`

**Compatible with Web and Expo.**


## 💿 Installation
```bash
npm install pagescrollview
# or
yarn add pagescrollview
```


## 📖 Usage

> The usage is exactly how you would use the ScrollView, with the few extra optional props listed in the [Type section below](#type), without having to deal with the said bugs above! This example is just to have something pretty in this readme!

```tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PageScrollView } from 'pagescrollview'

const items = 20;

export default () => {
  return (
    <PageScrollView backgroundColor='#ebf3f3' style={styles.style}>
      {[...Array(items)].map((_,i) => {
        const backgroundColor = `hsl(${Math.floor((360/items)*i)}, 90%, 62%)`
        return (<View key={i} style={[styles.itemView, { backgroundColor }]}>
          <Text style={styles.itemText}>{`${i+1}/${items}`}</Text>
        </View>)
      })}
    </PageScrollView>
  );
}

const styles = StyleSheet.create({
  style: {
    padding: 10,
  },
  itemView: {
    width: '100%',
    margin: 5,
    padding: 40,
  },
  itemText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
```

<img src="./resources/README/example.png" width="25%" height="25%" />

### 🍟 [Snack of the code above](https://snack.expo.io/@srbrahma/887706)
<!-- also in https://expo.io/@srbrahma/pagescrollview but snack seems better -->
## Type
```ts
export type PageScrollViewProps = Omit<FlatListProps,
  'ListFooterComponentStyle' | 'ListFooterComponent' | 'data' | 'renderItem' | 'keyExtractor'
> & {
  /** Shortcut to apply the backgroundColor to the `style`. */
  backgroundColor?: string;
};
```
## 📰 [Changelog](CHANGELOG.md)
