import { TextInput, Text, View, StyleSheet, TouchableOpacity, ActivityIndicator, Alert } from "react-native";
import { useState } from "react";
import { useRouter, Link,useNavigation } from "expo-router";
import { supabase } from '../../lib/supabase';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [focusedInput, setFocusedInput] = useState(null); // Track focused input for shadow
    const router = useRouter();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const handleLogin = async () => {
        setLoading(true);
        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });
        if (error) Alert.alert(error.message);
        setLoading(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <TextInput
                placeholder='Email'
                placeholderTextColor="#ff686e"
                style={[
                    styles.input,
                    focusedInput === 'email' && styles.inputFocused // Apply shadow on focus
                ]}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                // onFocus={() => setFocusedInput('email')}
                // onBlur={() => setFocusedInput(null)}
            />
            <TextInput
                placeholder='Password'
                placeholderTextColor="#ff686e"
                style={[
                    styles.input,
                    focusedInput === 'password' && styles.inputFocused // Apply shadow on focus
                ]}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                // onFocus={() => setFocusedInput('password')}
                // onBlur={() => setFocusedInput(null)}
            />

            <TouchableOpacity 
                onPress={handleLogin} 
                style={styles.button} 
                disabled={loading}
            >
                {loading ? <ActivityIndicator color="white" /> : <Text style={styles.buttonText}>Login</Text>}
            </TouchableOpacity>

            <View style={styles.linksContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
                    <Text style={styles.link}>Forgot password?</Text>
                </TouchableOpacity>
  
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.link}>Create an account</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingTop: 80,
        backgroundColor: '#f8f8f8',
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        margin: 20,
        marginBottom: 40,
    },
    input: {
        width: '90%',
        height: 50,
        borderRadius: 10,
        borderWidth: 1.3,
        borderColor: '#B0B0B0',
        paddingHorizontal: 15,
        marginBottom: 20,
        fontSize: 16,
        backgroundColor: 'white',
    },
    inputFocused: {
        shadowColor: '#ff686e', // Shadow color
        elevation: 15, // For Android
        // backgroundColor: 'black', // Slightly different background color on focus
    },
    button: {
        width: '90%',
        height: 50,
        backgroundColor: '#ff686e',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
    linksContainer: {
        marginTop: 20,
        alignItems: 'center',
        flexDirection: 'row',
    },
    link: {
        fontSize: 17,
        fontWeight: '500',
        marginTop: -10,
        marginBottom: 10,
        padding: 15,
    },
});