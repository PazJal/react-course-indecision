const details = 'Here are the details.';

class VisibilityToggle extends React.Component{
  constructor(props){
    super(props);
    this.onToggleDetails = this.onToggleDetails.bind(this);
    this.state = {
      isVisible: true
    }
  }
  onToggleDetails() {
    this.setState((prevState) => {
      return {
        isVisible: !prevState.isVisible
      }
    });
  }
  
  render(){
    return (
      <div>
        <h1>Visbility Toggle</h1>
        <button onClick={this.onToggleDetails}>{this.state.isVisible ? 'Hide Details' : 'Show Details'}</button>
        {this.state.isVisible && (<p>{details}</p>)}
      </div>
    );
  }
}
const appRoot = document.getElementById('app');
ReactDOM.render(<VisibilityToggle />, appRoot); 