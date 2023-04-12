import { render, screen } from '@testing-library/react';
import React from 'react';
import Promo from './Promo';
import { BrowserRouter } from 'react-router-dom';

describe("Promo", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Promo />
            </BrowserRouter>
        );
    })
    test('Check Promo Cards qnt', () => {
        let cards = screen.getAllByAltText("Product")
        expect(cards.length).toBeGreaterThan(7)
        expect(cards.length).toBeLessThan(9)
    });
    test('Check Promo Cards have Popular Field', () => {
        let popular = screen.getAllByText("ПОПУЛЯРНОЕ")
        expect(popular.length).toBeGreaterThan(7)
        expect(popular.length).toBeLessThan(9)
    });
    test('Check Promo Cards have Button to Add Basket', () => {
        let buttons = screen.getAllByRole("button")
        expect(buttons.length).toBeGreaterThanOrEqual(8)
        expect(buttons.length).toBeLessThanOrEqual(16)
    });
    test('Check Promo Cards have Images', () => {
        let imgs = screen.getAllByRole("img")
        expect(imgs.length).toBeGreaterThanOrEqual(8)        
    });
})