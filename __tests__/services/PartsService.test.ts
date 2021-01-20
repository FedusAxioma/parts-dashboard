import PartsRepository from '../../src/api/PartsRepository';
import PartsService from '../../src/services/PartsService';

describe('PartsService', () => {
	describe('getPartA', () => {
		test('getPartA returns Part', async () => {
			const expectedResult = { id: '123', name: 'test', features: [] };

			PartsRepository.getPart = jest.fn().mockResolvedValue(expectedResult);

			expect(await PartsService.getPartA()).toEqual(expectedResult);
		});

		test('getPartA is called with PartA identifier', async () => {
			const expectedResult = { id: '123', name: 'test', features: [] };

			PartsRepository.getPart = jest.fn().mockResolvedValue(expectedResult);

			await PartsService.getPartA();

			expect(PartsRepository.getPart).toBeCalledWith('PartA');
		});
	});
});
