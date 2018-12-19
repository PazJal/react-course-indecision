console.log('App.js is running');

const appObject = {
  title: 'Indecision App',
  subtitle:'this is a subtitle',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if(option){
    appObject.options.push(option);
    e.target.elements.option.value ='';
    render();
  }

};

const onRemoveAll = () => {
  appObject.options = [];
  render();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * appObject.options.length);
  const option = appObject.options[randomNum];
  alert(option);
  console.log(randomNum);
};

const appRoot = document.getElementById('app');

const numbers = [55,101,1000];

const render = () => {
  const template = (
    <div>
      <h1>{appObject.title}</h1>
      {(appObject.subtitle) && <p>{appObject.subtitle}</p>}
      <p>{appObject.options.length > 0 ? "Here are your options" : "No options"}</p>
      <button disabled={!appObject.options.length} onClick={onMakeDecision}>What should I do ?</button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {
          appObject.options.map((opt, index) => {
            return (
              <li key={index}>{opt}</li>
            );
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" id=""/>
        <button>Add option</button>
      </form>
    </div>
  );
  ReactDOM.render(template  , appRoot);
};

render();
