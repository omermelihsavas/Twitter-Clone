import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function RightbarSection({ title, children, more }) {
    return (
        <section className="bg-[#16181c] mb-4 rounded-2xl">
            <h5 className="py-3 px-4 text-xl font-extrabold leading-6 flex items-center text-[#e7e9ea]">
                {title}
            </h5>
            <div className="grid">
                {children}

                {more && (
                    <Link 
                        to={more} 
                        className="h-[52px] flex items-center px-4 text-[15px] text-[#1d9bf0] hover:bg-white/[0.03] transition-colors"
                    >
                        Daha fazla göster
                    </Link>
                )}
            </div>
        </section>
    )
}

RightbarSection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    more: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
}

RightbarSection.defaultProps = {
    more: false
}
