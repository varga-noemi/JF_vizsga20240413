import {render,screen,within} from '@testing-library/react'
import {Home} from '../components/Home'
import {expect,describe,it} from 'vitest'

describe('Home.jsx',()=>{
   
    it('a címsor tartalma megfelelő',()=>{
        render(<Home/>)
        const titleElement=screen.getByRole('heading',{name:/Ingatlaniroda/i})
        expect(titleElement).toBeInTheDocument()
    })
    it('a címsor egyes szintű',()=>{
        render(<Home/>)
        const titleElement=screen.getByRole('heading',{name:/Ingatlaniroda/i})
        expect(titleElement.tagName).toBe('H1'); // Ellenőrizzük, hogy az elem h1 típusú
    })
    it('renderelve van a header tag', () => {
        render(<Home />);
        const headerElement = screen.getByRole('banner');
        expect(headerElement).toBeInTheDocument();
    })
    it('renderelve van a main tag', () => {
        render(<Home />);
        const mainElement = screen.getByRole('main');
        expect(mainElement).toBeInTheDocument();
    })
    it('renderelve van a footer tag', () => {
        render(<Home />);
        const footerElement = screen.getByRole('contentinfo');
        expect(footerElement).toBeInTheDocument();
    });

  
    it('a main tag tartalmaz egy 4-es szintű címsort megfelelő tartalommal', () => {
        render(<Home />);
        const mainElement = screen.getByRole('main');
        const h2Element=within(mainElement).getByText('Ingatlanok minden kategóriában')
        expect(h2Element.tagName).toBe('H4');
    })
    it('a footer tag tartalma megfelelő', () => {
        render(<Home />);
        const footerElement = screen.getByRole('contentinfo');
        const pElement=within(footerElement).getByText(/2024 JF project. All rights reserved./i)
        expect(pElement).toBeInTheDocument();
    });

})