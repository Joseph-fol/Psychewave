export function Footer() {
    return (
      <footer className="bg-dark border-t border-white/10">
        <div className="container mx-auto py-12 px-4 text-center text-white">
          <p>&copy; {new Date().getFullYear()} Psychewave. All Rights Reserved.</p>
        </div>
      </footer>
    );
  }