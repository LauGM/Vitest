import { describe, it, expect, vi } from 'vitest';
import { callExternalApi } from '../src/asyncMock';

vi.mock('../src/asyncMock', () => {
    return {
        callExternalApi: () => {
            return Promise.resolve({
                json: vi.fn().mockReturnValue({ data: 'datos simulados' })
            });
        },
    };
});

describe('Test: Fetching data from API', () => {
    it('should return mocked data', async () => {
        const response = await callExternalApi();
        const result = await response.json();
        expect(result).toEqual({ data: 'datos simulados' });
    });
}); 
