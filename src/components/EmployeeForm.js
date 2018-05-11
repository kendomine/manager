
import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}> Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            <Picker.Item label="Monday-Open" value="Monday-Open" />
            <Picker.Item label="Monday-Swing" value="Monday-Swing" />
            <Picker.Item label="Monday-Close" value="Monday-Close" />
            <Picker.Item label="Tuesday-Open" value="Tuesday-Open" />
            <Picker.Item label="Tuesday-Swing" value="Tuesday-Swing" />
            <Picker.Item label="Tuesday-Close" value="Tuesday-Close" />
            <Picker.Item label="Wednesday-Open" value="Wednesday-Open" />
            <Picker.Item label="Wednesday-Swing" value="Wednesday-Swing" />
            <Picker.Item label="Wednesday_Close" value="Wednesday-Close" />
            <Picker.Item label="Thursday-Open" value="Thursday-Open" />
            <Picker.Item label="Thursday-Swing" value="Thursday-Swing" />
            <Picker.Item label="Thursday-Close" value="Thursday-Close" />
            <Picker.Item label="Friday-Open" value="Friday-Open" />
            <Picker.Item label="Friday-Swing" value="Friday-Swing" />
            <Picker.Item label="Friday-Close" value="Friday-Close" />
            <Picker.Item label="Saturday-Open" value="Saturday-Open" />
            <Picker.Item label="Saturday-Swing" value="Saturday-Swing" />
            <Picker.Item label="Saturday-Close" value="Saturday-Close" />
            <Picker.Item label="Sunday-Open" value="Sunday-Open" />
            <Picker.Item label="Sunday-Swing" value="Sunday-Swing" />
            <Picker.Item label="Sunday-Close" value="Sunday-Close" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);