import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { db } from "./src/config/firebase";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-web";
import { addDoc, collection, getDocs } from "firebase/firestore";

export default function App() {
const [produtos, setProdutos] = useState([]);
const [nomeProduto, setNomeProduto] = useState('');
const [descricaoProduto, setDescricaoProduto] = useState('');
const [precoProduto, setPrecoProduto] = useState('');
  
  
  async function CadastrarProduto() {
    const produtosRef = collection(db, "produto");
    const docRef = await addDoc (produtosRef, {
      nome: nomeProduto,
      descricao: descricaoProduto,
      preco: precoProduto
      
    });
  }

  async function buscarProduto() {
    const produtosRef = collection(db, "produto");
    const produtosSnapshot = await getDocs(produtosRef)
    const produtosLista = produtosSnapshot.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });
    setProdutos(produtosLista[0]);
    console.log(produtosLista);
  }

  useEffect(() => {

    buscarProduto();

 },
  []);
  return (
    <View style={styles.container}>
      <Text>:3</Text>
      <Text>Nome do produto: {produtos.nome}</Text>
      <TextInput placeholder="Digite o nome do produto"
      style={(text) => setNomeProduto(text)}
      onChangeText={text => setNomeProduto(text)}
      value={nomeProduto}
      ></TextInput>
      <Text>Descrição do produto: {produtos.descricao}</Text>
      <TextInput placeholder="Digite a descrição do produto"
      style={(text) => setDescricaoProduto(text)}
      onChangeText={text => setDescricaoProduto(text)}
      value={descricaoProduto}
      ></TextInput>
      <Text>Preço do produto:  {produtos.preco}</Text>
      <TextInput placeholder="Digite o preço do produto"
      style={(text) => setPrecoProduto(text)}
      onChangeText={text => setPrecoProduto(text)}
      value={precoProduto}
      ></TextInput>
      

      <Button title="Cadastrar" onPress={CadastrarProduto}> </Button>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
