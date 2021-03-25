import React, {Component} from 'react';
import styles from './styles';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';

export default class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      HeadTable: ['SKU', 'ITEM NAME', 'CATEGORY', 'PRICE'],
      DataTable: [
        ['A1', 'Chicken Adobo', 'Combo Meal', '120'],
        ['A2', 'Beef Caldereta', 'Combo Meal', '120'],
        ['A3', 'Mechado', 'Combo Meal', '110'],
        ['A4', 'Lechon Kawali', 'Combo Meal', '150'],
        ['A5', 'Sisig', 'Combo Meal', '130'],
        ['B1', 'Cheese Burger', 'Burger', '70'],
        ['B2', 'Double Cheeseburger', 'Burger', '80'],
        ['B3', 'Quarter Pounder', 'Burger', '80'],
        ['B4', 'Double Quarter Pounder', 'Burger', '90'],
        ['B5', 'Hamburger', 'Burger', '60'],
        ['C1', 'Leche Flan', 'Dessert', '100'],
        ['C2', 'Ube Macapuno', 'Dessert', '100'],
        ['C3', 'Chocolate Cake', 'Dessert', '120'],
        ['C4', 'Cookies and Cream Sundae', 'Dessert', '80'],
        ['C5', 'Apple Pie', 'Dessert', '40'],
        ['D1', 'Coke 1L', 'Beverages', '50'],
        ['D2', 'Sprite 1L', 'Beverages', '50'],
        ['D3', 'Royal 1L', 'Beverages', '50'],
        ['D4', 'Nestea 1L', 'Beverages', '50'],
        ['D5', 'Pineapple Juice 1L', 'Beverages', '50'],
        ['', '', '', ''],
      ],
    };
  }

  render () {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1, borderColor: 'transparent'}}>
          <Row
            data={state.HeadTable}
            style={styles.HeadStyle}
            textStyle={styles.TableText}
          />
          <ScrollView>
            <Rows data={state.DataTable} textStyle={styles.TableText} />
          </ScrollView>
        </Table>
      </View>
    );
  }
}
