import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../Colors'

export default TodoList = ({list}) => {
    const completedCount = list.todos.filter(todo => todo.completed).length;
    const RemainingCount = list.todos.length - completedCount;

    return (
        <View style={[styles.listContainer, { backgroundColor: list.color }]}>
            <Text style={styles.listTitle} numberOfLines={1}>
                {list.name}
            </Text>

            <View style={{alignItems: "center"}}>
                <Text style={styles.count}>{completedCount}</Text>
                <Text style={styles.subTitle}>Remaining</Text>
            </View>
            <View style={{alignItems: "center"}}>
                <Text style={styles.count}>{RemainingCount} </Text>
                <Text style={styles.subTitle}>Completed</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderRadius: 6,
        marginHorizontal: 12,
        alignItems: "center",
        width: 200
    },
    listTitle: {
        fontSize: 24,
        fontWeight: "700",
        color: Colors.white,
        marginBottom: 18
    },
    count: {
        fontSize: 48,
        fontWeight: "200",
        color: Colors.white
    },
    subTitle: {
        fontSize: 12,
        fontWeight: "700",
        color: Colors.white
    }
})