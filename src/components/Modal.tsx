import React from 'react'
import {Button} from './Button'
type Data = {file: string}
type Props = {message: string; otherMessage?: string}
type State = {
  hidden: boolean
  catImage?: string
}

// https://slavcon.sk/export/2019/program.json
// https://aws.random.cat/meow

export class Modal extends React.Component<Props, State> {
  state = {hidden: false, catImage: undefined}
  static defaultProps = {otherMessage: 'I should be worthy'}

  public render() {
    return (
      <div>
        {this.state.hidden ? this.props.otherMessage : this.props.message}
        <Button onClick={this.handleButtonClick}>
          {this.state.hidden ? 'Show cat' : 'Hide cat'}
        </Button>
        {this.state.catImage && (
          <img src={this.state.catImage} alt="I am a kitty cat" />
        )}
      </div>
    )
  }

  private fetchCat = async () => {
    try {
      const response = await fetch('https://aws.random.cat/meow')
      const data: Data = await response.json()
      this.setState({catImage: data.file})
    } catch (err) {
      console.error(err)
    }
  }

  private handleButtonClick = () => {
    console.log('Tooogle')
    const currentState = this.state.hidden
    const nextState: State = {hidden: !currentState}
    // @TODO ASK NEXT how to setState Partial??
    // @TODO spinner, error handling
    // @TODO lifecycle load
    if (currentState) {
      this.fetchCat()
    } else {
      nextState.catImage = undefined
    }
    this.setState(nextState)
  }
}
