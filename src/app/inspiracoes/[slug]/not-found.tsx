import Link from "next/link";

export default function InspirationNotFound() {
  return (
    <main className="inspiration-not-found">
      <div>
        <p className="inspiration-eyebrow">Inspirações</p>
        <h1>Esta inspiração ainda não foi encontrada.</h1>
        <p>O endereço pode ter mudado ou o conteúdo ainda não está disponível.</p>
        <div>
          <Link className="btn btn-gold" href="/inspiracoes">
            Voltar para Inspirações
          </Link>
          <Link className="btn btn-light" href="/">
            Ir para a página inicial
          </Link>
        </div>
      </div>
    </main>
  );
}
