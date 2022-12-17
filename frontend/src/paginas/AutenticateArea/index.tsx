import { Outlet } from "react-router-dom";
import Banner from "../../componentes/Banner";
import BarraNavegacao from "../../componentes/BarraNavegacao";
import Rodape from "../../componentes/Rodape";
import style from "./style.module.css";

const AutenticateArea = () => {
    return (
        <main>
            <BarraNavegacao />
            <section>

                <Banner
                    titulo="Minha conta"
                >
                </Banner>

                <div className={style.MyAccountContainer}>
                    <div className={style.MyAccountOrdered}>
                        <h3>
                            Pedidos
                        </h3>
                        <ul className={style.MyAccountOrderedList}>
                            <li>
                                Trocas
                            </li>
                            <li>
                                Cupons
                            </li>
                            <li>
                                Seus dados
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Outlet />
                    </div>
                </div>
            </section>
            <Rodape />
        </main>
    )
}

export default AutenticateArea;