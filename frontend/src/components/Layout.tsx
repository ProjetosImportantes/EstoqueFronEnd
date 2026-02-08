import { Link } from "react-router-dom";
import "./Layout.css";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="app-container">
      <nav className="navbar">
        <h2>Inventory System</h2>
        <div className="nav-links">
          <Link to="/">Products</Link>
          <Link to="/raw-materials">Raw Materials</Link>
          <Link to="/production">Production</Link>
        </div>
      </nav>

      <main className="content">
        {children}
      </main>
    </div>
  );
}
