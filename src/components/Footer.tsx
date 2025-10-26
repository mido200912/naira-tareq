export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Nira Tarek. All rights reserved.</p>
          <p className="mt-2">Designed with passion and creativity.</p>
        </div>
      </div>
    </footer>
  );
};
