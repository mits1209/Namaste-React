

export const Title = () => (
    <a href="/">
      <img
    className='logo'
    alt="logo"
    src="http://lh3.googleusercontent.com/1hrS2w6NmSE1-Skwx-NYMLz52kqPJ4pkBofv9x_8s3xTu0aXPVh90WJflY8G4wzl_scYFjKdVWcaAKur58eaEQQzBks"
    />
    </a>
    );

    const Header = () => {
        return (
           <div className='header'>
             <Title/>
             <div className='nav-items'>
              <ul>
                 <li>Home</li>
                 <li>About</li>
                 <li>Contact</li>
                 <li>cart</li>
              </ul>
             </div>
           </div>
        );
     };


    export default Header;