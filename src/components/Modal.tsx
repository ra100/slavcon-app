import React from 'react'
import {Button} from './Button'
type Props = {message: string; otherMessage?: string}
type State = {hidden: boolean}

// @TODO next fetch some data

export class Modal extends React.Component<Props, State> {
  state = {hidden: false}
  static defaultProps = {otherMessage: 'I should be worthy'}

  public render() {
    return (
      <div>
        {this.state.hidden ? this.props.otherMessage : this.props.message}
        <Button onClick={this.handleButtonClick}>
          {this.state.hidden ? 'Make me worthy' : 'Welcome'}
        </Button>
      </div>
    )
  }

  private handleButtonClick = () => {
    console.log('Tooogle')
    const currentState = this.state.hidden
    this.setState({hidden: !currentState})
  }
}
