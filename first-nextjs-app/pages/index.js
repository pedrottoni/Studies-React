import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link href="./about">About</Link>
        <Link href="./portfolio">Portfolio</Link>
        <Link href="./portfolio/logos">Portfolio Logos</Link>
        <Link href="./clients">Clients</Link>
        <Link href="./clients/pedro">Clients Pedro</Link>
        <Link href="./clients/pedro/project1">Clients Pedro Projeto1</Link>
        <Link href="./clients/pedro/project2">Clients Pedro Projeto2</Link>
        <Link href="./blog/2021/nexjs/post">blog</Link>
      </nav>
    </div>
  );
}

export default HomePage;
