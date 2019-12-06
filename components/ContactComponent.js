import React, { Component } from 'react'
import { View, Text} from 'react-native'
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { ScrollView } from 'react-native';


class ContactComponent extends Component {
    render() {
        return (
            <ScrollView>
            <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>

            <Card 
                title="Contact Information">
                <Text>12th stage, 16th Main </Text>
                <Text>1st stage BTM, Bangularu</Text>
                <Text>India</Text>
                <Text>Tel: 7044137924</Text>
                <Text>Fax: +852 8765 4321</Text>
                <Text>Email: souman1729@gmail.com</Text>
            </Card>
            </Animatable.View>
            </ScrollView>
        )
    }
}
export default ContactComponent;