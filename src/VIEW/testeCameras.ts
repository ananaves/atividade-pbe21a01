    import { Cameras } from "../MODEL/Cameras";

const novoCamera: Cameras = new Cameras (1000, "digital", "retangular" ); 

novoCamera.gravar();
novoCamera.tirarFoto();