import * as zod from 'zod';

const obrigatoryField = { invalid_type_error: "Campo obrigatório" };

export const userInformationValidationSchema = zod.object({
  cep: zod.string(obrigatoryField).min(8, 'Cep inválido, Mín: 8 caracteres').max(9, 'Máx: 9 caracteres'),
  rua: zod.string(obrigatoryField).min(2, 'Min: 2 caracteres').max(50, 'Máx: 50 caracteres'),
  numero: zod.number(obrigatoryField).min(1, 'Min: 1 caracter'),
  complemento: zod.string().max(50, 'Max: 50 caracteres').optional(),
  bairro: zod.string(obrigatoryField).min(2, 'Min: 2 caracteres'),
  cidade: zod.string(obrigatoryField).min(2, 'Min: 2 caracteres'),
  uf: zod.string(obrigatoryField).min(2, 'Máx: 2 caracteres'),
  formaPagamento: zod.enum(["credito", "debito", "dinheiro"], { errorMap: () => ({ message: "Inserir forma de pagamento" }) }),
});

export type IFormInformationSchema = zod.infer<typeof userInformationValidationSchema>;