import { Carousel } from "./Compents/Carousel";
import { ExploreBox } from "./Compents/ExploreBox";
import { Heros } from "./Compents/Heros";
import { LibraryServices } from "./Compents/LibraryServices";

export const HomePage= () =>{
    return (
        <>
          <ExploreBox/>
          <Carousel />
          <Heros/>
          <LibraryServices/>
        </>
    );
}