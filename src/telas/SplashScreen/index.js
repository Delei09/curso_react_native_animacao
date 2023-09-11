import { View } from "react-native";
import styles from "./styles";
import LottieView from 'lottie-react-native';
import splashAluraMed from '../../assets/splash-aluramed.json'

export default function SpashScreen({navigation}){

    function animacaoFinalizada(){
        navigation.reset({
            index: 0,
            routes: [{name: 'Onboarding'}]})
    }

    return(
        <View style={styles.container}>
            <LottieView 
                source={splashAluraMed}
                // loop={true}
                loop={false}
                autoPlay={true}
                onAnimationFinish={animacaoFinalizada}
            />
        </View>
    )
}