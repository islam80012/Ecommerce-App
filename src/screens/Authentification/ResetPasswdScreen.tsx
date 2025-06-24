import { TextInput, TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { KeyboardAvoidingView, Platform } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [Affichage, setAffichage] = useState({ message: "", type: "" }); // type: "success" | "error"
   // const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleResetPassword = async () => {
      setAffichage({ message: "", type: "" });
    };

    return (
      <View style={styles.container}>
           <Text style={styles.title}>Forgot Password</Text>
  
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="#127fab"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          {Affichage.message ? (
            <Text style={[styles.message, Affichage.type === "success" ? styles.messageSuccess : styles.messageError]}>
              {Affichage.message}
            </Text>
          ) : null}

        <TouchableOpacity onPress={handleResetPassword} style={styles.button}>
          <Text style={styles.buttonText}>Reset Password</Text>
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
        marginTop:-40,

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
      message: {
        fontSize: 14,
        marginBottom: 20,
        textAlign: 'center',
        padding: 10,
        borderRadius: 5,
      },
      messageSuccess: {
        color: '#28a745', // Green for success
        backgroundColor: '#d4edda', // Light green background for success message
      },
      messageError: {
        color: '#dc3545', // Red for error
        backgroundColor: '#f8d7da', // Light red background for error message
      },
      button: {
        width: '90%',
        height: 50,
        backgroundColor: '#127fab',
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
});
