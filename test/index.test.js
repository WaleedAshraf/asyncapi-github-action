const validate = require('../validator');

test('throws invalid path', async() => {
  await expect(validate(123)).rejects.toThrow('path is not string');
});

test('should not throw error on valid schema', async () => {
  await expect(validate('./test/mock-schema.yaml')).resolves.not.toThrow()
});

test('should throw error on invalid schema', async () => {
  await expect(validate('./test/mock-invalid-schema.yaml')).rejects.toThrow()
});
