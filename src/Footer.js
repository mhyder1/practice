function Footer({userName, age, setName}) {
    return (
    <>
      <h1 style={{marginTop: '30vh'}}>Footer</h1>
      <p>{userName} {age}</p>
      <br />
      <button onClick={() => setName(userName === 'Jeff' ? "Jan": 'Jeff')}>Click me</button>
    </>
    );
  }
  
  export default Footer;