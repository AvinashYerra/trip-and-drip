import Image from "next/image";

const Footer = () => (
  <footer className="footer">
    <p>© {new Date().getFullYear()} Trip & Drip. </p>
    <p>Made with style.</p>
    <div>Powered by Qloo & Gemini</div>

    <div className="social-links">
      <a href="https://github.com/AvinashYerra/trip-and-drip" target="_blank" rel="noopener noreferrer">
        <Image src="/icons/github.png" alt="GitHub" width={30} height={30} />
      </a>
    </div>
    <style jsx>{`
      .footer {
        background: #fafafa;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 20px 0;
        font-size: 0.9rem;
        color: #000;
        min-height: 108px;
        gap: 2px;
      }

      .social-links {
        padding-top: 10px;
      }
    `}</style>
  </footer>
);

export default Footer;
