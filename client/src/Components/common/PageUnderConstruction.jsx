import { useNavigate } from 'react-router-dom';

export function PageUnderConstruction() {
    const navigate = useNavigate();
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="text-center hero-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">
                        Page Under Construction
                    </h1>
                    <p className="mb-5">
                        Coming Soon
                    </p>
                    <button className="btn btn-primary" onClick={() => navigate(-1)}>Go Back</button>
                </div>
            </div>
        </div>
    )
}