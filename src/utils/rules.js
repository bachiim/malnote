export const RULES = {
  required: (value) => value !== null && value !== undefined && value !== '' || 'Harus diisi',
}