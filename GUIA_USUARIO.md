# Guia do Usuário — Distribuição Eletrônica

App educativo de prática de distribuição eletrônica para tablet/celular.
Versão web (HTML único). Toque, arraste e aprenda.

---

## 1. Visão geral

O app guia o aluno por **10 exercícios** consecutivos, sorteados entre os
elementos químicos do Hidrogênio (Z = 1) ao Rubídio (Z = 37). Em cada
exercício, o aluno completa 4 fases na ordem:

1. **Distribuição eletrônica** — arrastar os subníveis na ordem de Pauling.
2. **Subnível mais energético** — apontar o último subnível.
3. **Distribuição por níveis** (K, L, M…) — somar elétrons por camada.
4. **Camada de valência** — somar os elétrons da última camada.

Ao final dos 10 exercícios, o app calcula uma **nota de 0 a 10** com base
em acertos, erros e dicas usadas.

---

## 2. Primeiro acesso

1. Abra o `index.html` no navegador (preferencialmente em tablet/celular,
   modo retrato ou paisagem com tela suficiente).
2. Tela de capa: toque em **Começar**.
3. Digite o **nome completo** do aluno e toque em **Vamos lá!**.
   - O nome aparece no card final de pontuação.
4. O **tutorial** roda automaticamente na primeira vez.
   - Se quiser pular, segure (1 s) o botão **Pular tutorial** no canto.
5. Após o tutorial (ou pular), aparece a mensagem **"Escolha um elemento"**
   apontando para a régua de elementos.

> O tutorial só roda automaticamente na primeira vez. Para revê-lo,
> segure (1 s) o botão **Tutorial** no canto da tela.

---

## 3. Tela principal

```
┌──────────────────────────────────────────────────────┐
│  Régua de elementos (37 elementos — arraste lateral) │
├────────────────────────┬─────────────────────────────┤
│ Distribuição Eletrônica│  Diagrama de Pauling        │
│                        │                             │
│  [chips arrastáveis    │   ┌─────────┐               │
│   pros slots]          │   │ 1s 2s   │  (cards dos   │
│                        │   │ 2p 3s   │   subníveis   │
│  [pergunta da fase]    │   │  ...    │   c/ setas    │
│                        │   └─────────┘    Pauling)   │
└────────────────────────┴─────────────────────────────┘
                                          [💡 Dica]
                                          [Tutorial]
```

### 3.1 Régua de elementos (topo)

- 37 cards, do **H** (Z = 1) ao **Rb** (Z = 37).
- **Arraste** lateralmente para navegar.
- Cards **acinzentados com 🔒** = bloqueados.
- No início, só ficam disponíveis **B (Z = 5)**, **C (Z = 6)** e **N (Z = 7)**.
- **Concluir o primeiro exercício libera todos os outros 37 elementos.**
- Tocar num elemento já praticado mostra "Você já praticou esse elemento!".
- Não é possível trocar de elemento no meio de um exercício
  (exceto antes de colocar o primeiro chip).

### 3.2 Painel esquerdo — Distribuição Eletrônica

- Mostra o símbolo do elemento e os **slots vazios** a serem preenchidos.
- A pergunta de cada fase aparece logo abaixo.
- Contador "Exercício X de 10" no canto.

### 3.3 Painel direito — Diagrama de Pauling

- Grade dos subníveis (1s, 2s, 2p, …, 7p) com **setas diagonais**
  amarelas indicando a ordem.
- Em cada célula há um **chip arrastável** com o nome do subnível.
- O chip do **último subnível** do exercício mostra só o nome (sem
  número de elétrons), porque a quantidade vai ser perguntada.

---

## 4. Fase 1 — Distribuição (arrastar chips)

**Objetivo:** preencher os slots em **ordem crescente de energia**.

1. Observe as setas amarelas no Diagrama de Pauling.
2. Arraste o chip **1s** (ou o primeiro subnível da seta) para o primeiro slot.
3. Continue na ordem das setas até preencher todos os slots.
4. Quando todos os slots estiverem preenchidos, abre o **picker** do
   último subnível.

### Picker de elétrons (último subnível)

- Aparece automaticamente após preencher todos os slots.
- Role a roda numérica ou toque diretamente no número desejado.
- **Qualquer valor escolhido é confirmado** — o picker fecha e o
  exercício segue para a verificação.
- Se o valor estiver errado, a checagem da distribuição vai detectar e
  contabilizar como **erro de distribuição** (não como erro do picker).
- Não fica travado: você nunca fica preso no picker.

### Acertou

- Slots ficam **verdes**, sons de acerto, confetes.
- Avança automaticamente para a Fase 2.

### Errou

- Slots ficam **vermelhos**, som de erro.
- Chips errados voltam para o Diagrama de Pauling.
- **+1 erro de distribuição** registrado.
- Aparece o botão **💡 Dica**.

