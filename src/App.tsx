
import  {Form} from './components/Form'

function App() {

  return (
    <main className='min-h-screen bg-zinc-950'>
      <Form formId={new Date().toDateString() } timestamp={Date.now()}/>
    </main>
       
  );
}

export default App;
