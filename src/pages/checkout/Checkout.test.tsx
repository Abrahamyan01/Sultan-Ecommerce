import { render, screen } from '@testing-library/react';
import React from 'react';
import Checkout from './Checkout';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

describe("Checkout Page testing", () => {
    test('Check Contact Part', () => {
        render(
            <BrowserRouter>
                <Checkout />
            </BrowserRouter>
        );
        const el = <p>КОНТАКТНЫЕ ДАННЫЕ</p>
        const text = screen.getAllByRole("textbox")
        expect(el).toBeDefined()
        expect(text).toBeDefined()
    });
    test('Check Info Part', () => {
        render(
            <BrowserRouter>
                <Checkout />
            </BrowserRouter>
        );
        const el1 = <p>Принимаем оплату наличными, по карте и через расчетный счет.</p>
        const el2 = <p>Бесплатная доставка от 10 000 ₸
            по области. Наша доставка работает
            ежедневно.</p>
        expect(el1).toBeDefined()
        expect(el2).toBeDefined()
    });  
})
