import { AbTag } from "ds-alurabooks";
import Banner from "../../componentes/Banner";
import style from "./style.module.css";

const MyAccount = () => {
    return (
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
                    
                </div>
            </div>
        </section>
    )
}

export default MyAccount;