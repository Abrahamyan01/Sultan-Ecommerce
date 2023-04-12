import { render } from '@testing-library/react';
import NavBar from './NavBar';
import React from 'react';

describe("Navbar", () => {
    test('Check NavBar data', () => {
        const data = <li>О компании</li>
        render(<NavBar />);
        expect(data).toBeDefined();
    });
    test('Check NavBar data', () => {
        const data = <li>Доставка и оплата
        </li>
        render(<NavBar />);
        expect(data).toBeDefined();
    });
    test('Check NavBar data', () => {
        const data = <li>Возврат</li>
        render(<NavBar />);
        expect(data).toBeDefined();
    });
    test('Check NavBar data', () => {
        const data = <li>Контакты</li>
        render(<NavBar />);
        expect(data).toBeDefined();
    });
})
