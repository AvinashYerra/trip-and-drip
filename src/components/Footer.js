const Footer = () => (
  <footer className="footer">
    <p>© {new Date().getFullYear()} Trip & Drip. Built with taste.</p>
    <div>Powered by Qloo’s Taste AI™</div>
    <style jsx>{`
      .footer {
        background: #fafafa;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 30px 0;
        font-size: 0.9rem;
        color: #666;
        min-height: 90px;
      }
    `}</style>
  </footer>
);

export default Footer;
