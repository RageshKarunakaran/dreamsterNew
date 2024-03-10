const Claim = () => {
    return (
       <>
       <div className='dream_main main_bg'>
                <div className='gradient-bg'>
                    <div className='desc'>
                     <h2>Your Holdings <span>1129</span> Tokens</h2>
                    </div>

                    <div className='desc two'>
                        <p>Your Total contribution <br/>
                        <span>560.0000000087</span> <br/>
                        USDT</p>
                    </div>
                    <div className="link">
                        <a href="">Contribution History</a>
                    </div>
                    
                 <div className="soldout">
                    <h2>
                        PRE SALE - <span className="sold">SOLD OUT</span><br/>
                        <span>$19.3 Million Raised</span>
                    </h2>
                 </div>
                    <div className="annonce">
                        <label class="" for="">Join us for latest Announcement</label>
                        <div className='flex icon'>
                            <div>
                                <img src="./telegram.png"/>
                            </div>
                            <div>
                                <img src="./twitter.png"/>
                            </div>
                        </div>
                    </div>
  
                    <div className='a_tag'>
                        <div className='need'>
                            <a href=''>CLAIM TOKENS</a>
                        </div>

                    </div>
                </div>
            </div></>
    );
}

export default Claim;