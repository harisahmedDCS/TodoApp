import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {editTodo} from '../redux/actions/editTodo';
import {deleteData} from '../redux/actions/todo';

const TodoList = ({setText, todoArray, deleteData, editTodo, setCondition}) => {
  const onDelete = item => {
    deleteData(item, todoArray);
  };
  const onEdit = (name, index) => {
    setText(name);
    setCondition(false);
    editTodo(index);
  };
  return todoArray.map(val => {
    return (
      <View style={styles.list} key={val.id}>
        <View style={styles.listView}>
          <Text>{val.name}</Text>
          <TouchableOpacity
            style={{marginRight: 20}}
            onPress={() => onEdit(val.name, val)}>
            <Text style={{color: '#EA2226'}}>edit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onDelete(val.id)}>
            <Text style={{color: '#EA2226'}}>cross</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  });
};

const mapStateToProps = state => ({
  todoArray: state.todo,
});

export default connect(mapStateToProps, {deleteData, editTodo})(TodoList);

const styles = StyleSheet.create({
  list: {
    height: 50,
    margin: 15,
    borderWidth: 'gray',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    backgroundColor: '#ffcccc',
  },
  listView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 10,
  },
});
