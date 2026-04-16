import "./style.css"
import aniversarianteImg from "../../assets/aniversariante.png"

function SobreComponent() {
    return (
        <section id="sobre">
            <div className="sobre-content">
                <div className="sobre-photo-wrapper">
                    <img
                        src={aniversarianteImg}
                        alt="Foto da aniversariante"
                        className="sobre-photo"
                    />
                </div>
                <div className="sobre-text">
                    <h2 className="sobre-title">Sobre a Aniversariante</h2>
                    <p className="sobre-description">
                        Uma jovem cheia de luz, alegria e sonhos. Apaixonada pela vida
                        e por tudo que ela tem a oferecer. Este é um momento especial
                        para celebrar essa jornada incrível de 15 anos ao lado de
                        quem mais ama.
                    </p>
                    <p className="sobre-description">
                        Venha fazer parte dessa noite mágica e inesquecível,
                        onde cada sorriso conta e cada abraço aquece o coração. ✨
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SobreComponent
