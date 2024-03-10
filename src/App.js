import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className=''>
        <div className='dream_main main_bg'>
          <div className='gradient-bg'>
            <div className='heading'>
              <h1>Dreamster Presale
                Stage 1</h1>
            </div>
            <div className='desc'>
              <p>1 DREAMSTER = 0.0000000087 USD</p>
              <p>Listing price = 0.0000000087 USD</p>
            </div>
            <div className='range'>
           <div className='range_clr'>
           </div>
           <p className='pos'>40%</p>
            </div>
            <div className='desc two'>
              <p>1 DREAMSTER = <span>0.0000000087 USD</span></p>
              <p>Listing price = <span>0.0000000087 USD</span></p>
            </div>
            <div>
              <ul className='switch'>
                <li className='active'>
                  <p><strong>BNB</strong> (BEP-20)</p>
                </li>
                <li>
                  <p><strong>ETH</strong> (BEP-20)</p>
                </li>
                <li>
                  <p><strong>USDT</strong> (BEP-20)</p>
                </li>
              </ul>
            </div>
            <div>
              <form className='form_style'>
                <label class="" for="">Amount in BNB you pay:</label>
              <input type="text" placeholder="ENTER AMOUNT" name="firstname"/>
              <div className='max'>
                <p>MAX</p>
              </div>
              </form>
            </div>
            <div>
            <label class="" for="">Amount in DREAMSTER you receive:</label>
            <div className='receive_value'>
              <p>0</p>
            </div>
            </div>
            <div>
              <button>CONNECT WALLET</button>
            </div>
            <div className='a_tag'>
            <div className='need'>
<a href=''>Need help ? Click here.</a>
            </div>
            <div className='flex'>
              <a href=''>How to buy</a>
              <a href=''>Win 150k in JBC</a>

            </div>
          </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
