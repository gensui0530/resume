export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-8 mt-20">
      <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
        <p>&copy; {currentYear} All rights reserved.</p>
      </div>
    </footer>
  );
}
