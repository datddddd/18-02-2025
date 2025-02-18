import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, Button, Alert, TextInput, View } from 'react-native';

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const validatePhoneNumber = (text) => {
    setPhoneNumber(text);
    if (!/^\d{10,11}$/.test(text)) {
      setError('Số điện thoại không hợp lệ.');
    } else {
      setError(''); // Xóa lỗi nếu hợp lệ
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Đăng nhập</Text>
      </View>

      <View>
        <Text style={styles.subtitle}>Nhập số điện thoại</Text>
        <Text style={styles.description}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousingPro
        </Text>
      </View>

      <View>
        <TextInput
          style={styles.input}
          onChangeText={validatePhoneNumber}
          value={phoneNumber}
          placeholder="Nhập số điện thoại của bạn"
          keyboardType="phone-pad"
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>

      <View>
        <Button color="red" title="Tiếp tục" onPress={() => Alert.alert('Cảm ơn')} />
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    elevation: 5,
    padding: 10,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
  },
});
