import { useState } from 'react';
import './style.scss';
export const Form = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNome(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleMensagemChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMensagem(e.target.value);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      name: nome,
      email: email,
      message: mensagem,
    };
    try {
      const response = await fetch('https://formspree.io/f/xpwavpbz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setError(null);
        setIsSubmitted(true);
        setError(null);
        setNome('');
        setEmail('');
        setMensagem('');
      } else {
        throw new Error('Algo deu errado. Tente novamente mais tarde.');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          name="name"
          value={nome}
          onChange={handleNomeChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </label>
      <label>
        Mensagem:
        <textarea
          name="message"
          value={mensagem}
          onChange={handleMensagemChange}
          required
        />
      </label>
      <button type="submit">Enviar</button>

      {isSubmitted && <p>Formulário enviado com sucesso!</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};
