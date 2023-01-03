import React from "react";
import Start from "../components/Landing/Landing";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import video from "../resources/videogames.mp4";
import pressstart from "../resources/PressStart.gif";

configure({ adapter: new Adapter() });


describe("<Start />", () => {
    const start = shallow(<Start/>)
    
      
    it('Debería renderizar dentro de un tag "video", otro tag "source" con el video provisto en la carpeta "../resources/videogames.mp4"', () => {
        expect(start.find("source").at(0).prop("src")).toEqual(video);
    })

    it('Debería renderizar un "h1" con el texto "GAMES W✫RLD"', () => {
        expect(start.find("h1").at(0).text()).toEqual("GAMES W✫RLD");
    })

    it('Deberia renderizar un "Link" a /home.', () => {
        expect(start.find("Link").at(0).prop("to")).toEqual("/home");
    })

    it('Debería renderizar en un tag "img" la imagen provista en la carpeta "../resources/PressStart.gif"', () => {
        expect(start.find("img").at(0).prop("src")).toEqual(pressstart);
    })

    it('La imagen debería tener un atributo "alt" con el texto "PRESS START"', () => {
        expect(start.find("img").at(0).prop("alt")).toEqual("PRESS START");
    })
})