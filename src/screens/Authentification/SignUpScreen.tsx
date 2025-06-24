import { TextInput, TouchableOpacity, Text, StyleSheet,View } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Signup() {
    // const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); 
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    
    const handleSignup = async () => {
        setErrorMessage(""); 
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <TextInput 
                placeholder="Email" 
                placeholderTextColor="#127fab"
                style={styles.input} 
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            <TextInput 
                placeholder="Password" 
                placeholderTextColor="#127fab"
                style={styles.input} 
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

            <TouchableOpacity onPress={handleSignup} style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',

  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#127fab',
    marginBottom: 30,
  },
  input: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#B0B0B0',
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#F5F5F5',
  },
  errorText: {
    color: '#dc3545',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
    backgroundColor: '#f8d7da',
    padding: 8,
    borderRadius: 5,
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#127fab',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
