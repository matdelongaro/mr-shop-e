function Section(){
    return(
        <section>
            <h2>Elegí el plan que mejor se adapte a lo que buscas</h2>
            <p>Cada uno de nuestros planes estan pensados en las opciones más buscadas por nuestros clientes.</p>
            <div className="card_container">
                <div className="card">
                    <h3>Plan Base</h3>
                    <p>Ideal para empresas, startups, emprendedores, personas individuales o cualquiera que desee crear un sitio enfocado en una acción especifica.</p>
                    <img src="./src/assets/card-img.jpg" alt="" />
                </div>
                <div className="card">
                    <h3>Plan Express</h3>
                    <p>Tu página web en tan solo 7 días, responsiva y adaptable a cualquier dispositivo.</p>
                    <img src="./src/assets/card-img.jpg" alt="" />
                </div>
                <div className="card">
                    <h3>Plan a medida</h3>
                    <p>Ideal para aquellos que buscan destacarse con un diseño exclusivo y único, estos sitios webs son armados desde cero.</p>
                    <img src="./src/assets/card-img.jpg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Section