---

## 5. Fase 2 — Subnível mais energético

**Objetivo:** **tocar** no chip que representa o subnível mais energético.

- Como a distribuição está em ordem crescente de energia, o **último chip**
  da fila é sempre o mais energético.
- Toque nele uma única vez.

### Acertou

- Slot fica verde, confetes, avança para a Fase 3.

### Errou

- Slot fica vermelho, **+1 erro**, botão Dica aparece.
- Pode tentar de novo.

---

## 6. Fase 3 — Distribuição por níveis (K, L, M…)

**Objetivo:** somar os elétrons de cada camada eletrônica.

1. Aparecem caixinhas para cada nível existente no átomo:
   - **K** (1º), **L** (2º), **M** (3º), **N** (4º), **O** (5º), **P** (6º), **Q** (7º).
2. Toque na caixa de uma camada → abre o teclado numérico.
3. Digite o total de elétrons daquela camada e toque **OK**.
4. Repita para todas as camadas, em qualquer ordem.

### Acertou uma camada

- Caixa fica verde, fica travada.

### Acertou todas

- Confetes, avança para a Fase 4.

### Errou

- Caixa pisca vermelha e volta a "?".
- **+1 erro** registrado, botão Dica aparece.

---

## 7. Fase 4 — Camada de valência

**Objetivo:** digitar a quantidade de elétrons da **última camada**.

1. Toque na caixa "?" ao lado da pergunta.
2. Digite o total e toque **OK**.

### Acertou

- Confete e som de "Parabéns!".
- **Exercício concluído** — o contador "X de 10" avança.
- Se ainda não tiver concluído 10, volta à régua para escolher o próximo.
- Quando concluir o **10º exercício**, abre o **Card de Pontuação Final**.

### Errou

- Caixa pisca vermelha. **+1 erro**, botão Dica aparece.

---

## 8. Botão Dica 💡

- Aparece **só depois de um erro** na fase atual.
- Aparece no canto da tela, perto do Diagrama de Pauling.
- Toque uma vez: mostra a mensagem contextual e (em algumas fases)
  destaca visualmente os elementos relevantes.
- Toque de novo: oculta a mensagem.
- **Conta 1 dica** por exercício (independente de quantas vezes você
  toque dentro do mesmo exercício).

### Dicas por fase

| Fase | Dica |
|---|---|
| Distribuição | Siga as setas amarelas do diagrama, cegamente. |
| Mais energético | O último subnível da fila é sempre o mais energético. |
| Distribuição por níveis | Cores marcam camadas; some elétrons de cada cor. |
| Valência | Some os elétrons da última camada (destacada em amarelo). |

---

## 9. Tutorial

### Auto-play

Roda automaticamente na primeira vez que o app é aberto, logo após
preencher o nome.

### Reabrir o tutorial

- Segure (1 s) o botão **Tutorial** no canto da tela.
- Anel azul circular preenche durante a contagem.
- Soltar antes de completar cancela.

### Pular o tutorial

- Segure (1 s) o botão **Pular tutorial** no canto.
- Funciona durante o tutorial.

### Retomada de exercício

Se você **estava no meio de um exercício** e abriu o Tutorial (segure
no botão Tutorial), ao concluir ou pular, o app **reabre automaticamente
o mesmo elemento** e o exercício recomeça do início da fase de distribuição.

### Navegação dentro do tutorial

- **← Anterior** / **Próximo →**: navegar entre passos.
- Em passos com áudio, o **Próximo** só fica visível quando o áudio
  termina ou pode ser adiantado com o botão "Próximo" que flutua.
- Em passos interativos (arrastar chips), não há botões — você precisa
  realizar a ação esperada.

---

## 10. Sistema de pontuação

### Pontos ganhos por exercício correto

| Fase | Pontos |
|---|---|
| Distribuição correta | **+10** |
| Mais energético correto | **+5** |
| Distribuição por níveis correta | **+10** |
| Valência correta | **+7** |

### Penalidades

- **Cada erro:** −2 pontos (somando todos os erros das 4 fases).
- **Cada dica usada:** −1 ponto.

### Nota final

Os pontos brutos são normalizados sobre o máximo possível (320) e
mostrados como nota de **0,0 a 10,0**.

### Card final (após 10 exercícios)

Abre automaticamente com:

- Nome do aluno;
- Nota grande de 0 a 10;
- Detalhamento: acertos por fase, erros por categoria, dicas usadas;
- Mensagem motivacional (variando conforme a nota: ≥ 8 / 5–8 / < 5);
- Botão **Jogar de novo** — reseta tudo e reinicia (todos os 37
  elementos ficam disponíveis desde o começo no replay).

---

