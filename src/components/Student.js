import * as React from 'react'
import { Button, Card, Title, Paragraph } from 'react-native-paper'

const Student = () => (
  <Card>
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
)

export default Student
