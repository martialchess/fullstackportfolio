// my-portfolio/components/Footer.tsx

export default function Footer() {
    return (
      <footer className="bg-white mt-20 py-6 shadow-inner">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Rida Malik. All rights reserved.
        </div>
      </footer>
    );
  }
  