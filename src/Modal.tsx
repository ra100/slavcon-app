import React from 'react';
type Props = {message: string}
type State = {hidden: boolean}

export class Modal extends React.Component<Props,State>{
  state = {hidden: false}

  public render() {
    return (
    <div>
      {this.props.message}
      <button onClick={this.handleButtonClick}>Hide me</button>
    </div>
    )
  }

  private handleButtonClick = () => {
    console.log("Hiding");
    this.setState({hidden: true});
  }
}




