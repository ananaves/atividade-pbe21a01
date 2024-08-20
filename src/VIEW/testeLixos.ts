import { Lixos } from "../MODEL/Lixos";
const novoLixos: Lixos = new Lixos ("produtos-reciclaveis", "redondo", "amarelo, vermelho, azul, verde, marrom" ); 

novoLixos.minimizarImpactosAoMeioAmbiente();
novoLixos.reciclarMateriais();