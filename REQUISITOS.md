# Documento de Requisitos – Sistema de Estudo para Alunos

## 1. Visão Geral
Sistema web para auxiliar estudantes a se prepararem para provas escolares, permitindo a geração de flashcards e testes personalizados com correção automática e explicações, utilizando IA (Gemini 2.5 Pro). O sistema suporta os idiomas português e inglês.

---

## 2. Funcionalidades Principais

### 2.1. Tela Inicial
- Formulário com:
  - **Seleção de tema:** Matemática, Física, Química, Biologia, História, Geografia.
  - **Campo aberto para tópico específico.**
  - **Botões:** “Gerar Flashcards” e “Gerar Teste”.

### 2.2. Flashcards
- Geração de 10 a 20 flashcards (pergunta e resposta) via IA.
- Navegação entre flashcards.
- Interface adaptada ao idioma selecionado.
- Link (discreto) para gerar teste com base no mesmo tema e tópico selecionado.

### 2.3. Testes
- Geração de 10 questões de múltipla escolha via IA (apenas uma alternativa correta por questão).
- Revisão das respostas antes do envio.
- Correção automática ao final, mostrando:
  - Acertos e erros.
  - Explicação gerada por IA para cada resposta.
- Interface adaptada ao idioma selecionado.

### 2.4. Política de Privacidade
- Exibição de política de privacidade conforme LGPD, informando uso do e-mail e dados de uso apenas para fins de histórico e estatísticas.

---

## 3. Requisitos Não Funcionais

- **Plataforma:** Web (responsivo para desktop e mobile).
- **Idiomas:** Interface e conteúdo em português (padrão) e inglês.
- **Privacidade:** Conformidade com LGPD.
- **Acessibilidade:** Interface compatível com leitores de tela e contraste adequado.
- **Tecnologia sugerida:** React/Next.js para frontend, Node.js/Express para backend (pode ser ajustado conforme preferência).

---

## 4. Restrições

- Não há limite de uso por estudante.
- Não é necessário envio de resultados por e-mail.
- Não é possível editar/apagar histórico.
- Apenas administrador tem acesso ao painel de controle.

---

## 5. Integrações

- Integração com API Gemini 2.5 Pro para geração de conteúdo (flashcards, testes, explicações).

---

## 6. Fluxo Básico do Usuário

1. Usuário acessa a tela inicial, escolhe tema, digita tópico.
2. Seleciona se deseja flashcards ou teste.
3. Recebe o conteúdo gerado e pode navegar/revisar.
4. No topo de todas as telas do sistema, deve haver uma opção de mudar a lingua. A opção padrão deve ser Português do Brasil. Mas o usuário pode escolher entre inglês e português do Brasil. 