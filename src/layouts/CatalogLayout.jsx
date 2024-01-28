import {PokemonList, LoadMoreButton, ScrollToTopButton} from "../components/index.js";
import {PokemonPage} from "../pages/index.js";

export const CatalogLayout = () => {
    return <div className='container-content'>
        <div className='left-section'>
            <PokemonList />
            <LoadMoreButton />
        </div>
        <div className='right-section'>
            <PokemonPage />
        </div>
        <ScrollToTopButton />
    </div>
}