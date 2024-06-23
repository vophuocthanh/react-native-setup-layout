import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Page() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar style='light' />
      <Text>Home Page</Text>
      <Link href='/register' asChild>
        <Button title='Register' />
      </Link>
      <Link href='/one' asChild>
        <Button title='Open tabs one' />
      </Link>
    </View>
  );
}
