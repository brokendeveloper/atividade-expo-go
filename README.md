# atividade-expo-go

Aplicativo React Native com Expo que simula um painel de controle de elevadores inteligentes com feed de atualizações OTA em tempo real. A interface e os dados são inspirados no **YouTube Studio**, exibindo notificações de uploads, analytics, lives e playlists nos painéis dos elevadores.

---

## Tecnologias

- React Native
- Expo SDK 54
- Expo Router
- TypeScript
- Expo Linear Gradient
- Expo Google Fonts (Inter)
- EAS Build + Expo Updates (OTA)

---

## Funcionalidades

- Feed de notícias com tema YouTube Studio
- Toggle dark/light mode com paleta de cores do YouTube
- Simulação de progresso OTA em tempo real (1/5 → 5/5)
- Indicador de atualização em andamento no header
- Animação de fade ao trocar status OTA
- Fonte Inter em todo o aplicativo

---

## Como rodar localmente

**Pré-requisitos:** Node.js instalado e o app **Expo Go** no celular.

```bash
# 1. Clone o repositório
git clone https://github.com/<seu-usuario>/atividade-expo-go.git
cd atividade-expo-go

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npx expo start
```

Com o servidor rodando, escaneie o **QR Code** exibido no terminal usando o app **Expo Go** (disponível na App Store e Play Store).

> O app é compatível com **Expo Go SDK 54**. Certifique-se de que seu Expo Go está atualizado.

---

## Build com EAS

```bash
# Instalar a CLI do EAS
npm install -g eas-cli

# Login na conta Expo
eas login

# Gerar build preview (APK para Android)
eas build --platform android --profile preview
```

## Deploy OTA (sem rebuild)

```bash
eas update --branch dev --message "fix: corrige bug visual do card"
```

---

## Estrutura de Pastas

```
atividade-expo-go/
├── app/
│   ├── _layout.tsx       # Root layout com carregamento de fontes
│   └── index.tsx         # Entry point
├── src/
│   ├── components/
│   │   ├── Header/       # Header com ícone YouTube e toggle de tema
│   │   ├── NewsCard/     # Card individual de notícia
│   │   ├── NewsList/     # Lista scrollável de cards
│   │   └── OTAProgressBar/  # Barra de progresso OTA animada
│   ├── screens/
│   │   └── HomeScreen.tsx
│   ├── hooks/
│   │   ├── useTheme.ts        # Toggle dark/light
│   │   └── useOTAProgress.ts  # Simulação de progresso OTA
│   ├── services/
│   │   └── otaService.ts
│   ├── constants/
│   │   ├── theme.ts      # Paleta YouTube dark/light
│   │   └── newsData.ts   # Mock data
│   ├── types/
│   │   └── news.ts
│   └── utils/
│       └── formatTime.ts
├── assets/
├── app.json
├── eas.json
└── package.json
```

---

## Branches

- `main` — produção estável
- `dev` — desenvolvimento ativo

## Padrão de Commits

```
feat:     nova funcionalidade
fix:      correção de bug
style:    mudanças visuais / formatação
refactor: refatoração de código
chore:    configuração e dependências
docs:     documentação
test:     testes
```

---

**Matéria:** Desenvolvimento Mobile
**Turma:** ADS Embarque
**Aluno:** Luccas Fernandes
