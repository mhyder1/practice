function Header(props) {
// console.log(props)


    return (
    <>
        <h1>Header</h1>
        <ul>
            {
                props.colors.map(color => (
                    <li>{color}</li>
                ))
            }
        </ul>
    </>     
    );
  }
  
  export default Header;