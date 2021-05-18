import { useRouter } from "next/router";

function ClientProjectPage() {
  const router = useRouter();
  const cliente = [router.query];

  console.log(cliente);

  function loadClientProject() {
    //router.push("/clients/pedro/project20");
    router.replace("/clients/pedro/project20");
  }

  return (
    <div>
      <h1>Client Project Page</h1>
      {cliente.map((clientName) => (
        <h2>{clientName.client}</h2>
      ))}
      <button onClick={loadClientProject}>Projeto20</button>
    </div>
  );
}

export default ClientProjectPage;
