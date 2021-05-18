import { useRouter } from "next/router"

function PortfolioProjectPage() {
    const router = useRouter();

    return (
        <div>
            <h1>Portfolio Project Page</h1>
            <p>{router.pathname}</p>
        </div>
    )
}

export default PortfolioProjectPage