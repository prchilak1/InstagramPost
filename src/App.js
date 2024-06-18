import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='content-wrapper'>
        <div className='image-wrapper'>
          <img
            className='post'
            src={require('./assets/Screenshot1.png')}
            alt='no-image1'
          />
          <div className='next-icon'>
            <img
              style={{ width: '100%', height: '100%' }}
              src={require('./assets/Screenshot6.png')}
              alt='no-image2'
            />
          </div>
        </div>
        <div className='footer'>
          <div className='left'>
            <img
              className='like-icon'
              src={require('./assets/Screenshot2.png')}
              alt='no-image1'
            />
            <img
              className='message-icon'
              src={require('./assets/Screenshot3.png')}
              alt='no-image1'
            />
            <img
              className='share-icon'
              src={require('./assets/Screenshot4.png')}
              alt='no-image1'
            />
          </div>
          <img
            className='save-icon'
            src={require('./assets/Screenshot5.png')}
            alt='no-image1'
          />
        </div>
      </div>
    </div>
  );
}

export default App;
