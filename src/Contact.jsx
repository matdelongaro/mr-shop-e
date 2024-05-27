function Contact(){
    return(
        <div className="contacto_container">
            <div className="info_contacto">
                <h4>MR Web | Desarrollos digitales </h4>
                <p>Teléfono : +5492616501176</p>
                <p>Dirección: Lorem Ipsum 654</p>
                <p>Mail: contacto@mrweb.store</p>
            </div>
            <div className="form_contacto">
                <h4>Contanos de tu proyecto</h4>
                <form>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="name" name="name" required/>

                    <label htmlFor="email">Correo Electrónico</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="phone"> Telefono</label>
                    <input type="tel" id="phone" name="phone" required/>

                    <label htmlFor="message">Mensaje</label>
                    <textarea name="message" id="message" required></textarea>

                    <button type="submit" className="button">Enviar</button>
                </form>
            </div>
        </div>
    )
}
export default Contact