import { useRouter } from "next/router";
import Link from "next/link";

function ClientsPage() {
  const clients = [
    { name: "Pedro", lastName: "Ottoni" },
    { name: "Josi", lastName: "Andrade" },
  ];

  const link = "/clients/";

  return (
    <div>
      <h1>Clients Page</h1>
      <nav>
        {clients.map((client) => (
          <Link href={`/clients/${client.name}`}>{client.name}</Link>
        ))}
        {clients.map((client) => (
          <Link href={"link" + client.name[0]}>{client.name[0]}</Link>
        ))}
        {clients.map((clientName) => (
          <Link href={"/clients/" + clientName.name}>{clientName.name}</Link>
        ))}
      </nav>
      <nav>
        {clients.map((client) => (
          <Link
            href={{
              pathname: "/clients/[client]",
              query: {client: client.name}
            }}
          >
            {client.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default ClientsPage;
