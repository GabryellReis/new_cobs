import { useState } from 'react';
import { ActivityIndicator, Button, LogBox, ScrollView, StyleSheet, Text } from 'react-native';
import TransportRegister from '../components/TransportRegister';
import Occurrence from '../components/Occurrence';

export default function OccurrenceRegister() {
  const [currentStep, setCurrentStep] = useState(1)
  const [nextVisible, setNextVisible] = useState(false)

  const [loading, setLoading] = useState(false)

  const sumStep = () => {
    if (currentStep >= 1) {
      setNextVisible(true);
      setCurrentStep(currentStep + 1)
    }
  }

  const subStep = () => {
    if (currentStep === 1) {
      console.log(currentStep);
      setNextVisible(false)
      return;
    }
    setCurrentStep(currentStep - 1)
  }


  return (
    <ScrollView style={styles.container}>
      {currentStep == 1 && (<TransportRegister />)}
      {currentStep == 2 && (<Occurrence />)}
      <Button title="Próximo" onPress={sumStep} />
      {nextVisible && (<Button title="Anterior" onPress={subStep} />)}
      <Text>{currentStep}</Text>
      <ActivityIndicator animating={loading} size={50} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center'
  }
})