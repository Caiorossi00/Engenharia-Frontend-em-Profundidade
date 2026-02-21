export const metadata = {
  title: "Plano Teórico Avançado – React",
  description: "Estudos aprofundados sobre React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{ fontFamily: "sans-serif", padding: 24 }}>
        <header></header>

        <main>{children}</main>
      </body>
    </html>
  );
}
