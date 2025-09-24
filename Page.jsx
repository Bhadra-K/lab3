function Page() {
  return (
    <div className="page">
      <header className="header">
        <h1>Hello There!</h1>
      </header>

      <main className="content">
        <p>Here is a beautiful scenery for you:</p>
        <img
          src="https://tse1.mm.bing.net/th/id/OIP.tEhtRPpfYEPNKx9jE8W4RQHaER?w=2580&h=1490&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Sample"
          style={{ marginTop: "20px", maxWidth: "100%" }}
        />
      </main>

      <footer className="footer">
        <p>&copy; 2025 My App</p>
      </footer>
    </div>
  );
}

export default Page;
