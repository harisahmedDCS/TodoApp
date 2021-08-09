import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import TodoList from './components/TodoList';
import {connect} from 'react-redux';
import {addTodo} from './redux/actions/todo';

const App = ({addTodo, editTodo, todot}) => {
  const [text, setText] = useState('');
  const [todo, setTodo] = useState([]);
  const [condition, setCondition] = useState(true);
  const item = {
    name: text,
    id: Math.random(),
  };
  const addTodos = () => {
    setText('');
    addTodo(item);
  };
  const editTodos = () => {
    var key = todot.findIndex(x => x.id === editTodo.id);
    const items = {
      name: text,
      id: Math.random(),
    };
    todot[key] = items;
    setText('');
    setCondition(true);
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={setText} value={text} />
      {condition ? (
        <TouchableOpacity style={styles.add} onPress={addTodos}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>ADD</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.add} onPress={editTodos}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>EDIT</Text>
        </TouchableOpacity>
      )}
      <TodoList
        todo={todo}
        setTodo={setTodo}
        setText={setText}
        addTodo={addTodos}
        text={text}
        setCondition={setCondition}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
  },
  add: {
    justifyContent: 'center',
    backgroundColor: '#6699ff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    alignSelf: 'center',
  },
});

const mapStateToProps = state => ({
  todot: state.todo,
  editTodo: state.editTodo,
});

export default connect(mapStateToProps, {addTodo})(App);
