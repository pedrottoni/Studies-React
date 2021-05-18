import { useRouter } from "next/router"

function SelectedClientProjectPage() {
    const router = useRouter()
    const client = [router.query]

    console.log(router.pathname);
    console.log(client);

    return (
        <div>
            <h1>Selected Project Client Page</h1>
            {client.map((nome) => (
                <div>
                    <p>{nome.client}</p>
                    <p>{nome.clientproject}</p>
                </div>
            ))}
        </div>
    )
}

export default SelectedClientProjectPage