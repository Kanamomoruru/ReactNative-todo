import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import Colors from '../Colors'
import TodoModal from './TodoModal'

export default class TodoList extends React.Component {
    state = {
        showListVisible: false
    }

    toggleListModal() {
        this.setState({showListVisible: !this.state.showListVisible})
    }

    render() {
        const list = this.props.list;

        const completedCount = list.todos.filter(todo => todo.completed).length;
        const RemainingCount = list.todos.length - completedCount;

        return (
            <View>
                <Modal
                    animationType="slide"
                    visible={this.state.showListVisible}
                    onRequestClose={() => this.toggleListModal()}
                
                >
                    <TodoModal list={list} closeModal={() => this.toggleListModal()} />
                </Modal>
                <TouchableOpacity 
                    style={[styles.listContainer, { backgroundColor: list.color }]}
                    onPress={() => this.toggleListModal()}
                >
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
                </TouchableOpacity>
            </View>
        );
    }  
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