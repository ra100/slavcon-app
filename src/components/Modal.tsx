import React from 'react'
import {Button} from './Button'
import {Error} from './Error'
type Data = {file: string}
type Props = {message: string; otherMessage?: string}
type State = {
  hiddenCat: boolean
  catImage?: string
  loadingCat: boolean
  errorMessage?: string
}

// https://slavcon.sk/export/2019/program.json
// https://aws.random.cat/meow

export class Modal extends React.Component<Props, State> {
  state = {hiddenCat: false, catImage: undefined, loadingCat: false, errorMessage: undefined}
  static defaultProps = {otherMessage: 'I should be worthy'}

  public render() {
    return (
      <div>
        {this.state.hiddenCat ? this.props.otherMessage : this.props.message}
        <Button onClick={this.handleButtonClick}>
          {this.state.hiddenCat ? 'Show cat' : 'Hide cat'}
        </Button>
          <div>
            {this.state.loadingCat && 'Loading'}
            <Error errorMessage={this.state.errorMessage} />
            {this.state.catImage && (
              <img src={this.state.catImage} alt="I am a kitty cat" />
            )}
          </div>
      </div>
    )
  }

  public componentDidMount(){
    this.fetchCat()
  }

  private fetchCat = async () => {
    try {
      this.setState({loadingCat: true, errorMessage: undefined})
      const response = await fetch('https://aws.random.cat/meow')
      const data: Data = await response.json()
      this.setState({catImage: data.file, loadingCat: false})
    } catch (err) {
      console.error(err)
      this.setState({loadingCat: false, errorMessage: err.message})
    }
  }

  private handleButtonClick = () => {
    console.log('Tooogle')
    const currentState = this.state.hiddenCat
    const nextState: Partial<State> = {}
    // @TODO: write tests
    // @TODO: reset state into separate function
    // @TODO: lifecycle load
    if (currentState) {
      this.fetchCat()
    } else {
      nextState.catImage = undefined
    }
    nextState.hiddenCat = !currentState
    this.setState(nextState as State)
  }
}
