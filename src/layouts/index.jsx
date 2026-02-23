import { Outlet } from "react-router-dom";

export function Layouts() {
    return (
        <div>
            <Outlet />
            <footer>
                <section>
                    <h2>LOGTV</h2>
                    <div className="socias-link">
                        <p>
                            <a href="https://www.linkedin.com/in/raphael-moura-dev/" target="_blank">
                            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" alt="linkedin-logo" />
                            </a>
                        </p>
                        <p>
                            <a href="https://github.com/raphaeldemouradev" target="_blank">
                            <img src="https://cdn-icons-png.flaticon.com/256/25/25231.png" alt="Github-logo" />
                            </a>
                        </p>
                    </div>
                    <div className="imdb-area">
                        <p>
                            <a href="https://www.imdb.com" target="_blank">Powered by:<img src="https://icons.veryicon.com/png/Internet%20%26%20Web/Socialmedia/IMDb.png" alt="imdb-logo"/></a>
                        </p>
                    </div>
                </section>

                <p className="copy">© 2026 <a href="https://github.com/raphaeldemouradev">Raphael.Dev</a> - Todos os direitos reservados.</p>
            </footer>
        </div>
    )
}