## 11. Sons, vibração e confete

- **Acerto:** som de "Parabéns" ou "Certo", confete colorido,
  vibração curta dupla.
- **Erro:** som "não", vibração de erro.
- **Toque em botão:** vibração curtinha.
- Em dispositivos sem vibração ou áudio bloqueado, o app funciona
  normalmente (apenas perde feedback tátil/sonoro).

---

## 12. Gestos e atalhos

| Gesto | Ação |
|---|---|
| **Toque** num elemento da régua | Inicia o exercício daquele Z |
| **Arrastar** lateralmente a régua | Navegar entre os 37 elementos |
| **Arrastar** um chip do Pauling | Soltar num slot da distribuição |
| **Arrastar** um chip já no slot | Trocar de slot ou voltar ao Pauling |
| **Toque** num slot (fase energético) | Marcar como o mais energético |
| **Toque** numa caixa de camada/valência | Abrir teclado numérico |
| **Rolagem** na roda do picker | Mudar o nº de elétrons sugerido |
| **Toque** num número da roda | Confirmar diretamente aquele valor |
| **Segurar 1 s** "Tutorial" | Reiniciar tutorial |
| **Segurar 1 s** "Pular tutorial" | Encerrar tutorial |

---

## 13. Mensagens da régua

- **"Escolha um elemento"** — após o tutorial, indica que é hora de começar.
- **"Conclua o exercício atual primeiro!"** — toque num outro elemento
  no meio do exercício. Termine antes de trocar.
- **"Você já praticou esse elemento!"** — não dá pra repetir o mesmo Z
  dentro dos mesmos 10 exercícios.

---

## 14. Casos especiais

### Picker errado

O picker do último subnível **não trava mais o aluno**: qualquer número
escolhido é aceito imediatamente. Se estiver errado, a verificação da
distribuição entra em ação, marca os slots de vermelho, retorna os chips
errados ao Pauling e contabiliza um erro de distribuição. O aluno
recomeça a arrastar.

### Sair pro tutorial no meio

Conforme descrito na seção 9, segurar **Tutorial** durante um exercício
salva o elemento atual. Ao concluir ou pular o tutorial, o aluno volta
para o mesmo elemento (recomeçando a fase de distribuição do zero).

### Reset total

O botão **Jogar de novo** no card final reinicia toda a pontuação,
desbloqueia os 37 elementos e volta à régua. Não roda o tutorial de novo
(ele continua marcado como "já visto").

---

## 15. Solução de problemas

| Problema | O que tentar |
|---|---|
| Tutorial volta a aparecer toda vez | Limpe o cache/localStorage do navegador, ou: segure o botão **Tutorial** uma vez para forçar o reset interno. |
| Sem áudio | Verifique se o navegador permite reprodução automática. Toque em qualquer botão antes para autorizar. |
| Sem vibração | Nem todo navegador/dispositivo suporta `navigator.vibrate`. Não afeta a aprendizagem. |
| Régua não rola | Use arrasto lateral com **um dedo só**. Pinch/zoom estão desabilitados. |
| Texto fora do balão no tutorial | Gire o dispositivo. O tutorial assume largura mínima. |
| App não cabe na tela | O app é otimizado para tablet/celular. Em monitor pequeno, redimensione a janela. |

---

## 16. Para o professor

### Distribuição

O app é **um único arquivo HTML autônomo** (`index.html`) mais uma
pasta `audio/` com os arquivos de áudio do tutorial. Para distribuir:

1. Copie a pasta `cell/` inteira (com `index.html` e `audio/`).
2. Abra `index.html` no navegador. Não precisa de servidor.
3. Pode hospedar num site, num drive compartilhado, ou rodar offline.

### O que avaliar

A nota final (0 a 10) considera, ponderadamente:

- **Acertos** por fase (peso da distribuição e dos níveis é maior).
- **Erros** (cada um desconta 2 pontos).
- **Dicas usadas** (cada uma desconta 1 ponto, no máximo uma por
  exercício).

O card final aparece com o nome do aluno digitado no início. Sugestão:
peça que o aluno fotografe ou faça screenshot do card e envie como prova
da prática.

### Limitações

- Apenas elementos do **H ao Rb** (Z 1 a 37).
- Distribuição segue **estritamente** a ordem de Pauling — exceções
  (Cr, Cu, Mo, Ag…) **não são reconhecidas**. O app usa a distribuição
  ideal de Pauling, e é isso que deve ser cobrado do aluno.
- Sem persistência entre sessões: fechou o navegador, perdeu o progresso
  (exceto o status "tutorial já visto", que fica em `localStorage`).

---

## 17. Créditos

App desenvolvido por **Prof. Amauri Junior**.
Plataforma: HTML/CSS/JavaScript puros, sem dependências externas.
