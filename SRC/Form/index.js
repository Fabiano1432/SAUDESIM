import React, {useState} from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("preencha o peso e a altura");
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular IMC")


    return(
        <View>
            <View>
            <Text>Altura</Text>
            <TextInput
            placeholder="Ex. 1.75"
            keyboardType="numeric"/>

            <Text>Peso</Text>
            <TextInput
            placeholder="Ex. 80.365"
            keyboardType="numeric"/>

            <Button 
            onPress={() => validationImc()}
            title={textButton}
            /> 
            

        </View>
        </View>

    )
}