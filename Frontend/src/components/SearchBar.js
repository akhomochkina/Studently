import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import {StyleSheet} from "react-native";

const MyComponent = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={styles.searchBar}
        />
    );
};

const styles = StyleSheet.create({
    searchBar: {
        margin: 30
    }
});

export default MyComponent;