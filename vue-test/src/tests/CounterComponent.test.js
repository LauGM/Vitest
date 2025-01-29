import {describe, expect, it, afterEach} from 'vitest'
import CounterComponent from '../components/CounterComponent.vue'
import {render, screen, cleanup} from "@testing-library/vue";

describe('CounterComponent', () => {
    afterEach(cleanup);

    it('should render correctly', () => {
        render(CounterComponent);
        expect(screen.getByText('Count: 0')).toBeDefined();
    });

    it('should have two buttons in the document', () => {
        render(CounterComponent);
        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(2);
      });

      it('should increment correctly', async() => {
        render(CounterComponent);
        const sumaBtn = screen.getByRole('button',{name: '+'});
        await sumaBtn.click();
        expect(screen.getByText('Count: 1')).toBeDefined();
      });

      it('should decrement correctly when count is greater than or equal to 1', async () => {
        render(CounterComponent);
        const sumaBtn = screen.getByRole('button',{name: '+'});
        await sumaBtn.click();
        const restaBtn = screen.getByRole('button',{name: '-'});
        await restaBtn.click();
        expect(screen.getByText('Count: 0')).toBeDefined();
      });
    
      it('should not decrement if count is 0', async () => {
        render(CounterComponent);
        const restaBtn = screen.getByRole('button',{name: '-'});
        await restaBtn.click();
        expect(screen.getByText('Count: 0')).toBeDefined();
      });
});