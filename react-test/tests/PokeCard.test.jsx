import { describe, expect, it } from "vitest";
import PokeCard from "../src/components/PokeCard";
import { render, screen } from "@testing-library/react";

describe("PokeCard", () => {
    const pokemon = {
        name: 'pikachu',
        sprites: {
          front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        },
        types: [{ type: { name: 'electric' } }],
        height: 4,
        weight: 60,
        forms: [{ name: 'pikachu' }],
      };

      it('should render without a Pokemon',()=>{
        render(<PokeCard />);
        expect(screen.getByText('No Pokemon selected')).toBeDefined();
      })

      it('should render a pokemon',()=>{
        render(<PokeCard pokemon={pokemon}/>);
        expect(screen.getByText('pikachu')).toBeDefined();
        expect(screen.getByText('Height: 4')).toBeDefined();
        expect(screen.getByText('Weight: 60')).toBeDefined();
        expect(screen.getByText('Type: electric')).toBeDefined();
        expect(screen.getByRole('img')).toBeDefined();
      });

      it('should display an error if Pokemon data is missing',()=>{
        render(<PokeCard pokemon={{}}/>);
        expect(screen.getByText('Error loading Pokemon data')).toBeDefined();
      })
      
});
