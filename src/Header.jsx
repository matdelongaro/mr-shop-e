function Header(){
    return(
        <header>
            <nav>
                <a href="" className="logo">MR WEB</a>
                <ul>
                    <li><a href="#">Páginas Webs</a></li>
                    <li><a href="#">Servicios de Email</a></li>
                    <li><a href="#">Contacto</a></li>    
                    <li><a href="#" className="carrito">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"  class="bi   bi-cart"      viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                    </svg>
                </a> </li>          
                </ul>
                
                <div className="menu-responsive">
                    <div class="burger">
                        <div class="line1"></div>
                        <div class="line2"></div>
                        <div class="line3"></div>
                    </div>
                </div>
                
            </nav>
            <div className="header-info">

                <h1>LANZA TU NUEVO SITIO WEB</h1>
                <p>Llega a más personas con un sitio web a medida y aumenta tu presencia digital.</p>
                <div className="buttons">
                    <button>Cotizar Sitio Web</button>
                    <button>Trabajemos juntos</button>
                </div>
            </div>
            
            
            
        </header>
    )
}

export default Header