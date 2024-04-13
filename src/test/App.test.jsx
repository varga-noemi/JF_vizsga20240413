import {render,screen} from '@testing-library/react'
import App from '../App'
import {expect,describe,it} from 'vitest'
import {HashRouter,MemoryRouter} from 'react-router-dom'


const renderWithRouter = (ui, { route = '/', ...renderOptions } = {}) => {
    return render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>, renderOptions);
  };

const MockApp=()=>{
    return(
        <HashRouter>
            <App />
        </HashRouter>
    )
    
}

vi.mock("../components/Contact", async (importOriginal) => {
    const actual = await importOriginal()
    return {
        ...actual,
        Contact: ()=><div>contact page</div>
    }
  })

describe('App.jsx',()=>{
    it('a projekt létrejött',()=>{
        render(<MockApp/>)
        expect(document.getElementById('app')).toBeInTheDocument()
    })

    it('contact route létrejött', () => {
        renderWithRouter(<App />, { route: '/contact' });
        const contactPage=screen.getByText(/contact page/i)
        expect(contactPage).toBeInTheDocument();

      });

})