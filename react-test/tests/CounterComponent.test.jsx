import CounterComponent from "../src/components/CounterComponent";

import {describe, it, expect, afterEach} from 'vitest';

import {cleanup, fireEvent, render, screen} from '@testing-library/react';

describe('CounterComponent', ()=>{

    afterEach(cleanup);

    it('should render correctly', ()=>{
        render(<CounterComponent />);
        expect(screen.getByText('Count: 0')).toBeDefined();
    });

    it('should have two buttons in the document', ()=>{
        render(<CounterComponent />);
        const buttons=screen.getAllByRole('button');
        expect(buttons).toHaveLength(2);
    });

    it('should increment correctly', ()=>{
        render(<CounterComponent />);
        const sumaBtn = screen.getByRole('button', {name: '+'});
        fireEvent.click(sumaBtn);
        expect(screen.getByText('Count: 1')).toBeDefined();
    });

    it('should decrement correctly when count is greater than 0', ()=>{
        render(<CounterComponent />);
        const sumaBtn = screen.getByRole('button', {name: '+'});
        fireEvent.click(sumaBtn);
        const restaBtn = screen.getByRole('button', {name: '-'});
        fireEvent.click(restaBtn);
        expect(screen.getByText('Count: 0')).toBeDefined();
    });

    it('should not decrement if count is 0', ()=>{
        render(<CounterComponent />);
        const restaBtn = screen.getByRole('button', {name: '-'});
        fireEvent.click(restaBtn);
        expect(screen.getByText('Count: 0')).toBeDefined();
    });
});