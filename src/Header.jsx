function Header(){
    return(
        <header>
            <nav>
                <ul>
                    <li><a href="#">Learn</a></li>
                    <li><a href="#">Reference</a></li>
                    <li><a href="#">Community</a></li>
                </ul>
            </nav>
            <div>
                <img src="./src/assets/React-Logo.png" alt="" />
                <h1>React App</h1>
                <p>The library for web and native user interfaces</p>
                <div className="buttons">
                    <button>Learn React</button>
                    <button>API Reference</button>
                </div>
            </div>
            
            
            
        </header>
    )
}

export default Header