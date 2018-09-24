import * as React from 'react'
import { Button, Card, Title, Paragraph } from 'react-native-paper'

const Student = props => (
  <Card>
    <Card.Content>
      <Title>
        {props.firstName} {props.lastName}
      </Title>
      <Image
        style={{ width: 50, height: 50 }}
        source={{ uri: props.imageUrl }}
      />
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
)

export default Student
