
export function Footer() {
    return (
      <footer className="bg-gray-200 text-center p-4 mt-8">
        <p className="text-gray-700">
          Desenvolvido por <span className="font-bold">CampoTech</span>
        </p>
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Todos os direitos reservados.</p>
      </footer>
    );
  }
  