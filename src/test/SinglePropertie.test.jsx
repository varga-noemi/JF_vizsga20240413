import {render,screen} from '@testing-library/react'
import { SinglePropertie } from '../components/SinglePropertie'
import {expect,describe,it} from 'vitest'

describe('SinglePropertie.jsx',()=>{
   
    it('a komponens megjeleníti az ingatlan alapterületét',()=>{
        render(<SinglePropertie/>)
        const alapteruletElement=screen.getByText(/alapterület/i)
        expect(alapteruletElement).toBeInTheDocument()
    })
    it('a komponens megjeleníti az ingatlan szobáinak a számát',()=>{
        render(<SinglePropertie/>)
        const szobakElement=screen.getByText(/szobák száma/i)
        expect(szobakElement).toBeInTheDocument()
    })
    it('a komponens megjeleníti az ingatlan eladójának a nevét',()=>{
        render(<SinglePropertie/>)
        const eladoElement=screen.getByText(/eladó/i)
        expect(eladoElement).toBeInTheDocument()
    })
})