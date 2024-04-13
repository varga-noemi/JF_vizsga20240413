import {render,screen,fireEvent} from '@testing-library/react'
import {Contact} from '../components/Contact'
import {expect,describe,it} from 'vitest'

const consoleSpy = vi.spyOn(console, 'log')

describe('Contact.jsx',()=>{
   
    it('a címsor tartalma megfelelő',()=>{
        render(<Contact/>)
        const titleElement=screen.getByRole('heading',{name:/Lépj velünk kapcsolatba/i})
        expect(titleElement).toBeInTheDocument()
    })

    it('az űrlap létre van hozva',()=>{
        render(<Contact/>)
        const formElement=document.querySelector('form')
        expect(formElement).toBeInTheDocument()
    })
    it('az űrlap tartalmaz egy email típusú input elemet',()=>{
        render(<Contact/>)
        const emailInput=document.querySelector('input[type="email"]')
        expect(emailInput).toBeInTheDocument()
    })
    it('az űrlap tartalmaz egy textarea elemet',()=>{
        render(<Contact/>)
        const textareaElement=document.querySelector('textarea')
        expect(textareaElement).toBeInTheDocument()
    })
    it('az űrlap tartalmaz egy submit típusú gombot',()=>{
        render(<Contact/>)
         const buttonElement = screen.getByRole("button", {type:"submit"});
        expect(buttonElement).toBeInTheDocument()
    })
    it('a submit gombra való kattintáskor létrejön egy objektum a három kötelező attríbútummal: email, message és timestamp',()=>{
        render(<Contact/>)
         const buttonElement = screen.getByRole("button", {type:"submit"});
         fireEvent.click(buttonElement)
         expect(consoleSpy).toHaveBeenCalled()
         expect(consoleSpy.mock.calls[0][0]).toHaveProperty('email')
         expect(consoleSpy.mock.calls[0][0]).toHaveProperty('message')
         expect(consoleSpy.mock.calls[0][0]).toHaveProperty('timestamp')
        
        });
    })
   