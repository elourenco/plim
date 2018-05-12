import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    margin: 5,
    fontSize: 20,
    color: '#15629b',
    fontWeight: 'bold'
  },
  textInput: {
    margin: 10,
    fontSize: 20,
    color: '#fff'
  },
  textInputContainer: {
    borderWidth: 1,
    marginTop: 5,
    borderRadius: 2,
    borderColor: '#ddd',
    backgroundColor: '#ffff'
  }
});
