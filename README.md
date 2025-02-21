## 🚀 Guia de Git - Fluxo de Trabalho

### 📌 Criar uma nova branch
```bash
git checkout -b nome-da-branch
```
> Substitua `nome-da-branch` pelo nome desejado, por exemplo, `feature/nova-funcionalidade`.

---

### 📤 Enviar alterações para o repositório remoto
1. **Adicionar os arquivos ao commit:**
   ```bash
   git add .
   ```
2. **Criar um commit com uma mensagem descritiva:**
   ```bash
   git commit -m "Descrição do que foi feito"
   ```
3. **Enviar a branch para o GitHub:**
   ```bash
   git push origin nome-da-branch
   ```

---

### 🔄 Fazer o merge da branch com a `main`
1. **Mudar para a branch `main`**
   ```bash
   git checkout main
   ```
2. **Atualizar a branch `main`** (caso tenha mudanças no repositório remoto):
   ```bash
   git pull origin main
   ```
3. **Fazer o merge da branch desejada:**
   ```bash
   git merge nome-da-branch
   ```
4. **Enviar a branch `main` atualizada para o GitHub:**
   ```bash
   git push origin main
   ```

---

### 🔀 Mudar de branch
```bash
git checkout nome-da-branch
```
> Para listar todas as branches disponíveis:
```bash
git branch
```

---

### 🗑️ Deletar uma branch
- **Remover uma branch local:**
  ```bash
  git branch -d nome-da-branch
  ```
- **Remover uma branch do GitHub:**
  ```bash
  git push origin --delete nome-da-branch
  ```

Esse guia ajudará a manter um fluxo de trabalho organizado e eficiente com Git! 🚀



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
