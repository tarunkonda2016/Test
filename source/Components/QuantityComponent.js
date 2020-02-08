import React, {PureComponent} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {PizzaActionCreator} from '../ReduxClasses/ActionCreator/PizzaActionCreator';

export default class QuantityComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.minusClick = this.minusClick.bind(this);
    this.addClick = this.addClick.bind(this);
  }

  minusClick = () => {
    const {dispatch} = this.props;
    dispatch(
      PizzaActionCreator.getDataMinus(this.props.type, this.props.selected),
    );
  };

  addClick = () => {
    const {dispatch} = this.props;
    dispatch(
      PizzaActionCreator.getDataAdd(this.props.type, this.props.selected),
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.minusClick} style={{width: '10%'}}>
          <Text style={styles.textFont}>-</Text>
        </TouchableOpacity>

        <Text style={styles.text}>{this.props.quantity}</Text>

        <TouchableOpacity onPress={this.addClick} style={{width: '10%'}}>
          <Text style={styles.textFont}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    color: 'black',
    width: '18%',
    marginHorizontal: 5,
  },
  container: {flex: 1, flexDirection: 'row'},
  textFont: {fontSize: 20, color: 'black'},
});
