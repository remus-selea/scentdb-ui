import "./Perfume.scss"
import { Link } from "react-router-dom";

function PerfumeCard(props) {
    const { perfume } = props;

    return (
        <div className="grid-item">

            <Link className="thumbnail-link"
                to={{
                    pathname: "/perfumes/" + perfume.perfumeId,
                    state: { perfumeId: perfume.perfumeId }
                }}
            >
                <img className="product-image" src={perfume.images[0]?.imagePath} alt="perfume" />
            </Link>

            <div className="product-info">
                <Link className="product-link"
                    to={{
                        pathname: "/perfumes/" + perfume.perfumeId,
                        state: { perfumeId: perfume.perfumeId }
                    }}
                >
                    <div className="product-name">{perfume.title}</div>
                    <div className="product-brand">{perfume.brand}</div>

                </Link>
            </div>
        </div>
    );
}

export default PerfumeCard;
