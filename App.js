import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
            
    <div style={{width:'23%', borderRadius:'5px',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
        <div style={{color:'white',background:'black', padding:'20px 20px', display:"flex", borderRadius:'10px',position:'relative'}}>
            
            <div style={{position:'relative'}}>
                <img style={{width:'40px',height:'40px',borderRadius:'50%'}} src='https://cdn.yellowmessenger.com/ry2fUNNN5jBI1687270385337.png'/>
                <div style={{width:'7px',height:'7px', borderRadius:'50%',background: '#74d374',position: 'absolute',right: '0px',bottom: '9px',border: '1px solid white'}}></div>
            </div>
            <div style={{marginLeft:'10px'}}>
                <div style={{    fontWeight: '700',paddingBottom: '5px'}}>Hi! This is Mia</div>
                <span>How Can I help you today?</span>
            </div>
            <div style={{display:'flex', justifyContent:'end', position:'absolute',right:'20px' }}>x</div>
        </div>
        <div style={{height:'550px',}}>
            <div style={{display:'flex', alignItems:'end',height:'100%',paddingRight:'15px'}}>
                <div style={{padding:'5px',marginBottom:'25px'}}>
                    <img style={{width:'25px',height:'25px',borderRadius:'50%'}} src='https://cdn.yellowmessenger.com/ry2fUNNN5jBI1687270385337.png'/>
                </div>
                <div>
                <div style={{    background: '#DFE3E8',borderRadius: '8px',padding: '10px 15px'}}>
                👋 Welcome, my name is Mia, yellowAI's new generative AI powered bot! 🤖

                  <div style={{margin:'20px 0px'}}>  I'm here to assist you with any questions you have about yellowAI and our products. From understanding our cutting-edge AI technologies to booking a demo, I've got you covered! Just ask away!</div>

                    Let's get started and make your experience with yellowAI a great one! How can I assist you today?
                </div>
                <div style={{padding:'5px 3px',marginBottom: '10px',    color: '#9a9898',fontWeight: '600',fontSize:'11px'}}>Thu 4:20PM</div>
                </div>
            </div>
          
        </div>
        <div style={{borderTop:'1px solid #e7e5e5', padding:'5px',display:'flex',alignItems:'center'}}>
            <div style={{padding:'10px 10px 20px 20px'}}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg></div>
            <div style={{width:'100%',display:'flex', justifyContent:'center',alignItems:'center'}}><input style={{width:'75%', padding:'15px', borderRadius:'40px', border:'1px solid #d6d6d8'}} type='text' placeholder="Type your message"/>
            <div style={{marginLeft:'15px'}}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z"/></svg></div></div>

        </div>
        <div style={{textAlign:'center', paddingBottom:'5px', fontSize:'11px'}}>Powered By</div>
        </div>
        
        </div>
  );
}

export default App;
