
import  {Form} from './components/Form'

function App() {

  return (
    <>
      <Form formId={new Date().toDateString() } timestamp={Date.now()}/>
    </>
  );
}

export default App;
