import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  FlatList,
  Button,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Keyboard,
} from 'react-native';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{key: 'item 1'}, {key: 'item 2'}],
      textInput_Holder: '',
    };
  }

  renderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          margin: 10,
          borderRadius: 2,
          borderColor: 'black',
          borderWidth: 1,
        }}>
        <Text
          style={{
            fontSize: 20,
            margin: 10,
            textAlign: 'center',
          }}>
          {item.key}
        </Text>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{width: '40%', margin: 10}}>
            <Button title={'edit'} onPress={() => this.edit(item.key)} />
          </View>
          <View style={{width: '40%', margin: 10}}>
            <Button title={'delete'} onPress={() => this.delete(item.key)} />
          </View>
        </View>
      </View>
    );
  };

  edit = value => {
    if (this.state.textInput_Holder && this.state.textInput_Holder !== '') {
      let item = {
        key: this.state.textInput_Holder,
      };
      var index = this.state.data.findIndex(item => item.key === value);
      this.state.data[index] = item;

      this.setState({
        data: this.state.data,
      });
    } else {
      alert('fill the text');
    }
  };

  delete = value => {
    this.setState({
      data: this.state.data.filter(item => item.key !== value),
    });
  };

  joinData = () => {
    if (this.state.textInput_Holder && this.state.textInput_Holder !== '') {
      this.state.data.push({key: this.state.textInput_Holder});
      this.setState({
        textInput_Holder: '',
        data: this.state.data,
      });
    }
  };

  render() {
    return (
      <ScrollView keyboardShouldPersistTaps={'handled'} style={{flex: 1}}>
        <TextInput
          placeholder="Enter Value Here"
          onChangeText={data => this.setState({textInput_Holder: data})}
          style={styles.textInputStyle}
          underlineColorAndroid="transparent"
          onSubmitEditing={Keyboard.dismiss}
        />

        <TouchableOpacity
          onPress={this.joinData}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.buttonText}> Add Values To FlatList </Text>
        </TouchableOpacity>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          extraData={this.state}
          keyExtractor={(i, index) => index.toString()}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

  textInputStyle: {
    textAlign: 'center',
    height: 40,
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 7,
    margin: 10,
  },

  button: {
    height: 40,
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    margin: 10,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
