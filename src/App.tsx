import { useState } from 'react';
export default function App() {
  const [busca, setBusca] = useState('');

  const categorias = [
    { id: 1, titulo: 'Cura Interior', icone: '❤️', descricao: 'Restauração da alma e emoções' },
    { id: 2, titulo: 'Guerra Espiritual', icone: '🛡️', descricao: 'Armadura de Deus e batalha' },
    { id: 3, titulo: 'Dons Espirituais', icone: '🔥', descricao: 'Edificação e serviço ao Reino' },
    { id: 4, titulo: 'Caráter Cristão', icone: '🌱', descricao: 'Fruto do Espírito e maturidade' },
    { id: 5, titulo: 'Intercessão', icone: '🙏', descricao: 'Oração, clamor e posicionamento' },
    { id: 6, titulo: 'Vida Cristã', icone: '📖', descricao: 'Prática diária da palavra' },
  ];

  const estudos = [
    {
      id: 1,
      titulo: 'Perdão e a Raiz de Amargura',
      categoria: 'Cura Interior',
      data: '10/09/2026',
      resumo: 'Uma reflexão profunda sobre como a amargura se instala e a libertação através do perdão voluntário.',
    },
    {
      id: 2,
      titulo: 'A Armadura Completa de Deus',
      categoria: 'Guerra Espiritual',
      data: '05/09/2026',
      resumo: 'Análise detalhada de Efésios 6 e as ferramentas espirituais disponíveis para o crente.',
    },
    {
      id: 3,
      titulo: 'O Fruto do Espírito no Cotidiano',
      categoria: 'Caráter Cristão',
      data: '28/08/2026',
      resumo: 'Como manifestar o caráter de Cristo nos relacionamentos interpessoais do dia a dia.',
    },
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh', margin: 0, padding: 0 }}>
      {/* Cabeçalho Reorganizado e Centralizado */}
      <header style={{ padding: '2.5rem 1rem 1.5rem 1rem', borderBottom: '1px solid #1e293b', textAlign: 'center' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <h1 style={{ 
            margin: '0 0 0.5rem 0', 
            fontSize: '3rem', 
            fontWeight: '800', 
            letterSpacing: '-0.025em',
            background: 'linear-gradient(to right, #38bdf8, #818cf8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block'
          }}>
            Caverna de Adulão
          </h1>
          <div>
            <span style={{ fontSize: '1.1rem', color: '#94a3b8', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Conhecer • Viver • Compartilhar
            </span>
          </div>
        </div>

        {/* Menu de Navegação Centralizado */}
        <nav style={{ display: 'flex', justifyContent: 'center', gap: '2rem', fontSize: '1rem', color: '#cbd5e1' }}>
          <a href="#" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: 'bold' }}>Início</a>
          <a href="#" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Estudos</a>
          <a href="#" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Categorias</a>
          <a href="#" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Áudios</a>
          <a href="#" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Sobre</a>
        </nav>
      </header>

      {/* Hero / Busca */}
      <section style={{ textAlign: 'center', padding: '3.5rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 'bold' }}>Biblioteca do Grupo de Comunhão</h2>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '2rem' }}>
          Encontre estudos bíblicos, ministrações e conteúdos para edificação espiritual.
        </p>
        <input
          type="text"
          placeholder="🔎 Pesquise por assunto, palavra ou versículo..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          style={{
            width: '100%',
            padding: '1rem 1.5rem',
            borderRadius: '9999px',
            border: '1px solid #334155',
            backgroundColor: '#1e293b',
            color: '#ffffff',
            fontSize: '1rem',
            outline: 'none',
            boxSizing: 'border-box'
          }}
        />
      </section>

      {/* Categorias */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1rem 3rem 1rem' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#f1f5f9' }}>Categorias Principais</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {categorias.map((cat) => (
            <div
              key={cat.id}
              style={{
                backgroundColor: '#1e293b',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid #334155',
                cursor: 'pointer'
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{cat.icone}</div>
              <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem', color: '#f8fafc' }}>{cat.titulo}</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#94a3b8' }}>{cat.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Estudos Recentes */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1rem 4rem 1rem' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#f1f5f9' }}>Estudos Recentes</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {estudos.map((estudo) => (
            <div
              key={estudo.id}
              style={{
                backgroundColor: '#1e293b',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid #334155',
                display: 'flex',
                flexDirection: 'column',
               justifyContent: 'space-between'
              }}
            >
              <div>
                <span style={{ fontSize: '0.8rem', color: '#38bdf8', fontWeight: 'bold' }}>{estudo.categoria}</span>
                <h4 style={{ margin: '0.5rem 0', fontSize: '1.25rem', color: '#f8fafc' }}>{estudo.titulo}</h4>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.4' }}>{estudo.resumo}</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #334155' }}>
                <span style={{ fontSize: '0.8rem', color: '#64748b' }}>{estudo.data}</span>
                <span style={{ fontSize: '0.9rem', color: '#38bdf8', fontWeight: 'bold', cursor: 'pointer' }}>Ler estudo →</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}