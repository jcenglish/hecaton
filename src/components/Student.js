import * as React from 'react'
import axios from 'axios'
import { Card, Title, IconButton } from 'react-native-paper'
import FAIcon from 'react-native-vector-icons/FontAwesome5'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const Student = props => (
  <Card>
    <Card.Content>
      <Title>
        {props.firstName} {props.lastName}
      </Title>
    </Card.Content>
    <Card.Cover
      source={{ uri: 'https://www.viawater.nl/files/default-user.png' }}
      style={{ width: 100, height: 100 }}
    />
    <Card.Actions>
      <IconButton
        icon={() => (
          <MCIcon
            name="emoticon-sad"
            size={32}
            onPress={() =>
              sendSms(
                'Your child has been referred to the Dean of Culture.',
                '9546656852'
              )
            }
          />
        )}
      />
    </Card.Actions>
  </Card>
)

const sendSms = async (message, phoneNumber) => {
  const sms = {
    message,
    phoneNumber
  }
  try {
    await axios.post('http://172.16.22.177:8080/sendSms', sms)
  } catch (err) {
    console.log(err)
  }
}

export default Student
