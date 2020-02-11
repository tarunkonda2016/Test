import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Button,
  InteractionManager,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import QuantityComponent from './QuantityComponent';
import {PizzaActionCreator} from '../ReduxClasses/ActionCreator/PizzaActionCreator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'default',
    };
    this.customerClick = this.customerClick.bind(this);
    this.clear = this.clear.bind(this);
    this.colorState = this.colorState.bind(this);
    this.total = this.total.bind(this);
  }

  clear = () => {
    const {dispatch} = this.props;
    dispatch(PizzaActionCreator.getDataClear());
  };

  customerClick = value => {
    if (this.state.selected !== value) {
      const {dispatch} = this.props;
      dispatch(PizzaActionCreator.getDataChange(value));
      InteractionManager.runAfterInteractions(() => {
        this.setState({selected: value}, () => {
          this.forceUpdate();
        });
      });
    }
  };

  total() {
    const {
      selected,
      smallPizzaPrice,
      smallPizzaQuantity,
      mediumPizzaQuantity,
      mediumPizzaPrice,
      largePizzaQuantity,
      largePizzaPrice,
      amazonLargePizzaOffer,
      fbLargePizzaOffer,
    } = this.props.reducerData;
    if (selected === 'default') {
      let count =
        smallPizzaQuantity * smallPizzaPrice +
        mediumPizzaPrice * mediumPizzaQuantity +
        largePizzaPrice * largePizzaQuantity;
      return count;
    } else if (selected === 'infosys') {
      let smallPizza = (smallPizzaQuantity / 3) * 2;
      let count =
        Math.ceil(smallPizza) * smallPizzaPrice +
        mediumPizzaPrice * mediumPizzaQuantity +
        largePizzaPrice * largePizzaQuantity;
      return count;
    } else if (selected === 'amazon') {
      let count =
        smallPizzaQuantity * smallPizzaPrice +
        mediumPizzaPrice * mediumPizzaQuantity +
        amazonLargePizzaOffer * largePizzaQuantity;
      return count;
    } else if (selected === 'fb') {
      let mediumPizza = (mediumPizzaQuantity / 5) * 4;
      let count =
        Math.ceil(mediumPizza) * mediumPizzaPrice +
        smallPizzaQuantity * smallPizzaPrice +
        fbLargePizzaOffer * largePizzaQuantity;
      return count;
    }
  }

  colorState = value => {
    let colorState = this.state.selected;
    if (
      colorState === value ||
      colorState === value ||
      colorState === value ||
      colorState === value
    ) {
      return 'orange';
    } else {
      return null;
    }
  };

  render() {
    return (
      <>
        <SafeAreaView style={styles.safeAreaContainer}>
          <StatusBar />
          <View style={styles.container}>
            <View style={styles.btnStyleView}>
              <Button
                title={'Default Customer'}
                color={this.colorState('default')}
                onPress={() => this.customerClick('default')}
              />
            </View>

            <View style={styles.btnStyleView}>
              <Button
                title={'Infosys Customer'}
                color={this.colorState('infosys')}
                onPress={() => this.customerClick('infosys')}
              />
            </View>

            <View style={styles.btnStyleView}>
              <Button
                title={'Amazon Customer'}
                color={this.colorState('amazon')}
                onPress={() => this.customerClick('amazon')}
              />
            </View>

            <View style={styles.btnStyleView}>
              <Button
                title={'Facebook Customer'}
                color={this.colorState('fb')}
                onPress={() => this.customerClick('fb')}
              />
            </View>

            <View style={{flexDirection: 'row', margin: 10}}>
              <Text style={{fontSize: 20, color: 'black', width: '60%'}}>
                Small Pizza{' '}
                <Text style={{fontSize: 15, color: 'grey'}}>$269.99</Text>
              </Text>

              <QuantityComponent
                selected={this.state.selected}
                type={'small'}
                {...this.props}
                quantity={this.props.reducerData.smallPizzaQuantity}
              />
            </View>

            <View style={{flexDirection: 'row', margin: 10}}>
              <Text style={{fontSize: 20, color: 'black', width: '60%'}}>
                Medium Pizza{' '}
                <Text style={{fontSize: 15, color: 'grey'}}>$322.99</Text>
              </Text>
              <QuantityComponent
                selected={this.state.selected}
                type={'medium'}
                {...this.props}
                quantity={this.props.reducerData.mediumPizzaQuantity}
              />
            </View>

            <View style={{flexDirection: 'row', margin: 10}}>
              <Text style={{fontSize: 20, color: 'black', width: '60%'}}>
                Large Pizza{' '}
                <Text style={{fontSize: 15, color: 'grey'}}>$269.99</Text>
              </Text>

              <QuantityComponent
                selected={this.state.selected}
                type={'large'}
                {...this.props}
                quantity={this.props.reducerData.largePizzaQuantity}
              />
            </View>

            <View style={{flexDirection: 'row', margin: 10}}>
              <View style={{width: '40%'}} />

              <View style={{width: '60%'}}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  Total : $
                  {Math.round((this.total() + Number.EPSILON) * 100) / 100}
                </Text>
              </View>
            </View>

            <Button title={'clear'} onPress={this.clear} />
          </View>
        </SafeAreaView>
      </>
    );
  }
}
const mapStateToProps = state => ({
  reducerData: state.PizzaCalculateReducer,
});
export default connect(mapStateToProps)(App);

const styles = StyleSheet.create({
  safeAreaContainer: {flex: 1},
  container: {flex: 1, flexDirection: 'column'},
  btnStyleView: {margin: 5},
});
