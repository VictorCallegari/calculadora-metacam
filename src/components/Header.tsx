import { Container } from "./Container";

export function Header() {
  return (
    <header>
      <Container>
        <div className="flex flex-col md:flex-row items-center md:items-start mt-10 text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <img
              src="metacam-logo.png"
              alt="logo"
              className="w-full max-w-[150px] md:max-w-[200px]"
            />
          </div>
          <div className="md:ml-6">
            <p className="text-3xl md:text-7xl font-bold text-[#852a85]">
              A REFERÊNCIA MUNDIAL EM MELOXICAM
            </p>
            <p className="my-4 text-xl text-[#a169a9]">
              INDISPENSÁVEL NA FARMÁCIA DA SUA FAZENDA
            </p>
          </div>
        </div>
      </Container>
      <hr className="shadow-md border" />
    </header>
  );
}
