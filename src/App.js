import './App.css';
import Comments from './comments/Comments'

const App = () => {
  return (
    <div>
     <h1>
      Hello Codeclan!
     </h1>
     <Comments currentUserId="1"/>
    </div>
  );
}

export default App;
